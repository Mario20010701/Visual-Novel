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
        await ƒS.Speech.tell(characters.narrator, "einige Jahre vorher");
        await ƒS.update(1);
        await ƒS.Location.show(backgrounds.BG_trad)
        await ƒS.update(1);
        await ƒS.Character.show(characters.Vater, characters.Vater.pose.default, ƒS.positions.left);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Vater,"Charactername, bald wird dein kleiner Bruder, Yamato, auch zur Armee gehen, damit aus ihm auch so ein tapferer Soldat Japans wird, wie du einer bist.");
        await ƒS.update(0.5);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Vater,"Ich bin stolz auf dich, mein Sohn. Wirst du nicht morgen zum Rikugun Chūjō (Generalleutnant) befördert?");
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator,"Ja Vater, ich werde unserem Japan alle Ehre machen.");
        await ƒS.Speech.tell(characters.Vater,"Vergiss die Geschichte nicht. Heute mögen die Deutschen unsere Verbündeten sein, aber vor 26 Jahren waren wir im Krieg mit ihnen. Vielleicht wird es wieder so kommen.");
        await ƒS.Speech.tell(characters.narrator,"Der Dreimächtepakt ist in Japans bestem Interesse, Vater. Japan wird ein Teil der neuen Welt sein, die in diesen schicksalhaften Jahren des Kampfes entsteht.");
        await ƒS.Speech.tell(characters.narrator,"Ich werde mein Bestes geben, und dafür sorgen, dass die Japaner in dieser kommenden Welt den Platz einnehmen werden, der ihnen auch zusteht.");
        }
}