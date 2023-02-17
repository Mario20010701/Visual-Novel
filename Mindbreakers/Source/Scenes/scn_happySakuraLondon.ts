namespace Template {
    export async function scn_happySakuraLondon(): ƒS.SceneReturn {
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(2);
        await ƒS.Sound.fade(sound.zweiterDrill, 1, 2, false);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_einJahr);
        await ƒS.update(2);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_London);
        await ƒS.Character.show(characters.Sakura, characters.Sakura.pose.veryhappy, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Sakura, "Jetzt ist schon ein Jahr vergangen und du konntest niemanden finden, der Hammerbreakers verkauft, geschweige denn herstellt.");
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Sakura, "Aber ich denke das ist besser so. Ich mag es hier in London und ich mag unser Leben. Ich liebe dich.");
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Sakura, DataForSave.nameProtagonist);
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_Black);
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(3);
        await ƒS.Location.show(backgrounds.BG_Ende);
        await ƒS.update(3);
    };
}