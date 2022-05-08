namespace Template {
  export async function scn_flugzeug():ƒS.SceneReturn {
    await ƒS.Location.show(backgrounds.BG_Flugzeug);
    await ƒS.update(1);
    //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.smile, ƒS.positions.bottomcenter);
    //await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator,"Der zweite Weltkrieg neigt sich dem Ende zu.");
    await ƒS.Speech.tell(characters.narrator,"Du bist Soldat der Shimpū Tokkōtai Spezialeinheit der Kaiserlichen Marineluftwaffe."); 
    await ƒS.Speech.tell(characters.narrator,"Ziel dieser Einheit ist es, dem Feind die Widerstandskraft und den Siegeswillen Japans zu zeigen..");
    await ƒS.Speech.tell(characters.narrator,"Ein feindliches Schiff also mit dem eigenen Flugzeug rammen und so versenken.");
    await ƒS.Location.show(backgrounds.BG_blitz);
    await ƒS.update(0.1);
    await ƒS.Location.show(backgrounds.BG_Flugzeug);
    await ƒS.update(0.4);
    await ƒS.Speech.tell(characters.narrator,"Das ist der sichere Tod.");
    await ƒS.Speech.tell(characters.yamato,"Mein Flugzeug ist bereits beschädigt. Jetzt oder Nie.");
    await ƒS.Speech.tell(characters.yamato,"Im Angesicht des Todes, will ich wirklich sterben?");
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
      return scn_schiffOst();
      break;
      case Kamikaze.Life:
      await ƒS.Speech.tell(characters.yamato, "Nein! Ich kann es schaffen zurück zu fliegen!");
      await ƒS.update(0.2);
      ƒS.Character.hideAll();
      ƒS.Speech.hide();
      return scn_schiff();
      break;
    }
  };
}





