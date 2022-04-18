namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      Narrator: {
        T0001: ""
        T0002: ""
      },
      Aisaka: {
        T0001: ""
        T0002:
      }
    };

    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0002);
    await ƒS.Speech.tell(characters.aisaka, "Neuer Text");



  }
}