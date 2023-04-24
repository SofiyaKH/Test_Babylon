import { Engine, Scene, ArcRotateCamera, Vector3, Tools, StandardMaterial, HemisphericLight, CreateSphere, CreateGround } from "@babylonjs/core";
const createScene = (canvas) => {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera("camera", Tools.ToRadians(90), Tools.ToRadians(65), 10, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    new HemisphericLight("light", Vector3.Up(), scene);
    const material = new StandardMaterial("box-material", scene);

    const sphere = CreateSphere("sphere", { segments: 16, diameter: 2 }, scene);
    sphere.position.y = 2;
    sphere.material = material;

    const ground = CreateGround("ground", { width: 6, height: 6, subdivisions: 2 }, scene);
    ground.material = material;

    engine.runRenderLoop(() => {
        scene.render();
    });
};



export { createScene };