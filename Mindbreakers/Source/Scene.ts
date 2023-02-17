//import { locations, sound } from "./Main";

//import { characters } from "./Main";

namespace Template { //wie ich es hinbekomme, dass hier nicht mehr Template steht weiß ich leider nicht
  export async function Scene(): ƒS.SceneReturn {
    ƒS.Speech.hide();
    console.log("First Scene");
    await ƒS.Location.show(backgrounds.BG_Menü);
    await ƒS.update(2);
    await ƒS.Location.show(backgrounds.BG_Black);
    await ƒS.update(1);
        
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
    
    await ƒS.update(0.1);

    let x = 7;

    switch (x){
      case 1: console.log("entercaseone");
      break;
      case 5: console.log("enntercasefive");
      break;
      default: console.log("start in default modus;)")
      break;
    };
    // TEST-INVENTORY
    ƒS.Inventory.add(inventory.radio);
    //ƒS.Inventory.removeAttribute(any: "Medizin"): void;
    return scn_Krankenhaus();
  }
} 