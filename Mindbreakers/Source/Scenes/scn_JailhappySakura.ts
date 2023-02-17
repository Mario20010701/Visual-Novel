namespace Template {
    export async function scn_JailhappySakura(): ƒS.SceneReturn {
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
        await ƒS.Location.show(backgrounds.BG_SEK);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, "Nachdem ich mich der Polizei gestellt habe, gelang es Sondereinsatzkräften, mit Hilfe meiner Aussagen, den Hammerbreaker-Schwarzmarkt in dieser Stadt zu beseitigen.");
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_Gefängnis);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, "Ich habe mich der Polizei gestellt, fünf Jahre wegen Drogenhandels in diesem Gefängnis abgesessen. Endlich bin ich wieder frei.");
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, "Ich hatte sehr Glück. Denn es gab da ein Mensch, der mich nicht vergessen hatte und auf mich gewartet hat.");
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_London);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Sakura, characters.Sakura.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Sakura, DataForSave.nameProtagonist);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Sakura, "Ich bin so froh dass wir endlich wieder zusammen sein können. Mein..");
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Sakura, DataForSave.nameProtagonist);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Sakura, "Ich liebe dich.");
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_Black)
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(3);
        await ƒS.Location.show(backgrounds.BG_Ende);
        await ƒS.update(3);
    };
}