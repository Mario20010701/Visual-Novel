namespace Template {
    export async function scn_schiffOst():ƒS.SceneReturn {
        await ƒS.Location.show(backgrounds.BG_blitz);
        await ƒS.update(0.1);
        await ƒS.Location.show(backgrounds.BG_Flugzeug);
        await ƒS.update(0.5);
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(0.1);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_AmisGefecht)
        await ƒS.update(0.2)

    }
}