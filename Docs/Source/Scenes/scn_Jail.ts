namespace Template {
    export async function scn_Jail(): ƒS.SceneReturn {
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(2);
        await ƒS.Sound.fade(sound.Technosoundtrack, 1, 2, false);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_Jahre);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);
        await ƒS.Location.show(backgrounds.BG_Gefängnis);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, "Ich habe mich der Polizei gestellt, fünf Jahre wegen Drogenhandels in diesem Gefängnis abgesessen. Endlich bin ich wieder frei.");
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_SEK);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, "Die Polizei hat ihr Versprechen eingehalten und mit Hilfe meiner Aussagen und dem Sondereinsatzkommando, den Hammerbreaker Schwarzmarkt in dieser Stadt beseitigt.");
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_Black)
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(3);
        await ƒS.Location.show(backgrounds.BG_Ende);
        await ƒS.update(3);
    };
}