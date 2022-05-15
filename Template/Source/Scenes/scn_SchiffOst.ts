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
        await ƒS.Location.show(backgrounds.BG_Black)
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, "einige Jahre zuvor");
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.narrator, "Wie ist dein Name?  ");
        await ƒS.update(1);
        DataForSave.nameProtagonist = await ƒS.Speech.getInput();
        console.log(DataForSave.nameProtagonist);
        ƒS.Speech.hide();
        await ƒS.update(0.5);
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_trad);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Vater, characters.Vater.pose.default, ƒS.positions.left);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Vater,DataForSave.nameProtagonist);
        await ƒS.update(0.2);
        ƒS.Speech.tell(characters.Vater,"Bald wird dein kleiner Bruder, Yamato, auch zur Armee gehen, damit aus ihm auch so ein tapferer Soldat Japans wird, wie du einer bist.");
        await ƒS.update(0.5);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Vater,"Ich bin stolz auf dich, mein Sohn. Wirst du nicht morgen zum Rikugun Chūjō (Generalleutnant) befördert?");
        await ƒS.update(1);
        await ƒS.Speech.tell(DataForSave.nameProtagonist,"Ja Vater, ich werde unserem Japan alle Ehre machen.");
        await ƒS.Speech.tell(characters.Vater,"Vergiss die Geschichte nicht. Heute mögen die Deutschen unsere Verbündeten sein, aber vor 26 Jahren waren wir im Krieg mit ihnen. Vielleicht wird es wieder so kommen.");
        await ƒS.Speech.tell(DataForSave.nameProtagonist,"Der Dreimächtepakt ist in Japans bestem Interesse, Vater. Japan wird ein Teil der neuen Welt sein, die in diesen schicksalhaften Jahren des Kampfes entsteht.");
        await ƒS.Speech.tell(DataForSave.nameProtagonist,"Ich werde mein Bestes geben, und dafür sorgen, dass die Japaner in dieser kommenden Welt den Platz einnehmen werden, der ihnen auch zusteht.");
        ƒS.Speech.hide();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Vater,"Danke dass du mich besucht hast ");
        }
}