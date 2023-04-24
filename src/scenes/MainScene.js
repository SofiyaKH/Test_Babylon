import {
    Engine, Scene, ArcRotateCamera, Vector3, Tools, StandardMaterial, HemisphericLight, CreateSphere, CreateGround, ActionManager,
    ExecuteCodeAction, Color3, GizmoManager
} from "@babylonjs/core";

const createScene = (canvas, tool) => {

    const engine = new Engine(canvas);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera("camera", Tools.ToRadians(90), Tools.ToRadians(65), 10, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);


    new HemisphericLight("light", Vector3.Up(), scene);
    const material = new StandardMaterial("box-material", scene);
    const materialOnChoose = new StandardMaterial("box-material", scene);
    materialOnChoose.diffuseColor = Color3.Gray()

    const sphere = CreateSphere("sphere", { segments: 16, diameter: 2 }, scene);
    sphere.position.y = 2;
    sphere.material = material;
    sphere.actionManager = new ActionManager(scene);
    // sphere.actionManager
    //     .registerAction(new ExecuteCodeAction(ActionManager.OnPickUpTrigger, function () {
    //         sphere.material = materialOnChoose;
    //     }))
    //     .then(new ExecuteCodeAction(ActionManager.OnPickUpTrigger, function () {
    //         sphere.material = material;
    //     }));

    const ground = CreateGround("ground", { width: 6, height: 6, subdivisions: 2 }, scene);
    ground.material = material;

    // ground.actionManager = new ActionManager(scene);
    // ground.actionManager
    //     .registerAction(new ExecuteCodeAction(ActionManager.OnPickUpTrigger, function () {
    //         ground.material = materialOnChoose;
    //     }))
    //     .then(new ExecuteCodeAction(ActionManager.OnPickUpTrigger, function () {
    //         ground.material = material;
    //     }));

    const gizmoManager = new GizmoManager(scene)
    gizmoManager.attachableMeshes = [sphere, ground]

    const toolBtn = document.querySelector('#tool')

    toolBtn.addEventListener('click', () => {
        if (tool.value == 'cursor') {
            console.log('cursor');
            gizmoManager.scaleGizmoEnabled = false
            gizmoManager.rotationGizmoEnabled = false
            gizmoManager.positionGizmoEnabled = false
            gizmoManager.boundingBoxGizmoEnabled = false
        }
        if (tool.value == 'rotate') {
            console.log('rotate');
            gizmoManager.scaleGizmoEnabled = false
            gizmoManager.rotationGizmoEnabled = true
            gizmoManager.positionGizmoEnabled = false
            gizmoManager.boundingBoxGizmoEnabled = false
        }
        if (tool.value == 'scale') {
            console.log('scale');
            gizmoManager.scaleGizmoEnabled = true
            gizmoManager.rotationGizmoEnabled = false
            gizmoManager.positionGizmoEnabled = false
            gizmoManager.boundingBoxGizmoEnabled = false
        }
        if (tool.value == 'offset') {
            console.log('offset');
            gizmoManager.scaleGizmoEnabled = false
            gizmoManager.rotationGizmoEnabled = false
            gizmoManager.positionGizmoEnabled = true
            gizmoManager.boundingBoxGizmoEnabled = true
        }
    })


    engine.runRenderLoop(() => {
        scene.render();
    });
};



export { createScene };