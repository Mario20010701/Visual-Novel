namespace Template {
  export async function scn_zweiteMBchoice(): ƒS.SceneReturn {
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, "Wilde Sache.");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Shuichi, "Nun gut, freut mich, deine Bekanntschaft gemacht zu haben, mysteriöser Fremder. Pass auf dich auf.");
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, "Hat mich auch gefreut, danke für die Waffe.");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Shuichi, "Vergiss nicht, das war kein Geschenk.");
    await ƒS.Character.hide(characters.Shuichi);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Alice, characters.Alice.pose.default, ƒS.positions.left);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.Alice, "Hey, sag mir nochmal deine Adresse. Ich kenne mich in der Gegend gut aus und kann dich sicher hinführen.");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.narrator, "Hier...");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.narrator, "...");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Alice, "AAh, natürlich weiß ich wo das ist. Ich führe dich hin. Ich gehe schonmal vor und schaue, ob die Luft rein ist.");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.narrator, "Danke.");
    await ƒS.update(0.1);
    ƒS.Character.hideAll();
    await ƒS.update(2);
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.narrator, "hmm.. woher kommt dieses Verlangen?");
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.narrator, "Ich denke vielleicht......");
    await ƒS.update(2);
    let Mindbreakerzwei = {
      Ja: "Ein Hammerbreaker nehmen.",
      No: "Hammerbreakers nicht nehmen."
    };
    let vielleicht = await ƒS.Menu.getInput(Mindbreakerzwei, "choicez");
    console.log(vielleicht);
    switch (vielleicht) {
      case Mindbreakerzwei.Ja:
        await ƒS.Speech.tell(characters.narrator, "Es kann nicht schaden und es schmeckt irgendwie.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.narrator, "Na gut, dann werde ich Alice mal folgen");
        await ƒS.update(0.2);
        return scn_MBbrokenglass();
        break;
      case Mindbreakerzwei.No:
        await ƒS.Speech.tell(characters.narrator, "Das Zeug ist Gift.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.narrator, "Na gut, dann werde ich Alice mal folgen");
        await ƒS.update(0.2);
        return scn_brokenglass();
        break;
    }
  };
}