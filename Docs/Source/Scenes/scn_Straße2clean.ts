namespace Template {
  export async function scn_Straße2clean(): ƒS.SceneReturn {
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Alice, "Na gut, dann vielleicht später.");
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Alice, "eehh");
    await ƒS.update(1);
    let gehen = {
      Ja: "Ich werde jetzt gehen.",
      No: "Wie heißt du?"
    };
    let Hammerbreakersintus = await ƒS.Menu.getInput(gehen, "choicez");
    console.log(Hammerbreakersintus);

    switch (Hammerbreakersintus) {
      case gehen.Ja:
        await ƒS.Speech.tell(characters.narrator, "Ich werde jetzt gehen.");
        await ƒS.update(1);
        return scn_nüchternerTod();
        break;
      case gehen.No:
        await ƒS.Speech.tell(characters.narrator, "Wie heißt du?");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Alice, "Mein Name ist Alice, und deiner?");
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.narrator, "Daran konnte ich mich bis jetzt noch nicht erinnern.");
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.narrator, "Schau mal, ich habe hier eine Adresse, dort wohne ich angeblich. Weißt du wo das ist?");
        await ƒS.update(0.5);
        await ƒS.Sound.play(sound.gunshots, 1, false);
        await ƒS.update(1);
        await ƒS.Character.hide(characters.Alice);
        await ƒS.Character.hide(characters.Alice);
        await ƒS.update(0.1);
        await ƒS.Character.show(characters.Alice, characters.Alice.pose.running, ƒS.positions.bottomcenter);
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Alice, "Komm! Folge mir in diese Gasse, die schießen auf uns!!");
        await ƒS.update(0.2);
        await ƒS.Location.show(backgrounds.BG_StraßeFlucht);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Alice, "Hier wir nehmen die Hintertür!");
        await ƒS.update(0.2);
        return scn_Laden();
        break;
    }
  };
}
