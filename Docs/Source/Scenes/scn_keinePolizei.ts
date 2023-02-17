namespace Template {
  export async function scn_keinePolizei(): ƒS.SceneReturn {
    await ƒS.update(1.3);
    ƒS.Character.hideAll();
    await ƒS.update(3);
    await ƒS.Character.show(characters.Alice, characters.Alice.pose.default, ƒS.positions.left);
    await ƒS.Character.show(characters.Shuichi, characters.Shuichi.pose.default, ƒS.positions.right);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Alice, "In diesem Fall... Darf ich dir meinen Freund vorstellen? Sein Name ist Shuichi.");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Shuichi, "Hallo, nett dich kennen zu lernen. Ich habe mitbekommen, dass du in Schwierigkeiten steckst.");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Shuichi, "Wenn dieses Teil da in deiner wulstigen Manteltasche keine Waffe ist, würde ich sagen, du brauchst eine Pistole.");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Shuichi, "... nur für den Notfall");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Shuichi, "Zufälligerweise, kann ich dir diese Waffe verkaufen. Keine Sorge, bezahlen kannst du ein ander mal.");
    await ƒS.update(0.1);
    await ƒS.Character.hide(characters.Shuichi);
    await ƒS.update(0.01);
    await ƒS.Character.show(characters.Shuichi, characters.Shuichi.pose.weapon, ƒS.positions.right);
    await ƒS.update(0.01);
    await ƒS.Speech.tell(characters.Shuichi, "Bittesehr");
    await ƒS.Character.hide(characters.Shuichi);
    await ƒS.update(0.01);
    await ƒS.Character.show(characters.Shuichi, characters.Shuichi.pose.default, ƒS.positions.right);
    await ƒS.update(0.01);
    ƒS.Inventory.add(inventory.Waffe);
    ƒS.Sound.play(sound.door, 1, false);
    await ƒS.update(1);
    await ƒS.update(0.01);
    await ƒS.Sound.fade(sound.isokschnell, 0, 0.01, true);
    ƒS.Sound.play(sound.gunshots2, 1, false);
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.Location.show(backgrounds.BG_Black);
    await ƒS.update(0.8);
    await ƒS.update(2.1);
    ƒS.Sound.play(sound.luger, 1, false);
    await ƒS.update(3);
    await ƒS.Location.show(backgrounds.BG_BarWeap);
    await ƒS.update(1);
    await ƒS.Sound.fade(sound.Dumm, 1, 1, true);
    await ƒS.Speech.tell(characters.Alice, "Wow, wie hast du das gemacht? Ich bin beeindruckt.");
    await ƒS.Character.show(characters.Alice, characters.Alice.pose.default, ƒS.positions.left);
    await ƒS.Character.show(characters.Shuichi, characters.Shuichi.pose.default, ƒS.positions.right);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Shuichi, "Heidablitz, das war ja mal knapp. Du scheinst ein sehr guter Schütze zu sein. ...Zwei Kopfschüsse und ein Streifschuss.");
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.narrator, "... .... .....ja, scheint so. Ich fühle mich schon etwas besser.");
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.Shuichi, "Wie war das? Du hast deine Erinnerungen verloren, ja? Wie man schießt weißt du anscheinend noch gut.");
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.Shuichi, "Wie dem auch sei, danke, dass du uns vor denen beschützt hast. Aber ihr habt alle gesehen, einer von ihnen konnte entkommen.");
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.Shuichi, "Die Polizei wird bestimmt schon unterwegs sein. Hey, was ist das da?  ..in deiner Manteltasche?");
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.narrator, "Was meinst du? Achso, meine Tasche...");
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, "[Q = Inventar öffnen]");
    await ƒS.update(5);
    await ƒS.Speech.tell(characters.Shuichi, "Ein Radio, interessant. Na dann schalte ihn mal an, vielleicht hören wir es ja, wenn der dritte Täter von der Polizei gefasst wird");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Shuichi, "Hör' ruhig ein bisschen Radio und entspann' dich, während ich mich ein bisschen mit Alice unterhalte.");
    await ƒS.update(0.1);
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.update(0.8);
    await ƒS.update(5);
    await ƒS.Speech.tell(characters.Shuichi, "Alice, dieser Typ bedeuted Ärger, das kann ich riechen.");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Alice, "Ach komm schon Shuichi...");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Alice, "Findest du ihn nicht auch total schnuckelig?");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Shuichi, "Er ist... attraktiv, das muss man ihm lassen.");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Alice, "Ja.., ich glaube ich hab mich etwas .....");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Shuichi, "Sei einfach vorsichtig.");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Alice, "Sind wir fertig?");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Shuichi, "Ja. HEY DUU!!");
    await ƒS.Character.show(characters.Shuichi, characters.Shuichi.pose.default, ƒS.positions.bottomcenter);
    await ƒS.update(0.8);
    await ƒS.Speech.tell(characters.Shuichi, "Hey, willst du dich noch eine halbe Minute deinem Radio widmen?");
    await ƒS.update(0.8);
    let Radiowidmen = {
      Ja: "Eine weitere halbe Minute Radio hören",
      No: "Ich bin fertig [Escape drücken]"
    };
    let nochnehalbeminute = await ƒS.Menu.getInput(Radiowidmen, "choicez");
    console.log(nochnehalbeminute);
    switch (nochnehalbeminute) {
      case Radiowidmen.Ja:
        await ƒS.Speech.tell(characters.narrator, "Ich höre noch etwas weiter.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Shuichi, "Ganz wie du willst.");
        await ƒS.update(0.2);
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(1);
        return scn_Radio();
        break;
      case Radiowidmen.No:
        await ƒS.Speech.tell(characters.narrator, "Ich habe genug.");
        await ƒS.update(0.2);
        return scn_zweiteMBchoice();
        break;
    }

  };
}