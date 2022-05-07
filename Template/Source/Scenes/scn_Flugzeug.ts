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
        return scn_flugzeug();

        let Dialogoption = { //selbst benennen Firstdialogblob
            Death: "Yes.",
            Life: "No."
            };
            let firstDialogueElement = await ƒS.Menu.getInput(Dialogoption, "individualCSSClass");
      console.log(firstDialogueElement);//gibt Informationen/Variabeln in Browserkonsole aus (f12)
      
            switch (firstDialogueElement) {
              case Dialogoption.Death:
              await ƒS.Speech.tell(characters.yamato, "Nippon, Banzai!.");
              break;
              case Dialogoption.Life:
              await ƒS.Speech.tell(characters.yamato, "Ich kann es schaffen zurück zu fliegen");
              return scn_schiff();
              break;
              }



    }
}



