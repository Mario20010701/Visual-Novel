namespace Template {
  export async function scn_BreakerTod(): ƒS.SceneReturn {
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.update(2);
    await ƒS.Sound.fade(sound.Street, 0, 2, true);
    await ƒS.Location.show(backgrounds.BG_Black);
    await ƒS.update(2);
    await ƒS.Sound.fade(sound.Drone, 1, 2, true);
    await ƒS.Location.show(backgrounds.BG_MBStraße);
    await ƒS.update(3);
    await ƒS.Character.show(characters.Gangster, characters.Gangster.pose.default, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Gangster, "jetzt haben wir ihn");
    await ƒS.Character.show(characters.zweiter_Gangster, characters.zweiter_Gangster.pose.default, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.zweiter_Gangster, "Hahaha... endlich... Du kleine Ratte!!");
    await ƒS.Character.show(characters.dritter_Gangster, characters.dritter_Gangster.pose.default, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Sound.fade(sound.Drone, 0, 1, true);
    await ƒS.Speech.tell(characters.dritter_Gangster, "...endlich bist du tod!");
    await ƒS.update(1);
    ƒS.Sound.play(sound.gunshot, 1, false);
    await ƒS.Location.show(backgrounds.BG_Black)
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.update(3);
    await ƒS.Location.show(backgrounds.BG_Ende);
    await ƒS.update(3);
  };
}

