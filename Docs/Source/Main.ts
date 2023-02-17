namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("starting");
  


  // define transitions
  
  export let transitions = {
    MB: {
      duration: 1,
      alpha: "./Assets/Transitions/myownMindbreakerTransition.png",
      edge: 1,
    }
  }
    

    export let DataForSave = {
      nameProtagonist: "",
      score: 0
    };

    export let inventory = {
      radio: {
        name: "Radio",
        description: "Ein kleiner Radio, den du in deiner Manteltasche gefunden hast [type - radio - to use it, - Escape - to exit ;)]",
        image: "./Radio.png",
        static: true, // so wird es nicht konsumiert. wenn ich static ausklammere, kann ich drauf klicken und es ist weg
      },
      Hammerbreakers: {
        name: "Hammerbreakers",
        description: "Eine kleine Dose, bunter Pillen, die dir Alice geschenkt hat.",
        image: "./Medics.png",
        static: true, // so wird es nicht konsumiert. wenn ich static ausklammere, kann ich drauf klicken und es ist weg
      },
      Waffe: {
        name: "Handfeuerwaffe",
        description: "Die Luger von Shuichi",
        image: "./Waffe.png",
        static: true, // so wird es nicht konsumiert. wenn ich static ausklammere, kann ich drauf klicken und es ist weg
      },
    };
    //Menü
    //buttons

    let inGameMenuButtons = {
      //save: "Save",
      //load: "Load",
      close: "Close",
      credits: "Credits"

    };

    let gameMenu: ƒS.Menu;

  // true = offen; false = geschlossen
  let menuIsOpen: boolean = true;
  let InventoryIsOpen: boolean = false;
  let isActive = false;
  let intervalId: number;
  async function getOrder(): Promise<void> {  //<-this is a not working try on getting the Novel to stop while in Menu, implemented when pressing W
    console.log('Getting order...');
    await ƒS.Progress.delay(1);
    await ƒ.Time.game.delay(1000);
    
  }

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      //case inGameMenuButtons.save:
      //  await ƒS.Progress.save();
      //  break;
      //case inGameMenuButtons.load:
      //  await ƒS.Progress.load();
      //  break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        gameMenu.close();
        menuIsOpen = false;
        await ƒS.update(0.1);
        document.getElementById("info-box").style.display = "block";
        document.getElementById("texstyle2").style.display = "block";
        const elements = document.querySelectorAll('.pulsate');
        for (let element of elements) {
        (element as HTMLElement).style.opacity = "0";
        (element as HTMLElement).style.animation = "none";
        }
        await ƒS.update(6.5);
        document.getElementById("info-box").style.display = "none";
        gameMenu.open();
        menuIsOpen = true;
        break
    }
  }

  let sequence = "";
  document.addEventListener("keydown", function(event) {
    if (event.key === "r" || event.key === "a" || event.key === "d" || event.key === "i" || event.key === "o") {
      sequence += event.key;
      if (sequence === "radio") {
        ƒS.Sound.setMasterVolume(0)
      }
    }
    if (event.key === "Escape") {
      document.getElementById("image").style.display = "none";
      document.getElementById("overlay").style.display = "none";
      sequence = ""
      ƒS.Sound.setMasterVolume(1)
    }
  });
  
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
      case ƒ.KEYBOARD_CODE.W:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
          clearInterval(intervalId);
          isActive = false;
          console.log('Interval stopped.');
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
          if (!isActive) {
            isActive = true;
            intervalId = setInterval(getOrder, 1000);
            console.log('Interval activated.');
          }
          
        }
        break;
          // INVENTORY MENU
      case ƒ.KEYBOARD_CODE.Q:
        console.log("Inventory");
        if (InventoryIsOpen) {
          console.log("Inventory Close");
          ƒS.Inventory.close();
          InventoryIsOpen = false; // wenn ich q drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
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