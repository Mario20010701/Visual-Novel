namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");



    // define transitions
export let transitions = {
  puzzle {
    duration: 1,
    alpha "./Tutorial_WS21/FreeTransitions/JigsawThemedTransitions/puzzle.png",
    edge: 1
  }
}

export let sound = {
  // themes
  nightclub: "./Tutorial_WS21/Audio/Nightclub.ogg",

  // SFX
  click: "Pfad"
};

export let locations = {
  nightpark: {
    name: "",
    background: "./Tutorial_WS21/Images/Background/Nightpark.png"
  },
  starry: {
    name: "Starry"
    background: "Pfad"
  }
};
name: ""

export let characters = {
  narrator: {
    name: ""
  },
  aisaka: {
    name: "Aisaka"
    origin: ƒS.ORIGIN.BOTTOMCENTER,
    pose: {
      angry: "Pfad",
      happy: "",
      upset: ""
    }
  },
  kohanna: {
    name: "Kohanna",
    origin: ƒS.ORIGIN.BOTTOMCENTER,
    Pose: {
      angry: ""
      happy: ""
      upset: ""
    }
  }
};

export let DataForSave = {
  nameProtagonist: ""
  score: 0
};




  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    DataForSave = ƒS.Progress.setData(DataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}