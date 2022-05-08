namespace Template {
  export async function scn_flugzeug():ƒS.SceneReturn {
    await ƒS.Location.show(backgrounds.BG_Flugzeug);
    await ƒS.update(1);
    //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.smile, ƒS.positions.bottomcenter);
    //await ƒS.update(1);
    await ƒS.Speech.tell("Playername","mein Flugzeug ist beschädigt");   
    await ƒS.Speech.tell(characters.yamato,"Nun ist wohl der Moment gekommen?");
    //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.upset, ƒS.positions.bottomcenter);
    //await ƒS.Location.show(backgrounds.BG_Baum);
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.yamato,dialog.flugzeug.T0002);
    await ƒS.update(0.1);
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.update(0.1);
    let Kamikaze = { //selbst benennen Firstdialogblob
      Death: "Yes.",
      Life: "No."
    };
    let Kamikazejanein = await ƒS.Menu.getInput(Kamikaze, "individualCSSClass");
    console.log(Kamikazejanein);//gibt Informationen/Variabeln in Browserkonsole aus (f12)
      
    switch (Kamikazejanein) {
      case Kamikaze.Death:
      await ƒS.Speech.tell(characters.yamato, "Nippon, Banzai!.");
      break;
      case Kamikaze.Life:
      await ƒS.Speech.tell(characters.yamato, "Ich kann es schaffen zurück zu fliegen");
      await ƒS.update(0.2);
      ƒS.Character.hideAll();
      ƒS.Speech.hide();
      return scn_schiff();
      break;
    }
  };
}





