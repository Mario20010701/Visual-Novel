//import { locations, sound } from "./Main";

//import { characters } from "./Main";

namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    
        
    //ƒS.Sound.play(sound.nightclub, 1);
    //ƒS.Sound.fade(sound.nightclub, 1, 2, true);
    //await ƒS.Location.show(locations.nightpark);
    //await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
    //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(70, 100));
    ƒS.Character.hideAll();
    //ƒS.Character.hide(characters.aisaka);
   // await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
   // ƒS.Speech.clear();
    //await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0002);
    await ƒS.Speech.tell(characters.yamato, "Scenestart");

    ƒS.Speech.hide();
    await ƒS.update(0.1);

    let x = 7;

    switch (x){
      case 1: console.log("entercaseone");
      break;
      case 5: console.log("enntercasefive");
      break;
      default: console.log("default")
      break;
    };


    let Dialogoption = { //selbst benennen Firstdialogblob
      Bob: "Yes.",
      iSayNo: "No."
      };
      let firstDialogueElement = await ƒS.Menu.getInput(Dialogoption, "individualCSSClass");
      console.log(firstDialogueElement);//gibt Informationen/Variabeln in Browserkonsole aus (f12)

      switch (firstDialogueElement) {
        case Dialogoption.Bob:
        await ƒS.Speech.tell(characters.yamato, "Hallo, ich bin Yamato.");
        break;
        case Dialogoption.iSayNo:
        await ƒS.Speech.tell(characters.yamato, "Sei gegrüßt");
        return scn_flugzeug();
        break;
        }
  }
} 