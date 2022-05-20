namespace Template {
    export async function scn_Vater2():ƒS.SceneReturn {
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
        await ƒS.Speech.tell(characters.Vater,"Bald wird dein kleiner Bruder, Yamato, auch zur Armee gehen, damit aus ihm auch so ein tapferer Soldat Japans wird, wie du einer bist.");
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
        await ƒS.Speech.tell(characters.Vater,"Danke dass du Zeit gefunden hast, vorbeizuschauen. Ich weiß du hast viel zu tun, aber ich denke, deine Mutter würde sich ebenfalls freuen wenn sie dich noch einmal als Leutnant sehen darf.");
        await ƒS.Speech.tell(characters.Vater,"Hast du noch einen Moment Zeit für deine Mutter, bevor du nach Tokyo aufbrichst?");
        
        let Motherdialog = {
            Yes: "Natürlich Vater",
            no: "Ich befürchte, ich werde sonst zu spät eintreffen"
        }
        let MotherYesNo = await ƒS.Menu.getInput(Motherdialog, "individualCSSClass");
        console.log(MotherYesNo);//gibt Informationen/Variabeln in Browserkonsole aus (f12)
      
        switch (MotherYesNo) {
        case Motherdialog.Yes:
        await ƒS.Speech.tell(characters.Vater,"Ich schicke Sie gleich zu dir.");
        await ƒS.update(0.5);
        ƒS.Speech.hide();
        ƒS.Character.hideAll();
        await ƒS.update(2.5);
        await ƒS.Speech.tell(characters.Vater,"Natsuki!");
        await ƒS.Speech.tell(characters.Vater,"Unser Sohn ist hier!");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.mother,"Welcher der meinen beiden wackeren Knaben ist es denn?");
        await ƒS.Speech.tell(characters.Vater,DataForSave.nameProtagonist);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.mother,"Oh, Ich komme sofort!");

        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        break;
        case Motherdialog.no:
        await ƒS.Speech.tell(characters.Vater,"Na, dann lass dich nicht aufhalten und frag deinen General bald nach Urlaub. Dann können wir mal wieder Mahjong gegeneinander spielen.");
        await ƒS.update(0.2);
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        break;
        }
        return scn_Tempel();
    }
}