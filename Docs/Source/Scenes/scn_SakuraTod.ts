namespace Template {
    export async function scn_SakuraTod(): ƒS.SceneReturn {
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(2);
        await ƒS.Sound.fade(sound.HBsoundtrack, 1, 2, false);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);

        await ƒS.Location.show(backgrounds.BG_HBSturm);
        await ƒS.update(4);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_SakuraTod);
        await ƒS.update(2);
        await ƒS.update(10);
        await ƒS.Location.show(backgrounds.BG_Black)
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(3);
        await ƒS.Location.show(backgrounds.BG_Ende);
        await ƒS.update(3);
    };
}