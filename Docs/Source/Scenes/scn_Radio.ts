namespace Template {
  export async function scn_Radio(): ƒS.SceneReturn {
    await ƒS.update(30);
    let Radiowidmen = {
      Ja: "Eine weitere halbe Minute Radio hören.",
      No: "Ich bin fertig [Escape drücken]"
    };
    let nochnehalbeminute = await ƒS.Menu.getInput(Radiowidmen, "choicez");
    console.log(nochnehalbeminute);
    switch (nochnehalbeminute) {
      case Radiowidmen.Ja:
        await ƒS.Speech.tell(characters.narrator, "Ich höre noch etwas weiter.");
        return scn_Radio();
        break;
      case Radiowidmen.No:
        await ƒS.Speech.tell(characters.narrator, "Ich habe genug.");
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Shuichi, characters.Shuichi.pose.default, ƒS.positions.bottomcenter);
        await ƒS.update(0.8);
        return scn_zweiteMBchoice();
        break;
    }
  };
}