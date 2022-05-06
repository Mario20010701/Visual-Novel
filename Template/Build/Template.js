"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
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
    Template.DataForSave = {
        nameProtagonist: "",
        score: 0
    };
    //Menü
    //buttons
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    let gameMenu;
    //true = offen; false geschlossen
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
    }
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    let uiElement = document.querySelector("[type=interface]");
    Template.DataForSave = Template.ƒS.Progress.setData(Template.DataForSave, uiElement);
})(Template || (Template = {}));
//import { locations, sound } from "./Main";
//import { characters } from "./Main";
var Template;
//import { locations, sound } from "./Main";
//import { characters } from "./Main";
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        //ƒS.Sound.play(sound.nightclub, 1);
        //ƒS.Sound.fade(sound.nightclub, 1, 2, true);
        //await ƒS.Location.show(locations.nightpark);
        //await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
        //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(70, 100));
        Template.ƒS.Character.hideAll();
        //ƒS.Character.hide(characters.aisaka);
        // await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
        // ƒS.Speech.clear();
        //await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0002);
        await Template.ƒS.Speech.tell(Template.characters.yamato, "Scenestart");
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.1);
        let x = 7;
        switch (x) {
            case 1:
                console.log("entercaseone");
                break;
            case 5:
                console.log("enntercasefive");
                break;
            default:
                console.log("default");
                break;
        }
        ;
        let Dialogoption = {
            Bob: "Yes.",
            iSayNo: "No."
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(Dialogoption, "individualCSSClass");
        console.log(firstDialogueElement); //gibt Informationen/Variabeln in Browserkonsole aus (f12)
        switch (firstDialogueElement) {
            case Dialogoption.Bob:
                await Template.ƒS.Speech.tell(Template.characters.yamato, "Hallo, ich bin Yamato.");
                break;
            case Dialogoption.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.yamato, "Sei gegrüßt");
                return Template.scn_flugzeug();
                break;
        }
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.backgrounds = {
        //1200*720
        BG_Baum: {
            name: "Baum",
            background: "./Assets/Backgrounds/spr_BG_baum.jpeg"
        },
        BG_Flugzeug: {
            name: "Testroom02",
            background: "./Assets/Backgrounds/spr_BG_Flugzeug.jpg"
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        narrator: {
            name: "",
        },
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Hana/Casual/Hana_casual_neutral_Blush.png",
                smile: "./Assets/Characters/Hana/Casual/Hana_casual_smile_Blush.png",
                upset: "./Assets/Characters/Hana/Casual/Hana_casual_Upset_Blush.png",
            }
        },
        yamato: {
            name: "Yamato",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.dialog = {
        flugzeug: {
            T0000: "Marmeladen sind lecker",
            T0001: "Fußball ist schnell",
            T0002: "Suppe ist warm gut",
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_flugzeug() {
        await Template.ƒS.Location.show(Template.backgrounds.BG_Flugzeug);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.smile, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell("Marie", "hi, ich bin Marie");
        await Template.ƒS.Speech.tell(Template.characters.yamato, "hii, Marie, wie gehts?");
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.upset, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Baum);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.yamato, Template.dialog.flugzeug.T0002);
        return scn_flugzeug();
    }
    Template.scn_flugzeug = scn_flugzeug;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_schiff() {
        await Template.ƒS.Speech.tell("Marie", "hi, ich bin Marie");
    }
    Template.scn_schiff = scn_schiff;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map