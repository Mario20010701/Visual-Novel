namespace Template {
    export async function scn_2GFs(): ƒS.SceneReturn {
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);
        await ƒS.Sound.fade(sound.Drillpianos, 1, 2, false);
        await ƒS.Location.show(backgrounds.BG_HBSturm);
        await ƒS.update(2);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_einJahr);
        await ƒS.update(2);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_Hotelroom);
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.Alice, "Na?");
        await ƒS.Character.show(characters.Alice, characters.Alice.pose.dylwys, ƒS.positions.bottomcenter);
        await ƒS.update(2);
        await ƒS.Character.show(characters.Sakura, characters.Sakura.pose.dylwys, ƒS.positions.bottomcenter);
        await ƒS.Speech.tell(characters.Sakura, "Do you like what you see?");
        await ƒS.update(1);
        ƒS.Speech.hide();
        await ƒS.update(1);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_Black)
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(3);
        await ƒS.Location.show(backgrounds.BG_Ende);
        await ƒS.update(3);
    };
}