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
    // true = offen; false = geschlossen
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.ƒS.Progress.load();
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
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
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
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        // Menü
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
        // Menü zu Beginn geschlossen halten
        buttonFunctionalities("Close");
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
            background: "./Assets/Backgrounds/spr_Kamikaze.png"
        },
        BG_blitz: {
            name: "blitz",
            background: "./Assets/Backgrounds/scn_kamikazeblitz.png"
        },
        BG_Americanformation: {
            name: "Formation",
            background: "./Assets/Backgrounds/americanformationpainted.png"
        },
        BG_AmericanlandingPhil: {
            name: "LandingGeneral",
            background: "./Assets/Backgrounds/animeamericanlandingonphillipinesSmall.jpeg"
        },
        BG_JapaneseCapture: {
            name: "Americandefeat",
            background: "./Assets/Backgrounds/japanesecaptureamericansanime.png"
        },
        BG_Atomic: {
            name: "Nagasaki",
            background: "./Assets/Backgrounds/animenagasaki.png"
        },
        BG_trad: {
            name: "trad",
            background: "./Assets/Backgrounds/spr_trad.png"
        },
        BG_AmisGefecht: {
            name: "fight",
            background: "./Assets/Backgrounds/amisgefecht.png"
        },
        BG_Black: {
            name: "black",
            background: "./Assets/Backgrounds/black.png"
        },
        BG_Temple: {
            name: "Temple",
            background: "./Assets/Backgrounds/spr_bg_temple.png"
        },
        BG_Generalstab: {
            name: "Generalstab",
            background: "./Assets/Backgrounds/bg_generalstab.png"
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        narrator: {
            name: "",
        },
        Aisaka: {
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
        },
        mother: {
            name: "Mutter",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Mother/mother.png",
            }
        },
        Vater: {
            name: "Vater",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Father/ch_Father.png",
            }
        },
        General_Yamamoto_Isoruku: {
            name: "General Isoruku",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/General_Yamamoto_isoruku/char_generalyamamoto_isoruku.png",
            }
        },
        General_Genkimura_Heirato: {
            name: "General Heitaro",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/General_genkimura_heitaro/chara_genkimura_heitaro.png",
            }
        },
        General_Hideki_Tojo: {
            name: "General Tojo",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/General_Hideki_Tojo/generhidekitojo.png",
            }
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.dialog = {
        flugzeug: {
            T0000: "Marmeladen sind lecker",
            T0001: "Fußball ist schnell",
            T0002: "Bin ich tatsächlich bereit dafür?",
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sound = {
        // themes
        testtt: "./Assets/Music/test.mp3"
        // SFX
        // click: "Pfad"
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_flugzeug() {
        await Template.ƒS.Location.show(Template.backgrounds.BG_Flugzeug);
        await Template.ƒS.update(1);
        await Template.ƒS.Sound.fade("./Assets/Music/test.mp3", 0.2, 2, true);
        //Promise<void>);
        //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.smile, ƒS.positions.bottomcenter);
        //await ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Der zweite Weltkrieg neigt sich dem Ende zu.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Du bist Soldat der Shimpū Tokkōtai Spezialeinheit der Kaiserlichen Marineluftwaffe.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ziel dieser Einheit ist es, dem Feind die Widerstandskraft und den Siegeswillen Japans zu zeigen..");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ein feindliches Schiff also mit dem eigenen Flugzeug rammen und so versenken.");
        await Template.ƒS.Location.show(Template.backgrounds.BG_blitz);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Flugzeug);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Das ist der sichere Tod.");
        await Template.ƒS.Speech.tell(Template.characters.yamato, "Mein Flugzeug ist bereits beschädigt. Jetzt oder Nie.");
        await Template.ƒS.Speech.tell(Template.characters.yamato, "Im Angesicht des Todes, will ich wirklich sterben?");
        //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.upset, ƒS.positions.bottomcenter);
        //await ƒS.Location.show(backgrounds.BG_Baum);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.yamato, Template.dialog.flugzeug.T0002);
        await Template.ƒS.update(0.1);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.1);
        let Kamikaze = {
            Death: "Yes.",
            Life: "No."
        };
        let Kamikazejanein = await Template.ƒS.Menu.getInput(Kamikaze, "individualCSSClass");
        console.log(Kamikazejanein);
        switch (Kamikazejanein) {
            case Kamikaze.Death:
                await Template.ƒS.Speech.tell(Template.characters.yamato, "Nippon, Banzai!.");
                return Template.scn_Vater2();
                break;
            case Kamikaze.Life:
                await Template.ƒS.Speech.tell(Template.characters.yamato, "Nein! Ich kann es schaffen zurück zu fliegen!");
                await Template.ƒS.update(0.2);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                return Template.scn_Vater1();
                break;
        }
    }
    Template.scn_flugzeug = scn_flugzeug;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_Tempel() {
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Temple);
        await Template.ƒS.update(3);
        await Template.ƒS.Character.show(Template.characters.General_Genkimura_Heirato, Template.characters.General_Genkimura_Heirato.pose.default, Template.ƒS.positions.left);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.General_Hideki_Tojo, Template.characters.General_Hideki_Tojo.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.General_Yamamoto_Isoruku, Template.characters.General_Yamamoto_Isoruku.pose.default, Template.ƒS.positions.right);
        await Template.ƒS.update(1);
    }
    Template.scn_Tempel = scn_Tempel;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_Vater1() {
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(1);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "einige Jahre zuvor");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Wie ist dein Name?  ");
        await Template.ƒS.update(1);
        Template.DataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        console.log(Template.DataForSave.nameProtagonist);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        await Template.ƒS.update(1);
        //await ƒS.Speech.tell("Marie","hi, ich bin Marie");  
        //await ƒS.update(0.5);
        //await ƒS.Location.show(backgrounds.BG_Americanformation);
        //await ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.backgrounds.BG_trad);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Vater, Template.characters.Vater.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Vater, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Vater, "Bald wird dein kleiner Bruder, Yamato, auch zur Armee gehen, damit aus ihm auch so ein tapferer Soldat Japans wird, wie du einer bist.");
        await Template.ƒS.update(0.5);
        //await ƒS.Location.show(backgrounds.BG_AmericanlandingPhil);
        //await ƒS.update(0.5);
        //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.smile, ƒS.positions.bottomcenter);
        //await ƒS.update(1);
        //await ƒS.Character.show(characters.mother, characters.mother.pose.default, ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Vater, "Ich bin stolz auf dich, mein Sohn. Wirst du nicht morgen zum Rikugun Chūjō (Generalleutnant) befördert?");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ja Vater, ich werde Japan alle Ehre machen.");
        await Template.ƒS.Speech.tell(Template.characters.Vater, "Vergiss die Geschichte nicht. Heute mögen die Deutschen unsere Verbündeten sein, aber vor 26 Jahren waren wir im Krieg mit ihnen. Vielleicht wird es wieder so kommen.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Der Dreimächtepakt ist in Japans bestem Interesse, Vater. Japan wird ein Teil der neuen Welt sein, die in diesen schicksalhaften Jahren des Kampfes entsteht.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde mein Bestes geben, und dafür sorgen, dass die Japaner in dieser kommenden Welt den Platz einnehmen werden, der ihnen auch zusteht.");
        let Motherdialog = {
            Yes: "Natürlich Vater",
            no: "Ich befürchte, ich werde sonst zu spät eintreffen"
        };
        let MotherYesNo = await Template.ƒS.Menu.getInput(Motherdialog, "individualCSSClass");
        console.log(MotherYesNo); //gibt Informationen/Variabeln in Browserkonsole aus (f12)
        switch (MotherYesNo) {
            case Motherdialog.Yes:
                await Template.ƒS.Speech.tell(Template.characters.Vater, "Ich schicke Sie gleich zu dir.");
                await Template.ƒS.update(0.5);
                Template.ƒS.Speech.hide();
                Template.ƒS.Character.hideAll();
                await Template.ƒS.update(2.5);
                await Template.ƒS.Speech.tell(Template.characters.Vater, "Natsuki!");
                await Template.ƒS.Speech.tell(Template.characters.Vater, "Unser Sohn ist hier!");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.mother, "Welcher der meinen beiden wackeren Knaben ist es denn?");
                await Template.ƒS.Speech.tell(Template.characters.Vater, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.mother, "Oh, Ich komme sofort!");
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                break;
            case Motherdialog.no:
                await Template.ƒS.Speech.tell(Template.characters.Vater, "Na, dann lass dich nicht aufhalten und frag deinen General bald nach Urlaub. Dann können wir mal wieder Mahjong gegeneinander spielen.");
                await Template.ƒS.update(0.2);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                break;
        }
        return Template.scn_Tempel();
    }
    Template.scn_Vater1 = scn_Vater1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_Vater2() {
        await Template.ƒS.Location.show(Template.backgrounds.BG_blitz);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Flugzeug);
        await Template.ƒS.update(0.5);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.1);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "einige Jahre zuvor");
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Wie ist dein Name?  ");
        await Template.ƒS.update(1);
        Template.DataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        console.log(Template.DataForSave.nameProtagonist);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_trad);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Vater, Template.characters.Vater.pose.default, Template.ƒS.positions.left);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Vater, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Vater, "Bald wird dein kleiner Bruder, Yamato, auch zur Armee gehen, damit aus ihm auch so ein tapferer Soldat Japans wird, wie du einer bist.");
        await Template.ƒS.update(0.5);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Vater, "Ich bin stolz auf dich, mein Sohn. Wirst du nicht morgen zum Rikugun Chūjō (Generalleutnant) befördert?");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.DataForSave.nameProtagonist, "Ja Vater, ich werde unserem Japan alle Ehre machen.");
        await Template.ƒS.Speech.tell(Template.characters.Vater, "Vergiss die Geschichte nicht. Heute mögen die Deutschen unsere Verbündeten sein, aber vor 26 Jahren waren wir im Krieg mit ihnen. Vielleicht wird es wieder so kommen.");
        await Template.ƒS.Speech.tell(Template.DataForSave.nameProtagonist, "Der Dreimächtepakt ist in Japans bestem Interesse, Vater. Japan wird ein Teil der neuen Welt sein, die in diesen schicksalhaften Jahren des Kampfes entsteht.");
        await Template.ƒS.Speech.tell(Template.DataForSave.nameProtagonist, "Ich werde mein Bestes geben, und dafür sorgen, dass die Japaner in dieser kommenden Welt den Platz einnehmen werden, der ihnen auch zusteht.");
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Vater, "Danke dass du Zeit gefunden hast, vorbeizuschauen. Ich weiß du hast viel zu tun, aber ich denke, deine Mutter würde sich ebenfalls freuen wenn sie dich noch einmal als Leutnant sehen darf.");
        await Template.ƒS.Speech.tell(Template.characters.Vater, "Hast du noch einen Moment Zeit für deine Mutter, bevor du nach Tokyo aufbrichst?");
        let Motherdialog = {
            Yes: "Natürlich Vater",
            no: "Ich befürchte, ich werde sonst zu spät eintreffen"
        };
        let MotherYesNo = await Template.ƒS.Menu.getInput(Motherdialog, "individualCSSClass");
        console.log(MotherYesNo); //gibt Informationen/Variabeln in Browserkonsole aus (f12)
        switch (MotherYesNo) {
            case Motherdialog.Yes:
                await Template.ƒS.Speech.tell(Template.characters.Vater, "Ich schicke Sie gleich zu dir.");
                await Template.ƒS.update(0.5);
                Template.ƒS.Speech.hide();
                Template.ƒS.Character.hideAll();
                await Template.ƒS.update(2.5);
                await Template.ƒS.Speech.tell(Template.characters.Vater, "Natsuki!");
                await Template.ƒS.Speech.tell(Template.characters.Vater, "Unser Sohn ist hier!");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.mother, "Welcher der meinen beiden wackeren Knaben ist es denn?");
                await Template.ƒS.Speech.tell(Template.characters.Vater, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.mother, "Oh, Ich komme sofort!");
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                break;
            case Motherdialog.no:
                await Template.ƒS.Speech.tell(Template.characters.Vater, "Na, dann lass dich nicht aufhalten und frag deinen General bald nach Urlaub. Dann können wir mal wieder Mahjong gegeneinander spielen.");
                await Template.ƒS.update(0.2);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                break;
        }
        return Template.scn_Tempel();
    }
    Template.scn_Vater2 = scn_Vater2;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map