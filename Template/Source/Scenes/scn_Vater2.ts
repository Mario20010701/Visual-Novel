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
        await ƒS.Speech.tell(characters.Mutter,"Welcher der meinen beiden wackeren Knaben ist es denn?");
        await ƒS.Speech.tell(characters.Vater,DataForSave.nameProtagonist);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Mutter,"Oh, Ich komme sofort!");
        await ƒS.Character.show(characters.Mutter, characters.Mutter.pose.default, ƒS.positions.bottomcenter);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Mutter, DataForSave.nameProtagonist);
        await ƒS.Speech.tell(characters.Mutter,"Ich bin so froh dich zu sehen. Wer weiß wie lange du in diesen schrecklichen Zeiten noch lebst mein Sohn.");
        await ƒS.Speech.tell(characters.Mutter,"Komm, ich hab dir Reisbällchen gemacht. du kannst sie essen, während ich dir ein Bad einlasse.");
        await ƒS.Speech.tell(DataForSave.nameProtagonist,"Es tut mir leid Mutter aber ich muss gleich wieder fort.");
        await ƒS.Speech.tell(DataForSave.nameProtagonist,"Ich bringe dir ein Souvenir aus China mit.");
        await ƒS.Speech.tell(characters.Mutter,"Ach, mein Sohn. Das wichtigste ist, dass du lebend zurück kommst. Du hast noch nicht einmal geheiratet. Ich habe solche Angst um dich.");
        await ƒS.Speech.tell(DataForSave.nameProtagonist,"Ich werde schon überleben Mutter. Zwar war Vater derjenige der maßgeblich zu meinem Werdegang in Japans Armee beigetragen hat");
        await ƒS.Speech.tell(DataForSave.nameProtagonist,"..aber gib ihm auch im Falle meines Todes keine Schuld Mutter. Solang Japan lebt, lebt auch unser Traum eines stolzen Imperiums, den anderen Nationen ebenbürtig.");
        await ƒS.Speech.tell(characters.Mutter,"Dein zukünftiges Glück wirst du nicht im Kampfe, im Schlachtfeld finden. Niemand wird das.");
        await ƒS.Speech.tell(characters.Mutter,"Nun denn, gib auf dich Acht und machs gut mein Sohn...");
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