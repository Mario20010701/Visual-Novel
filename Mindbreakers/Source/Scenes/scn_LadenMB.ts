namespace Template {
    export async function scn_LadenMB():ƒS.SceneReturn {
      await ƒS.update(1.3);
      ƒS.Character.hideAll();
      await ƒS.update(0.1);
      ƒS.Sound.play(sound.door, 0.6, false)
      await ƒS.Sound.fade(sound.Street, 0, 0.2, true);
      await ƒS.Sound.fade(sound.isokschnell, 0.2, 0.2, true);
      await ƒS.Character.show(characters.Alice, characters.Alice.pose.default, ƒS.positions.bottomcenter);
      await ƒS.Location.show(backgrounds.BG_BarMB)
      await ƒS.Speech.tell(characters.Alice, "Pju, das war knapp.");
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Alice, "...Warte... Ich glaube ich kannte einen von ihnen. Diese Leute sind vom Kartell. ...Warum machen die Jagt auf dich?");
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.narrator, "Ich weiß es nicht, könnte es sein, dass ich in kriminelle Machenschaften verstrickt war?");
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.narrator, "Das ist sehr ungünstig. Was soll ich jetzt nur tun? Und warum ist mir so übel? ...Warum sehe ich alles so verzerrt?");
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Alice, "Das müssen die Drogen sein. Tut mir leid wenn sie dir nicht gefallen.");
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.narrator, "Drogen? ....Ach passt schon.");
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Alice, "Willst du trotzdem die Polizei rufen?");
      let Polizeirufen = { 
        Ja: "Polizei verständigen",
        No: "Die Polizei nicht verständigen"
      };
      let policejane = await ƒS.Menu.getInput(Polizeirufen, "choicez");
      console.log(policejane);
        
      switch (policejane) {
        case Polizeirufen.Ja:
        await ƒS.Speech.tell(characters.narrator, "Ja, bitte ruf die Polizei, sonst komme ich aus dieser Nummer nicht mehr lebend raus.");
        await ƒS.update(0.2);
        return scn_Polizei();
        break;
        case Polizeirufen.No:
        await ƒS.Speech.tell(characters.narrator, "Zu riskant. Im schlimmsten Fall hab ich früher jemanden umgebracht und komme mein Leben lang hinter Gitter.");
        await ƒS.update(0.2);
        return scn_keinePolizei();
        break;
      }
    
    
    };
}
  
  