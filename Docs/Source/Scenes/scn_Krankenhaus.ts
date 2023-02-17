namespace Template {
  export async function scn_Krankenhaus(): ƒS.SceneReturn {
    await ƒS.Sound.fade(sound.Drone, 0.5, 5, true);
    await ƒS.Location.show(backgrounds.BG_KH);
    await ƒS.update(transitions.MB.duration, transitions.MB.alpha, transitions.MB.edge);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Doktor, characters.Doktor.pose.default, ƒS.positions.bottomcenter);
    await ƒS.update(2);

    await ƒS.Speech.tell(characters.Doktor, "Sie sind ja wach, sehr schön.");

    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.Doktor, "Sie dürften wohl ihre Erinnerungen verloren haben, aber keine Sorge, wir haben Sie auf Hirnschäden überprüft.");
    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.Doktor, "Ihre Erinnerungen sollten spätestens in ein paar Wochen wieder in Takt sein.");
    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.narrator, "Wo bin ich hier? Das sieht nicht aus, wie ein Krankenhaus.");

    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Doktor, "Das stimmt.");
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Doktor, "Wir nahmen an, Sie könnten vielleicht in einem längeren Koma liegen und auf Grund der pandemischen Lage...");
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Doktor, "...haben wir Sie zu mir zuhause verlegt, um Krankenhausbetten frei zu halten.");
    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.Doktor, "Sie lagen zwei Tage im Koma und sollten es ruhig angehen.");
    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.Doktor, "Ich werde Sie jetzt gehen lassen, aber sie sollten zu dieser Ardesse hier.");
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Doktor, "...");
    await ƒS.Speech.tell(characters.Doktor, "Es ist ihre Adresse, ich habe gehört in ihrer Abwesenheit wurde dort eingebrochen.");
    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.Doktor, "Ich wünsche ihnen viel Glück.");
    await ƒS.update(0.4);
    ƒS.Character.hideAll();
    await ƒS.update(0.4);
    ƒS.Speech.hide();
    await ƒS.update(0.4);
    await ƒS.update(2);
    await ƒS.Location.show(backgrounds.BG_Straße1);
    await ƒS.update(transitions.MB.duration, transitions.MB.alpha, transitions.MB.edge);
    await ƒS.Sound.fade(sound.Street, 1, 2, true);
    await ƒS.update(1);
    await ƒS.Sound.fade(sound.Drone, 0, 2);
    await ƒS.Character.show(characters.Alice, characters.Alice.pose.default, ƒS.positions.bottomcenter);
    await ƒS.update(1.5);
    await ƒS.Speech.tell(characters.Alice, "Hey, Süßer.");
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Alice, "Du siehst aus als könntest du ein paar Hammerbreakers vertragen.");
    await ƒS.update(2);
    await ƒS.Character.show(characters.Alice, characters.Alice.pose.mb, ƒS.positions.bottomcenter);
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Alice, "na wie siehts aus?");
    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.narrator, "Ich habe erst kürzlich meine Erinnerungen verloren, was ist das denn überhaupt?");
    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.Alice, "Ach so ist das, na dann wird dich das hier erst recht wieder in Fahrt bringen. ......Es regt deine Neuronen an.");
    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.Alice, "Weißt du was? Ich schenks dir. Möchtest du gleich eines nehmen?");
    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.narrator, "ehm..");
    await ƒS.update(0.4);
    ƒS.Inventory.add(inventory.Hammerbreakers);
    let Hammerbreakersprobieren = {
      Ja: "Ja",
      No: "Nein"
    };
    let Hammerbreakersintus = await ƒS.Menu.getInput(Hammerbreakersprobieren, "choicez");
    console.log(Hammerbreakersintus);
    switch (Hammerbreakersintus) {
      case Hammerbreakersprobieren.Ja:
        await ƒS.Speech.tell(characters.narrator, "Ja, wenn du sagst, dass es hilft...");
        await ƒS.update(0.2);
        return scn_Straße2MB();
        break;
      case Hammerbreakersprobieren.No:
        await ƒS.Speech.tell(characters.narrator, "Nein, danke.");
        await ƒS.update(0.2);
        return scn_Straße2clean();
        break;
    }
  };
}





