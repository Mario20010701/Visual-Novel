namespace Template {
  export async function scn_Polizei(): ƒS.SceneReturn {
    await ƒS.update(1.3);
    await ƒS.Speech.tell(characters.Alice, "okay, ich rufe die Polizei");
    await ƒS.update(0.2);
    ƒS.Sound.play(sound.tel, 1, false);
    await ƒS.update(4);
    await ƒS.Speech.tell(characters.Alice, "Hallo, ist hier die Polizei?");
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.Alice, "Eh, ja hallo, also.. Auf uns... Auf einen gutaussehenden Typen, den ich vorher angemacht habe, wurde soeben geschossen und... ");
    await ƒS.update(3);
    await ƒS.Speech.tell(characters.Alice, "Ja genau, neben mir steht das Ziel dieser Verbrecher. Er bittet um Polizeischutz. Wir sind in Shuichi`s Bar. Okay, bis gleich.");
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.Alice, "Sehr gut, die Polizei ist auf dem Weg hier her");
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.Alice, "Achso, du solltest jetzt wohl besser diese Hammerbreakers wegwerfen, die ich dir gegeben hatte.");
    await ƒS.update(0.2);
    ƒS.Sound.play(sound.door, 1, false);
    await ƒS.update(1);
    ƒS.Sound.play(sound.gunshots2, 1, false);
    await ƒS.Sound.fade(sound.isokschnell, 0, 0.01, true);
    await ƒS.update(0.1);
    ƒS.Character.hideAll();
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.zweiter_Gangster, "Hahahaha");
    await ƒS.Character.show(characters.zweiter_Gangster, characters.zweiter_Gangster.pose.default, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.zweiter_Gangster, "Das wars mit deiner hübschen Freundin!");
    await ƒS.Character.show(characters.dritter_Gangster, characters.dritter_Gangster.pose.default, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.dritter_Gangster, "...und mit dir auch!");
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