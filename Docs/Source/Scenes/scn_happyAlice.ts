namespace Template {
    export async function scn_happyAlice(): ƒS.SceneReturn {
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(2);
        await ƒS.Sound.fade(sound.Suite, 1, 2, false);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);

        await ƒS.Location.show(backgrounds.BG_HBSturm);
        await ƒS.update(2);
        await ƒS.update(4);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_einJahr);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_Straße1);
        await ƒS.Character.show(characters.Alice, characters.Alice.pose.default, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Alice, "Ich bin froh, dass alles gut gegangen ist. Und jetzt bin nicht nur ich, sondern die ganze Stadt ist wieder clean.");
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Alice, DataForSave.nameProtagonist);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Alice, "Ich liebe dich.");
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_Black);
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(3);
        await ƒS.Location.show(backgrounds.BG_Ende);
        await ƒS.update(3);
    };
}