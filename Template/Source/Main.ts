namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");



  // define transitions
  /*
  export let transitions = {
    puzzle: {
      duration: 1,
      alpha: "./Tutorial_WS21/FreeTransitions/JigsawThemedTransitions/puzzle.png",
      edge: 1,
    }
}

    export let sound = {
      // themes
      nightclub: "./Tutorial_WS21/Audio/Nightclub.ogg",

      // SFX
      click: "Pfad",
    }; 

    export let locations = {
      nightpark: {
        name: "",
        background: "./Tutorial_WS21/Images/Background/Nightpark.png",
      },
      starry: {
        name: "Starry",
        background: "Pfad",
      }
    };
    name: ""
    */
    

    export let DataForSave = {
      nameProtagonist: "",
      score: 0
    };

    export let inventory = {
      notiz: {
        name: "Notiz",
        description: "Eine Notiz, die dein Bruder zurück ließ",
        image: "./Assets/Notiz.png",
        static: true, // so wird es nicht konsumiert. wenn ich static ausklammere, kann ich drauf klicken und es ist weg
      },
    };
    //Menü
    //buttons

    let inGameMenuButtons = {
      save: "Save",
      load: "Load",
      close: "Close",
      credits: "Credits"

    };

    let gameMenu: ƒS.Menu;

  // true = offen; false = geschlossen
  let menuIsOpen: boolean = true;
  let InventoryIsOpen: boolean = false;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      //case inGameMenuButtons.credits:
        //showCredits();
    }
  }


  // Shortcuts für's Menü
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
          // INVENTORY MENU
      case ƒ.KEYBOARD_CODE.I:
        console.log("Inventory");
        if (InventoryIsOpen) {
          console.log("Inventory Close");
          ƒS.Inventory.close();
          InventoryIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
        } else {
          console.log("Inventory Open");
          ƒS.Inventory.open();
          InventoryIsOpen = true;
        }
        break;
    }
  }



    window.addEventListener("load", start);
    function start(_event: Event): void {   
      // Menü
      gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
      // Menü zu Beginn geschlossen halten
      buttonFunctionalities("Close");
      let scenes: ƒS.Scenes = [
        { scene: Scene, name: "Scene" }
      ];

      let uiElement: HTMLElement = document.querySelector("[type=interface]");
      DataForSave = ƒS.Progress.setData(DataForSave, uiElement);
      
      // start the sequence
      ƒS.Progress.go(scenes);
    }
  }