"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("starting");
    // define transitions
    Template.transitions = {
        MB: {
            duration: 1,
            alpha: "./Assets/Transitions/myownMindbreakerTransition.png",
            edge: 1,
        }
    };
    Template.DataForSave = {
        nameProtagonist: "",
        score: 0
    };
    Template.inventory = {
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
    let gameMenu;
    // true = offen; false = geschlossen
    let menuIsOpen = true;
    let InventoryIsOpen = false;
    let isActive = false;
    let intervalId;
    async function getOrder() {
        console.log('Getting order...');
        await Template.ƒS.Progress.delay(1);
        await Template.ƒ.Time.game.delay(1000);
    }
    async function buttonFunctionalities(_option) {
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
                await Template.ƒS.update(0.1);
                document.getElementById("info-box").style.display = "block";
                document.getElementById("texstyle2").style.display = "block";
                const elements = document.querySelectorAll('.pulsate');
                for (let element of elements) {
                    element.style.opacity = "0";
                    element.style.animation = "none";
                }
                await Template.ƒS.update(6.5);
                document.getElementById("info-box").style.display = "none";
                gameMenu.open();
                menuIsOpen = true;
                break;
        }
    }
    let sequence = "";
    document.addEventListener("keydown", function (event) {
        if (event.key === "r" || event.key === "a" || event.key === "d" || event.key === "i" || event.key === "o") {
            sequence += event.key;
            if (sequence === "radio") {
                Template.ƒS.Sound.setMasterVolume(0);
            }
        }
        if (event.key === "Escape") {
            document.getElementById("image").style.display = "none";
            document.getElementById("overlay").style.display = "none";
            sequence = "";
            Template.ƒS.Sound.setMasterVolume(1);
        }
    });
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
            case Template.ƒ.KEYBOARD_CODE.W:
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
            case Template.ƒ.KEYBOARD_CODE.Q:
                console.log("Inventory");
                if (InventoryIsOpen) {
                    console.log("Inventory Close");
                    Template.ƒS.Inventory.close();
                    InventoryIsOpen = false; // wenn ich q drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
                }
                else {
                    console.log("Inventory Open");
                    Template.ƒS.Inventory.open();
                    InventoryIsOpen = true;
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
        let uiElement = document.querySelector("[type=interface]");
        Template.DataForSave = Template.ƒS.Progress.setData(Template.DataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
//import { locations, sound } from "./Main";
//import { characters } from "./Main";
var Template;
//import { locations, sound } from "./Main";
//import { characters } from "./Main";
(function (Template) {
    async function Scene() {
        Template.ƒS.Speech.hide();
        console.log("First Scene");
        await Template.ƒS.Location.show(Template.backgrounds.BG_Menü);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(1);
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
                console.log("start in default modus;)");
                break;
        }
        ;
        // TEST-INVENTORY
        Template.ƒS.Inventory.add(Template.inventory.radio);
        //ƒS.Inventory.removeAttribute(any: "Medizin"): void;
        return Template.scn_Krankenhaus();
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.backgrounds = {
        //1200*720
        BG_KH: {
            name: "Krankenhaus",
            background: "./Assets/Backgrounds/Krankenhaus.jpg"
        },
        BG_Autovermietung: {
            name: "Autovermietung",
            background: "./Assets/Backgrounds/Autovermietung.jpg"
        },
        BG_Bar: {
            name: "Bar",
            background: "./Assets/Backgrounds/Barcomein.jpg"
        },
        BG_BarWeap: {
            name: "Barweap",
            background: "./Assets/Backgrounds/BarWeap.jpg"
        },
        BG_BarMB: {
            name: "BarMB",
            background: "./Assets/Backgrounds/Mindbreakerbar.jpg"
        },
        BG_Menü: {
            name: "Menüöffnen",
            background: "./Assets/Backgrounds/menü.jpg"
        },
        BG_Ende: {
            name: "BarMB",
            background: "./Assets/Backgrounds/Ende.jpg"
        },
        BG_Jahre: {
            name: "einigeJahrespäter",
            background: "./Assets/Backgrounds/einigeJahrespäter.jpg"
        },
        BG_einigeStunden: {
            name: "einigeStunden",
            background: "./Assets/Backgrounds/einigeStundenspäter.jpg"
        },
        BG_Stunde: {
            name: "eineStundespäter",
            background: "./Assets/Backgrounds/eineStundespäter.jpg"
        },
        BG_BeiAlice: {
            name: "beiAlice",
            background: "./Assets/Backgrounds/beiAlice.jpg"
        },
        BG_Cagedown: {
            name: "Cagedown",
            background: "./Assets/Backgrounds/Cagedown.png"
        },
        BG_Darkroom: {
            name: "Darkroom",
            background: "./Assets/Backgrounds/Darkroom.jpg"
        },
        BG_Gefängnis: {
            name: "Gefängnis",
            background: "./Assets/Backgrounds/Gefängnis.jpg"
        },
        BG_GFinCage: {
            name: "GFinCage",
            background: "./Assets/Backgrounds/GFinCage.jpg"
        },
        BG_Black: {
            name: "black",
            background: "./Assets/Backgrounds/black.png"
        },
        BG_Hotelroom: {
            name: "Hotelroom",
            background: "./Assets/Backgrounds/Hotelroom.jpg"
        },
        BG_London: {
            name: "London",
            background: "./Assets/Backgrounds/London.jpg"
        },
        BG_MBAutovermietung: {
            name: "MBAutovermietung",
            background: "./Assets/Backgrounds/MindbreakerAutovermietung.jpg"
        },
        BG_MBCagedown: {
            name: "MBcagedown",
            background: "./Assets/Backgrounds/Mindbreakercagedown.jpg"
        },
        BG_MBDarkroom: {
            name: "MBdarkroom",
            background: "./Assets/Backgrounds/MindbreakerDarkroom.jpg"
        },
        BG_MBGFinCage: {
            name: "London",
            background: "./Assets/Backgrounds/MindbreakerGFinCage.jpg"
        },
        BG_MBStraße: {
            name: "MBStraße",
            background: "./Assets/Backgrounds/MindbreakerStraße.jpg"
        },
        BG_SEK: {
            name: "Sek",
            background: "./Assets/Backgrounds/Sek.jpg"
        },
        BG_Straße1: {
            name: "Straße1",
            background: "./Assets/Backgrounds/Straße1.jpg"
        },
        BG_Straßeerwischt: {
            name: "Straßeerwischt",
            background: "./Assets/Backgrounds/Straßeerwischt.jpg"
        },
        BG_StraßeFlucht: {
            name: "StraßeFlucht",
            background: "./Assets/Backgrounds/StraßeFlucht.jpg"
        },
        BG_einJahr: {
            name: "EinJahr",
            background: "./Assets/Backgrounds/einJahr.jpg"
        },
        BG_HBSturm: {
            name: "Hammerbreakersturm",
            background: "./Assets/Backgrounds/Hammerbreakersturm.jpg"
        },
        BG_SakuraTod: {
            name: "SakuraTod",
            background: "./Assets/Backgrounds/SakuraTod.jpg"
        },
        BG_AliceTod: {
            name: "AliceTod",
            background: "./Assets/Backgrounds/AliceTod.jpg"
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        narrator: {
            name: "",
        },
        Mädchen_im_Käfig: {
            name: "Mädchen im Käfig",
        },
        Gangster: {
            name: "Gangster",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Gangster/Gangster.png",
            }
        },
        zweiter_Gangster: {
            name: "Zweiter Gangster",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Gangster/Gangster1.png",
            }
        },
        dritter_Gangster: {
            name: "Dritter Gangster",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Gangster/Gangster2.png",
            }
        },
        Shuichi: {
            name: "Shuichi",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Shuichi/Shuichi.png",
                weapon: "./Assets/Characters/Shuichi/ShuichiWep.png",
            }
        },
        Sakura: {
            name: "Sakura",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Sakura/SakuraNormal.png",
                free: "./Assets/Characters/Sakura/Sakurafree.png",
                dylwys: "./Assets/Characters/Sakura/Sakuradylwys.png",
                happy: "./Assets/Characters/Sakura/SakuraHappy.png",
                sad: "./Assets/Characters/Sakura/SakuraSad.png",
                veryhappy: "./Assets/Characters/Sakura/Sakuraveryhappy.png"
            }
        },
        Alice: {
            name: "Alice",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Alice/Alice.png",
                mb: "./Assets/Characters/Alice/AliceMB.png",
                dylwys: "./Assets/Characters/Alice/Alicedylwys.png",
                close: "./Assets/Characters/Alice/AliceNah.png",
                running: "./Assets/Characters/Alice/Alicerunning.png",
            }
        },
        Doktor: {
            name: "Doktor",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Doktor/Doktor.png",
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
        HBsoundtrack: "./sounds/Hammer_Breaker_Records.wav",
        Technosoundtrack: "./sounds/radio_deep_techno_station.wav",
        Drillpianos: "./Assets/Music/drillpianos.mp3",
        isokschnell: "./Assets/Music/isokschnell.mp3",
        Dumm: "./Assets/Music/dumm.wav",
        groovy: "./Assets/Music/groovy.mp3",
        SchwarzesLoch: "./Assets/Music/SchwarzesLoch.wav",
        Trapflow: "./Assets/Music/Trapflow.mp3",
        zweiterDrill: "./Assets/Music/zweiterDRILL.mp3",
        Suite: "./sounds/MariosSuite123.mp3",
        // SFX
        gunshots: "./Assets/Music/gunshots.mp3",
        gunshot: "./Assets/Music/gunshot.mp3",
        gunshots2: "./Assets/Music/gunshots2.mp3",
        Street: "./Assets/Music/Street.mp3",
        Drone: "./Assets/Music/droneloop.mp3",
        tel: "./Assets/Music/tel.mp3",
        luger: "./Assets/Music/luger.mp3",
        luger1: "./Assets/Music/luger1.mp3",
        door: "./Assets/Music/door.wav",
        cagedrop: "./Assets/Music/cagedrop.wav",
        cageopen: "./Assets/Music/cagefx.wav"
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_2GFs() {
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.Drillpianos, 1, 2, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_HBSturm);
        await Template.ƒS.update(2);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_einJahr);
        await Template.ƒS.update(2);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Hotelroom);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Na?");
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.dylwys, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.Sakura, Template.characters.Sakura.pose.dylwys, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Do you like what you see?");
        await Template.ƒS.update(1);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_2GFs = scn_2GFs;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_AliceTod() {
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.HBsoundtrack, 1, 2, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_HBSturm);
        await Template.ƒS.update(2);
        await Template.ƒS.update(4);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_AliceTod);
        await Template.ƒS.update(2);
        await Template.ƒS.update(4);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_AliceTod = scn_AliceTod;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_BreakerTod() {
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.Street, 0, 2, true);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.Drone, 1, 2, true);
        await Template.ƒS.Location.show(Template.backgrounds.BG_MBStraße);
        await Template.ƒS.update(3);
        await Template.ƒS.Character.show(Template.characters.Gangster, Template.characters.Gangster.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Gangster, "jetzt haben wir ihn");
        await Template.ƒS.Character.show(Template.characters.zweiter_Gangster, Template.characters.zweiter_Gangster.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.zweiter_Gangster, "Hahaha... endlich... Du kleine Ratte!!");
        await Template.ƒS.Character.show(Template.characters.dritter_Gangster, Template.characters.dritter_Gangster.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Sound.fade(Template.sound.Drone, 0, 1, true);
        await Template.ƒS.Speech.tell(Template.characters.dritter_Gangster, "...endlich bist du tod!");
        await Template.ƒS.update(1);
        Template.ƒS.Sound.play(Template.sound.gunshot, 1, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_BreakerTod = scn_BreakerTod;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_darkroom() {
        await Template.ƒS.Location.show(Template.backgrounds.BG_einigeStunden);
        await Template.ƒS.update(1.3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(1.3);
        await Template.ƒS.Sound.fade(Template.sound.Drone, 1, 3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Darkroom);
        await Template.ƒS.update(4);
        await Template.ƒS.Character.show(Template.characters.Doktor, Template.characters.Doktor.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Sie sind ja wach, sehr schön.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Ich denke Sie werden einige Fragen haben und ich bin bereit jede einzelne zu beantworten.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Können Sie sich schon daran erinnern wer ich eigentlich bin?");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Nein.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Ich war ihr Anwalt... für fünf lange Jahre.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Fünf Jahre lang, habe ich Sie in ihren kriminellen Tätigkeiten beraten und verteidigt.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Als die neue Droge Hammerbreakers auf den Markt kam, infizierten Sie und ihr Kartell die ganze Stadt mit diesem Gift.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Dann haben Sie angefangen, die Droge selbest zu konsumieren und wurden, wie die allermeisten Menschen, danach süchtig.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Weil ihre Profite so hoch waren, dass Sie in ihrem Geld baden konnten, bestellten Sie immer mehr von diesen Drogen.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Und als ich, ihr Anwalt, das alles nicht mehr ertragen konnte und aussteigen wollte, haben Sie mich mit meiner Familie erpresst.");
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Schließlich haben Sie meine Tochter... vor meinen eigenen Augen... umbringen lassen.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Nehmen Sie es mir nicht übel..");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "..aber ich musste Sie irgendwie stoppen, also gab ich Ihnen eine speziell dosierte Menge, ihrer eigenen Droge, die Sie nicht hätte töten können..");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "..Das tat ich um Ihnen ein Reset zu verpassen. Mein Plan war es eigentlich, dass Sie restlos ihre Erinnerungen verlieren und irgendwo ein neues Leben beginnen.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Wissen Sie.. diese Drogen... und das ganze Geld haben Sie zerstört.. Sie waren früher mal ein guter Mensch...");
        await Template.ƒS.Speech.tell(Template.characters.Doktor, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Deswegen will ich ihnen nichts böses. Sehen Sie, wir haben Sie nicht gefesselt und ihrer Freundin, Alice,.. ihr geht es auch gut.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Wo ist Sie?");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Im Moment dürfte Sie zuhause sein und sich fragen, wo Sie eigentlich sind.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Ich entschuldige mich dafür, dass euch meine Leute gestern Abend beobachtet haben. Ich wollte Ihnen Zeit geben, ihre Erinnerungen zu sammeln, bevor ich Ihnen alles erkläre.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Deswegen musste ich Ihnen das alles verschweigen, als Sie aufgewacht sind. Ich finde Sie sollten mir also dankbar sein.");
        await Template.ƒS.update(0.2);
        let demDoktorglauben = {
            Ja: "Ich glaube Ihnen.",
            No: "Ich glaube kein Wort/Pistole ziehen."
        };
        let dok = await Template.ƒS.Menu.getInput(demDoktorglauben, "choicez");
        console.log(dok);
        switch (dok) {
            case demDoktorglauben.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich glaube Ihnen.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Doktor, "Gut, Sie erinnern sich anscheinend. Aber Sie zittern ja..");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Doktor, "Ich gebe Ihnen eine Beruhigungsspritze, dann können Sie sich später der Polizei stellen.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Okay...");
                await Template.ƒS.update(0.2);
                Template.ƒS.Speech.hide();
                await Template.ƒS.update(0.2);
                await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
                await Template.ƒS.update(2);
                await Template.ƒS.Speech.tell(Template.characters.Doktor, "Dann bitte einmal still halten.");
                await Template.ƒS.update(0.2);
                Template.ƒS.Sound.fade(Template.sound.Drone, 2.4, 3);
                Template.ƒS.Sound.fade(Template.sound.Drone, 0, 0.01);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                await Template.ƒS.update(3);
                await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
                await Template.ƒS.update(3);
                break;
            case demDoktorglauben.No:
                await Template.ƒS.Sound.fade(Template.sound.Drone, 0, 0.5);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Wenn Sie mich schon kidnappen, dann durchsuchen Sie mich gefälligst auch richtig!");
                await Template.ƒS.update(0.1);
                Template.ƒS.Speech.hide();
                Template.ƒS.Sound.play(Template.sound.luger1, 1, false);
                await Template.ƒS.update(0.01);
                Template.ƒS.Character.hideAll();
                await Template.ƒS.update(0.01);
                await Template.ƒS.update(2);
                await Template.ƒS.Sound.fade(Template.sound.Drone, 0.5, 2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Alice!!! Wo bist du?");
                await Template.ƒS.update(0.2);
                Template.ƒS.Sound.play(Template.sound.door, 1, false);
                await Template.ƒS.Character.show(Template.characters.Gangster, Template.characters.Gangster.pose.default, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.1);
                Template.ƒS.Sound.play(Template.sound.luger1, 1, false);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.hide(Template.characters.Gangster);
                await Template.ƒS.update(0.2);
                await Template.ƒS.update(1);
                await Template.ƒS.Sound.fade(Template.sound.groovy, 1, 1, true);
                await Template.ƒS.Sound.fade(Template.sound.Drone, 0, 1);
                await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "..ich bin so froh dich zu sehen.");
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Dieser Gangster hat mich im Nebenraum festgehalten. Da war noch ein Mädchen, das von der Decke hing.");
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Wie meinst du das?");
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Komm mit.");
                await Template.ƒS.update(0.1);
                return Template.scn_GF();
                break;
        }
    }
    Template.scn_darkroom = scn_darkroom;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_GF() {
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_GFinCage);
        await Template.ƒS.update(0.3);
        await Template.ƒS.Speech.tell(Template.characters.Mädchen_im_Käfig, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Mädchen_im_Käfig, "!!!!!!!!");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Mädchen_im_Käfig, "Oh Gott, ich bin so froh! Du bist am Leben!!!");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Kennen wir uns? Wer bist du?");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Mädchen_im_Käfig, "Ich bin deine Freundin, Sakura! Mach keine Scherze und befreie mich aus diesem Käfig!");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ehh");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Natürlich.. sofort.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(0.1);
        Template.ƒS.Sound.play(Template.sound.cagedrop, 1, false);
        Template.ƒS.Sound.play(Template.sound.cageopen, 1, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Cagedown);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.show(Template.characters.Sakura, Template.characters.Sakura.pose.free, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Ich bin soo froh dich zu sehen.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Hast du dein Gedächtnis verloren? Erinnerst du dich an mich Baby?");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.left);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "F.. Fr... Freundin? Nein daran kann er sich nicht erinnern, stimmt doch oder?");
        await Template.ƒS.update(0.1);
        let erinnern = {
            Ja: "Ich erinnere mich.",
            No: "Ich erinnere mich nicht."
        };
        let gfgf = await Template.ƒS.Menu.getInput(erinnern, "choicez");
        console.log(gfgf);
        switch (gfgf) {
            case erinnern.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ja...! Doch, natürlich erinnere ich mich an dich Sakura, mein Schatz. Geht es dir gut?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Phh....Ich warte mal da drüben..");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.hide(Template.characters.Alice);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Mir geht es bestens, solange du dich erinnerst. Der Doktor hat dir das angetan, richtig?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Wer ist dieser Mann wirklich?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Alle nennen ihn den Doktor. Über ihn ist nicht viel bekannt. Er tauchte auf, wie aus dem nichts... mit seinen.. Hammerbreakers.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Er kam dir bei deinen Geschäften in die Quere und vergiftete die Jugend mit diesen gefährlichen Drogen, die dir ein Dorn im Auge waren.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Nachdem du ihn deswegen verwarnt hattest, überfiel er mit seinen Männern vor ein paar Tagen die Autovermietung und gab dir eine Überdosis von dieser Droge.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Mich hat er entführt und seitdem war ich in diesem Käfig gefangen. Ich danke dir für deine Rettung.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "...Was wirst du jetzt tun?");
                await Template.ƒS.update(0.2);
                Template.ƒS.Sound.fade(Template.sound.groovy, 0, 2, true);
                let Rache = {
                    Ja: "Rache nehmen.",
                    No: "Zur Polizei gehen."
                };
                let Raache = await Template.ƒS.Menu.getInput(Rache, "choicez");
                console.log(Raache);
                switch (Raache) {
                    case Rache.Ja:
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde mich an den Leuten rächen, die mir das alles angetan haben. Meine schlimmsten Feinde sind diejenigen, die diese Hammerbreakers herstellen.");
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Aber wer glaubst du, könnte das sein?");
                        await Template.ƒS.update(0.2);
                        let Wer = {
                            Ja: "London.",
                            No: "Hammerbreaker.Records."
                        };
                        let Was = await Template.ƒS.Menu.getInput(Wer, "choicez");
                        console.log(Was);
                        switch (Was) {
                            case Wer.Ja:
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich denke, in London wird diese Droge hergestellt. Also werde ich nach London gehen und mich dort auf die Suche nach den Herstellern machen.");
                                await Template.ƒS.update(0.2);
                                return Template.scn_happySakuraLondon();
                                break;
                            case Wer.No:
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Für mich ist es ziemlich offensichtlich, dass Hammerbreaker Records die Droge bewerben und ziemlich sicher auch im Vertrieb bzw. der Herstellung ihre Finger im Spiel haben.");
                                await Template.ƒS.update(0.2);
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Sakura, ruf meine Männer zusammen. Wir stürmen Hammerbreaker Records.");
                                await Template.ƒS.update(0.2);
                                return Template.scn_2GFs();
                                break;
                        }
                        break;
                    case Rache.No:
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich verspüre nicht das Bedürfnis Rache zu nehmen.");
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde mich der Polizei stellen und ihnen dabei helfen den Drogenhandel einzudämmen.");
                        await Template.ƒS.update(0.2);
                        return Template.scn_JailhappySakura();
                        break;
                }
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                await Template.ƒS.update(1);
                return Template.scn_Radio();
                break;
            case erinnern.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Tut mir leid, ich kann mich nicht an dich erinnern.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Waas? Das ist schrecklich. Wir sind bereits zwei Jahre zusammen...");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Es tut mir sehr leid... vielleicht kommen meine Erinnerungen ja wieder zurück... Wenn du wirklich meine Freundin warst, kannst du mir sagen, wer ich bin?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Du bist der gutherzigste, liebste Mensch der Welt und gleichzeitig der Führer unseres Kartells. Wir handeln nur mit Marihuana.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Wer war dieser komische Mann mit der Brille wirklich?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Alle nennen ihn den Doktor. Über ihn ist nicht viel bekannt. Er tauchte auf, wie aus dem nichts... mit seinen.. Hammerbreakers.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Er kam dir bei deinen Geschäften in die Quere und vergiftete die Jugend mit diesen gefährlichen Drogen, die dir ein Dorn im Auge waren.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Nachdem du ihn deswegen verwarnt hattest, überfiel er mit seinen Männern vor ein paar Tagen die Autovermietung und gab dir eine Überdosis von dieser Droge.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Mich hat er entführt und seitdem war ich in diesem Käfig gefangen. Ich danke dir für deine Rettung.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "...Was wirst du jetzt tun?");
                await Template.ƒS.update(0.2);
                Template.ƒS.Sound.fade(Template.sound.groovy, 0, 2, true);
                let Racheohneerinnerungen = {
                    Ja: "Rache nehmen.",
                    No: "Zur Polizei gehen."
                };
                let Raaache = await Template.ƒS.Menu.getInput(Racheohneerinnerungen, "choicez");
                console.log(Raaache);
                switch (Raaache) {
                    case Racheohneerinnerungen.Ja:
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde mich an den Leuten rächen, die mir das alles angetan haben. Meine schlimmsten Feinde sind diejenigen, die diese Hammerbreakers herstellen.");
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Aber wer glaubst du, könnte das sein?");
                        await Template.ƒS.update(0.2);
                        let Wer = {
                            Ja: "London.",
                            No: "Hammerbreaker Records."
                        };
                        let Was = await Template.ƒS.Menu.getInput(Wer, "choicez");
                        console.log(Was);
                        switch (Was) {
                            case Wer.Ja:
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich denke, in London wird diese Droge hergestellt. Also werde ich nach London gehen und mich dort auf die Suche nach den Herstellern machen.");
                                await Template.ƒS.update(0.2);
                                return Template.scn_happyAliceLondon();
                                break;
                            case Wer.No:
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Für mich ist es ziemlich offensichtlich, dass Hammerbreaker Records die Droge bewerben und ziemlich sicher auch im Vertrieb bzw. in der Herstellung ihre Finger im Spiel haben.");
                                await Template.ƒS.update(0.2);
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Sakura, ruf meine Männer zusammen wir stürmen Hammerbreakers Records.");
                                await Template.ƒS.update(0.2);
                                return Template.scn_happyAlice();
                                break;
                        }
                        ;
                        break;
                    case Racheohneerinnerungen.No:
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich verspüre nicht das Bedürfnis Rache zu nehmen.");
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde mich der Polizei stellen und ihnen dabei helfen den Drogenhandel einzudämmen.");
                        await Template.ƒS.update(0.2);
                        return Template.scn_Jail();
                        break;
                }
                ;
                break;
        }
        ;
    }
    Template.scn_GF = scn_GF;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_Jail() {
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.Technosoundtrack, 1, 2, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Jahre);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Gefängnis);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich habe mich der Polizei gestellt, fünf Jahre wegen Drogenhandels in diesem Gefängnis abgesessen. Endlich bin ich wieder frei.");
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_SEK);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Die Polizei hat ihr Versprechen eingehalten und mit Hilfe meiner Aussagen und dem Sondereinsatzkommando, den Hammerbreaker Schwarzmarkt in dieser Stadt beseitigt.");
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_Jail = scn_Jail;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_JailhappySakura() {
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.Technosoundtrack, 1, 2, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Jahre);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_SEK);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Nachdem ich mich der Polizei gestellt habe, gelang es Sondereinsatzkräften, mit Hilfe meiner Aussagen, den Hammerbreaker-Schwarzmarkt in dieser Stadt zu beseitigen.");
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Gefängnis);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich habe mich der Polizei gestellt, fünf Jahre wegen Drogenhandels in diesem Gefängnis abgesessen. Endlich bin ich wieder frei.");
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich hatte sehr Glück. Denn es gab da ein Mensch, der mich nicht vergessen hatte und auf mich gewartet hat.");
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_London);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Sakura, Template.characters.Sakura.pose.happy, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Ich bin so froh dass wir endlich wieder zusammen sein können. Mein..");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Ich liebe dich.");
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_JailhappySakura = scn_JailhappySakura;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_Krankenhaus() {
        await Template.ƒS.Sound.fade(Template.sound.Drone, 0.5, 5, true);
        await Template.ƒS.Location.show(Template.backgrounds.BG_KH);
        await Template.ƒS.update(Template.transitions.MB.duration, Template.transitions.MB.alpha, Template.transitions.MB.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Doktor, Template.characters.Doktor.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Sie sind ja wach, sehr schön.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Sie dürften wohl ihre Erinnerungen verloren haben, aber keine Sorge, wir haben Sie auf Hirnschäden überprüft.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Ihre Erinnerungen sollten spätestens in ein paar Wochen wieder in Takt sein.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Wo bin ich hier? Das sieht nicht aus, wie ein Krankenhaus.");
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Das stimmt.");
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Wir nahmen an, Sie könnten vielleicht in einem längeren Koma liegen und auf Grund der pandemischen Lage...");
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "...haben wir Sie zu mir zuhause verlegt, um Krankenhausbetten frei zu halten.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Sie lagen zwei Tage im Koma und sollten es ruhig angehen.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Ich werde Sie jetzt gehen lassen, aber sie sollten zu dieser Ardesse hier.");
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "...");
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Es ist ihre Adresse, ich habe gehört in ihrer Abwesenheit wurde dort eingebrochen.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Ich wünsche ihnen viel Glück.");
        await Template.ƒS.update(0.4);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(0.4);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.4);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Straße1);
        await Template.ƒS.update(Template.transitions.MB.duration, Template.transitions.MB.alpha, Template.transitions.MB.edge);
        await Template.ƒS.Sound.fade(Template.sound.Street, 1, 2, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Sound.fade(Template.sound.Drone, 0, 2);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1.5);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Hey, Süßer.");
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Du siehst aus als könntest du ein paar Hammerbreakers vertragen.");
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.mb, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "na wie siehts aus?");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich habe erst kürzlich meine Erinnerungen verloren, was ist das denn überhaupt?");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ach so ist das, na dann wird dich das hier erst recht wieder in Fahrt bringen. ......Es regt deine Neuronen an.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Weißt du was? Ich schenks dir. Möchtest du gleich eines nehmen?");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "ehm..");
        await Template.ƒS.update(0.4);
        Template.ƒS.Inventory.add(Template.inventory.Hammerbreakers);
        let Hammerbreakersprobieren = {
            Ja: "Ja",
            No: "Nein"
        };
        let Hammerbreakersintus = await Template.ƒS.Menu.getInput(Hammerbreakersprobieren, "choicez");
        console.log(Hammerbreakersintus);
        switch (Hammerbreakersintus) {
            case Hammerbreakersprobieren.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ja, wenn du sagst, dass es hilft...");
                await Template.ƒS.update(0.2);
                return Template.scn_Straße2MB();
                break;
            case Hammerbreakersprobieren.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Nein, danke.");
                await Template.ƒS.update(0.2);
                return Template.scn_Straße2clean();
                break;
        }
    }
    Template.scn_Krankenhaus = scn_Krankenhaus;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_Laden() {
        await Template.ƒS.update(1.3);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(0.1);
        Template.ƒS.Sound.play(Template.sound.door, 0.6, false);
        await Template.ƒS.Sound.fade(Template.sound.Street, 0, 0.2, true);
        await Template.ƒS.Sound.fade(Template.sound.isokschnell, 1, 0.2, true);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Bar);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Pju, das war knapp.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "...Warte... Ich glaube ich kannte einen von ihnen. Diese Leute sind vom Kartell. ...Warum machen die Jagt auf dich?");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich weiß es nicht, könnte es sein, dass ich in kriminelle Machenschaften verstrickt war?");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Das ist sehr ungünstig. Was soll ich jetzt nur tun?");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Willst du trotzdem die Polizei rufen?");
        let Polizeirufen = {
            Ja: "Polizei verständigen",
            No: "Die Polizei nicht verständigen"
        };
        let policejane = await Template.ƒS.Menu.getInput(Polizeirufen, "choicez");
        console.log(policejane);
        switch (policejane) {
            case Polizeirufen.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ja, bitte ruf die Polizei, sonst komme ich aus dieser Nummer nicht mehr lebend raus.");
                await Template.ƒS.update(0.2);
                return Template.scn_Polizei();
                break;
            case Polizeirufen.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Zu riskant. Im schlimmsten Fall hab ich früher jemanden umgebracht und komme mein Leben lang hinter Gitter.");
                await Template.ƒS.update(0.2);
                return Template.scn_keinePolizei();
                break;
        }
        ;
    }
    Template.scn_Laden = scn_Laden;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_LadenMB() {
        await Template.ƒS.update(1.3);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(0.1);
        Template.ƒS.Sound.play(Template.sound.door, 0.6, false);
        await Template.ƒS.Sound.fade(Template.sound.Street, 0, 0.2, true);
        await Template.ƒS.Sound.fade(Template.sound.isokschnell, 0.2, 0.2, true);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.Location.show(Template.backgrounds.BG_BarMB);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Pju, das war knapp.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "...Warte... Ich glaube ich kannte einen von ihnen. Diese Leute sind vom Kartell. ...Warum machen die Jagt auf dich?");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich weiß es nicht, könnte es sein, dass ich in kriminelle Machenschaften verstrickt war?");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Das ist sehr ungünstig. Was soll ich jetzt nur tun? Und warum ist mir so übel? ...Warum sehe ich alles so verzerrt?");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Das müssen die Drogen sein. Tut mir leid wenn sie dir nicht gefallen.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Drogen? ....Ach passt schon.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Willst du trotzdem die Polizei rufen?");
        let Polizeirufen = {
            Ja: "Polizei verständigen",
            No: "Die Polizei nicht verständigen"
        };
        let policejane = await Template.ƒS.Menu.getInput(Polizeirufen, "choicez");
        console.log(policejane);
        switch (policejane) {
            case Polizeirufen.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ja, bitte ruf die Polizei, sonst komme ich aus dieser Nummer nicht mehr lebend raus.");
                await Template.ƒS.update(0.2);
                return Template.scn_Polizei();
                break;
            case Polizeirufen.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Zu riskant. Im schlimmsten Fall hab ich früher jemanden umgebracht und komme mein Leben lang hinter Gitter.");
                await Template.ƒS.update(0.2);
                return Template.scn_keinePolizei();
                break;
        }
    }
    Template.scn_LadenMB = scn_LadenMB;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_MBdarkroom() {
        await Template.ƒS.Location.show(Template.backgrounds.BG_einigeStunden);
        await Template.ƒS.update(1.3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(1.3);
        await Template.ƒS.Sound.fade(Template.sound.Drone, 1, 3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_MBDarkroom);
        await Template.ƒS.update(4);
        await Template.ƒS.Character.show(Template.characters.Doktor, Template.characters.Doktor.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Sie sind ja wach, sehr schön.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Ich denke Sie werden einige Fragen haben und ich bin bereit jede einzelne zu beantworten.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Können Sie sich schon daran erinnern wer ich eigentlich bin?");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Nein.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Ich war ihr Anwalt... für fünf lange Jahre.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Fünf Jahre lang, habe ich Sie in ihren kriminellen Tätigkeiten beraten und verteidigt.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Als die neue Droge Hammerbreakers auf den Markt kam, infizierten Sie und ihr Kartell die ganze Stadt mit diesem Gift.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Dann haben Sie angefangen, die Droge selbest zu konsumieren und wurden, wie die allermeisten Menschen, danach süchtig.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Weil ihre Profite so hoch waren, dass Sie in ihrem Geld baden konnten, bestellten Sie immer mehr von diesen Drogen.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Und als ich, ihr Anwalt, das alles nicht mehr ertragen konnte und aussteigen wollte, haben Sie mich mit meiner Familie erpresst.");
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Schließlich haben Sie meine Tochter... vor meinen eigenen Augen umbringen lassen.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Nehmen Sie es mir nicht übel..");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "..aber ich musste Sie irgendwie stoppen, also gab ich ihnen eine speziell dosierte Menge, ihrer eigenen Droge, die Sie nicht hätte töten können..");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "..Das tat ich um ihnen ein Reset zu verpassen. Mein Plan war es eigentlich, dass Sie restlos ihre Erinnerungen verlieren und irgendwo ein neues Leben beginnen.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Wissen Sie.. diese Drogen... und das ganze Geld haben Sie zerstört.. Sie waren früher mal ein guter Mensch...");
        await Template.ƒS.Speech.tell(Template.characters.Doktor, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Deswegen will ich ihnen nichts böses. Sehen Sie, wir haben Sie nicht gefesselt und ihrer Freundin, Alice,.. ihr geht es auch gut.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Wo ist Sie?");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Sie ist im Nebenraum und wird dort von meinem Bruder ärztlich versorgt. Mein Bruder ist tatsächlich Arzt, keine Sorge.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ärztlich versorgt? Wieso?");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Sie hat eine Überdosis Hammerbreakers erwischt.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Als meine Leute euch beide heute Nacht aufgesucht haben, stand zum Glück die Tür offen, denn Alice war kurz davor an ihrem Erbrochenen zu ersticken.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Trotzdem entschuldige ich mich dafür, dass euch meine Leute gestern Abend beobachtet haben. Ich wollte Ihnen Zeit geben, ihre Erinnerungen zu sammeln, bevor ich Ihnen alles erkläre.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Doktor, "Sie sollten mir also dankbar sein.");
        await Template.ƒS.update(0.2);
        let demDoktorglauben = {
            Ja: "Ich glaube ihnen.",
            No: "Ich glaube kein Wort/Pistole ziehen."
        };
        let dok = await Template.ƒS.Menu.getInput(demDoktorglauben, "choicez");
        console.log(dok);
        switch (dok) {
            case demDoktorglauben.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich glaube ihnen.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Doktor, "Gut, Sie erinnern sich. Aber Sie zittern und sind ganz bleich...");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Doktor, "Das sind die Nebenwirkungen der Hammerbreaker...");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Doktor, "Ich gebe ihnen eine Beruhigungsspritze, die Ihnen wieder zu klarem Geist verhelfen wird.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Okay...");
                await Template.ƒS.update(0.2);
                Template.ƒS.Speech.hide();
                await Template.ƒS.update(0.2);
                await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
                await Template.ƒS.update(2);
                await Template.ƒS.Speech.tell(Template.characters.Doktor, "Dann bitte einmal still halten.");
                await Template.ƒS.update(0.2);
                Template.ƒS.Sound.fade(Template.sound.Drone, 2.4, 3);
                Template.ƒS.Sound.fade(Template.sound.Drone, 0, 0.01);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                await Template.ƒS.update(3);
                await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
                await Template.ƒS.update(3);
                break;
            case demDoktorglauben.No:
                await Template.ƒS.Sound.fade(Template.sound.Drone, 0, 0.5);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Wenn Sie mich schon kidnappen, dann durchsuchen Sie mich gefälligst auch richtig!");
                await Template.ƒS.update(0.1);
                Template.ƒS.Speech.hide();
                Template.ƒS.Sound.play(Template.sound.luger1, 1, false);
                await Template.ƒS.update(0.01);
                Template.ƒS.Character.hideAll();
                await Template.ƒS.update(0.01);
                await Template.ƒS.update(2);
                await Template.ƒS.Sound.fade(Template.sound.Drone, 0.5, 2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Alice!!! Wo bist du?");
                await Template.ƒS.update(0.2);
                Template.ƒS.Sound.play(Template.sound.door, 1, false);
                await Template.ƒS.Character.show(Template.characters.Gangster, Template.characters.Gangster.pose.default, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.1);
                Template.ƒS.Sound.play(Template.sound.luger1, 1, false);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.hide(Template.characters.Gangster);
                await Template.ƒS.update(0.2);
                await Template.ƒS.update(1);
                await Template.ƒS.Sound.fade(Template.sound.groovy, 1, 1, true);
                await Template.ƒS.Sound.fade(Template.sound.Drone, 0, 1);
                await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "..ich bin so froh dich zu sehen.");
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Dieser Gangster hat mich im Nebenraum festgehalten. Da war noch ein Mädchen, das von der Decke hing.");
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Wie meinst du das?");
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Komm mit.");
                await Template.ƒS.update(0.1);
                return Template.scn_MBGF();
                break;
        }
    }
    Template.scn_MBdarkroom = scn_MBdarkroom;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_MBGF() {
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_MBGFinCage);
        await Template.ƒS.update(0.3);
        await Template.ƒS.Speech.tell(Template.characters.Mädchen_im_Käfig, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Mädchen_im_Käfig, "!!!!!!!!");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Mädchen_im_Käfig, "Oh Gott, ich bin so froh! Du bist am Leben!!!");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Kennen wir uns? Wer bist du?");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Mädchen_im_Käfig, "Ich bin deine Freundin, Sakura! Mach keine Scherze und befreie mich aus diesem Käfig!");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ehh");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Natürlich.. sofort.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(0.1);
        Template.ƒS.Sound.play(Template.sound.cagedrop, 1, false);
        Template.ƒS.Sound.play(Template.sound.cageopen, 1, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_MBCagedown);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.show(Template.characters.Sakura, Template.characters.Sakura.pose.free, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Ich bin soo froh dich zu sehen.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Hast du dein Gedächtnis verloren? Erinnerst du dich an mich Baby?");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.left);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "F.. Fr... Freundin? Nein daran kann er sich nicht erinnern, stimmt doch oder?");
        await Template.ƒS.update(0.1);
        let erinnern = {
            Ja: "Ich erinnere mich.",
            No: "Ich erinnere mich nicht."
        };
        let gfgf = await Template.ƒS.Menu.getInput(erinnern, "choicez");
        console.log(gfgf);
        switch (gfgf) {
            case erinnern.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ja...! Doch, natürlich erinnere ich mich an dich Sakura, mein Schatz. Geht es dir gut?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Phh... Ich warte mal dort hinten.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.hide(Template.characters.Alice);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Mir geht es bestens, solange du dich erinnerst. Der Doktor hat dir das angetan, richtig?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Wer ist dieser Mann wirklich?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Alle nennen ihn den Doktor. Über ihn ist nicht viel bekannt. Er tauchte auf, wie aus dem nichts... mit seinen.. Hammerbreakers.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Er kam dir bei deinen Geschäften in die Quere und vergiftete die Jugend mit diesen gefährlichen Drogen, die dir ein Dorn im Auge waren.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Nachdem du ihn deswegen verwarnt hattest, überfiel er mit seinen Männern vor ein paar Tagen die Autovermietung und gab dir eine Überdosis von dieser Droge.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Mich hat er entführt und seitdem war ich in diesem Käfig gefangen. Ich danke dir für deine Rettung.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "...Was wirst du jetzt tun?");
                await Template.ƒS.update(0.2);
                Template.ƒS.Sound.fade(Template.sound.groovy, 0, 2, true);
                let Rache = {
                    Ja: "Rache nehmen.",
                    No: "Zur Polizei gehen."
                };
                let Raache = await Template.ƒS.Menu.getInput(Rache, "choicez");
                console.log(Raache);
                switch (Raache) {
                    case Rache.Ja:
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde mich an den Leuten rächen, die mir das alles angetan haben. Meine schlimmsten Feinde sind diejenigen, die diese Hammerbreakers herstellen.");
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Aber wer glaubst du, könnte das sein?");
                        await Template.ƒS.update(0.2);
                        let Wer = {
                            Ja: "London.",
                            No: "Hammerbreaker.Records."
                        };
                        let Was = await Template.ƒS.Menu.getInput(Wer, "choicez");
                        console.log(Was);
                        switch (Was) {
                            case Wer.Ja:
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich denke, in London wird diese Droge hergestellt. Also werde ich nach London gehen und mich dort auf die Suche nach den Herstellern machen.");
                                await Template.ƒS.update(0.2);
                                return Template.scn_happySakuraLondon();
                                break;
                            case Wer.No:
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Für mich ist es ziemlich offensichtlich, dass Hammerbreaker Records die Droge bewerben und ziemlich sicher auch im Vertrieb bzw. der Herstellung ihre Finger im Spiel haben.");
                                await Template.ƒS.update(0.2);
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Sakura, ruf meine Männer zusammen. Wir stürmen Hammerbreaker Records.");
                                await Template.ƒS.update(0.2);
                                return Template.scn_SakuraTod();
                                break;
                        }
                        break;
                    case Rache.No:
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich verspüre nicht das Bedürfnis Rache zu nehmen.");
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde mich der Polizei stellen und ihnen dabei helfen den Drogenhandel einzudämmen.");
                        await Template.ƒS.update(0.2);
                        return Template.scn_JailhappySakura();
                        break;
                }
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.Speech.hide();
                await Template.ƒS.update(1);
                return Template.scn_Radio();
                break;
            case erinnern.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Tut mir leid, ich kann mich nicht an dich erinnern.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Waas? Das ist schrecklich. Wir sind bereits zwei Jahre zusammen...");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Es tut mir sehr leid... vielleicht kommen meine Erinnerungen ja wieder zurück... Wenn du wirklich meine Freundin warst, kannst du mir sagen, wer ich bin?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Du bist der gutherzigste, liebste Mensch der Welt und gleichzeitig der Führer unseres Kartells. Wir handeln nur mit Marihuana.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Wer war dieser komische Mann mit der Brille wirklich?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Alle nennen ihn den Doktor. Über ihn ist nicht viel bekannt. Er tauchte auf, wie aus dem nichts... mit seinen.. Hammerbreakers.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Er kam dir bei deinen Geschäften in die Quere und vergiftete die Jugend mit diesen gefährlichen Drogen, die dir ein Dorn im Auge waren.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Nachdem du ihn deswegen verwarnt hattest, überfiel er mit seinen Männern vor ein paar Tagen die Autovermietung und gab dir eine Überdosis von dieser Droge.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Sakura, "Mich hat er entführt und seitdem war ich in diesem Käfig gefangen. Ich danke dir für deine Rettung.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "...Was wirst du jetzt tun?");
                await Template.ƒS.update(0.2);
                Template.ƒS.Sound.fade(Template.sound.groovy, 0, 2, true);
                let Racheohneerinnerungen = {
                    Ja: "Rache nehmen.",
                    No: "Zur Polizei gehen."
                };
                let Raaache = await Template.ƒS.Menu.getInput(Racheohneerinnerungen, "choicez");
                console.log(Raaache);
                switch (Raaache) {
                    case Racheohneerinnerungen.Ja:
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde mich an den Leuten rächen, die mir das alles angetan haben. Meine schlimmsten Feinde sind diejenigen, die diese Hammerbreakers herstellen.");
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Aber wer glaubst du, könnte das sein?");
                        await Template.ƒS.update(0.2);
                        let Wer = {
                            Ja: "London.",
                            No: "Hammerbreaker Records."
                        };
                        let Was = await Template.ƒS.Menu.getInput(Wer, "choicez");
                        console.log(Was);
                        switch (Was) {
                            case Wer.Ja:
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich denke, in London wird diese Droge hergestellt. Also werde ich nach London gehen und mich dort auf die Suche nach den Herstellern machen.");
                                await Template.ƒS.update(0.2);
                                return Template.scn_happyAliceLondon();
                                break;
                            case Wer.No:
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Für mich ist es ziemlich offensichtlich, dass Hammerbreaker Records die Droge bewerben und ziemlich sicher auch im Vertrieb bzw. in der Herstellung ihre Finger im Spiel haben.");
                                await Template.ƒS.update(0.2);
                                await Template.ƒS.Speech.tell(Template.characters.narrator, "Sakura, ruf meine Männer zusammen wir stürmen Hammerbreakers Records.");
                                await Template.ƒS.update(0.2);
                                return Template.scn_AliceTod();
                                break;
                        }
                        ;
                        break;
                    case Racheohneerinnerungen.No:
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich verspüre nicht das Bedürfnis Rache zu nehmen.");
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde mich der Polizei stellen und ihnen dabei helfen den Drogenhandel einzudämmen.");
                        await Template.ƒS.update(0.2);
                        return Template.scn_Jail();
                        break;
                }
                ;
                break;
        }
        ;
    }
    Template.scn_MBGF = scn_MBGF;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_MBbrokenglass() {
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        await Template.ƒS.Sound.fade(Template.sound.Dumm, 0, 1, true);
        await Template.ƒS.Sound.fade(Template.sound.Street, 1, 2, true);
        await Template.ƒS.Location.show(Template.backgrounds.BG_MBAutovermietung);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Hier sind wir.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Hier war doch bis vor kurzem noch eine Autovermietung.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Kann sein.... Mir ist schon wieder schwummrig. Hier steht doch alles Kopf.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Da hat sich wohl jemand ganz schön bedient.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Sieht so aus. Vielleicht hat dieser Einbruch etwas mit meinem Gedächtnisverlust zu tun.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Haben Sie dir das nicht alles im Krankenhaus gesagt?");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Nein...");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Kommt mir sehr verdächtig vor...");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Hier standen früher so viele Autos, kaum zu glauben, dass das alles dir gehört hat.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Aber..");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ich habe ein ungutes Gefühl hier. Ich habe das Gefühl als würde man uns beobachten.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Lass uns zu mir gehen, hier bist du doch eh nicht sicher.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Sound.fade(Template.sound.Street, 0, 1, true);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Okay...");
        await Template.ƒS.update(0.4);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Stunde);
        await Template.ƒS.update(0.4);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.backgrounds.BG_BeiAlice);
        await Template.ƒS.update(0.4);
        return Template.scn_beiAlice();
    }
    Template.scn_MBbrokenglass = scn_MBbrokenglass;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_Polizei() {
        await Template.ƒS.update(1.3);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "okay, ich rufe die Polizei");
        await Template.ƒS.update(0.2);
        Template.ƒS.Sound.play(Template.sound.tel, 1, false);
        await Template.ƒS.update(4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Hallo, ist hier die Polizei?");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Eh, ja hallo, also.. Auf uns... Auf einen gutaussehenden Typen, den ich vorher angemacht habe, wurde soeben geschossen und... ");
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ja genau, neben mir steht das Ziel dieser Verbrecher. Er bittet um Polizeischutz. Wir sind in Shuichi`s Bar. Okay, bis gleich.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Sehr gut, die Polizei ist auf dem Weg hier her");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Achso, du solltest jetzt wohl besser diese Hammerbreakers wegwerfen, die ich dir gegeben hatte.");
        await Template.ƒS.update(0.2);
        Template.ƒS.Sound.play(Template.sound.door, 1, false);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.play(Template.sound.gunshots2, 1, false);
        await Template.ƒS.Sound.fade(Template.sound.isokschnell, 0, 0.01, true);
        await Template.ƒS.update(0.1);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.zweiter_Gangster, "Hahahaha");
        await Template.ƒS.Character.show(Template.characters.zweiter_Gangster, Template.characters.zweiter_Gangster.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.zweiter_Gangster, "Das wars mit deiner hübschen Freundin!");
        await Template.ƒS.Character.show(Template.characters.dritter_Gangster, Template.characters.dritter_Gangster.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.dritter_Gangster, "...und mit dir auch!");
        await Template.ƒS.update(1);
        Template.ƒS.Sound.play(Template.sound.gunshot, 1, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_Polizei = scn_Polizei;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_Radio() {
        await Template.ƒS.update(30);
        let Radiowidmen = {
            Ja: "Eine weitere halbe Minute Radio hören.",
            No: "Ich bin fertig [Escape drücken]"
        };
        let nochnehalbeminute = await Template.ƒS.Menu.getInput(Radiowidmen, "choicez");
        console.log(nochnehalbeminute);
        switch (nochnehalbeminute) {
            case Radiowidmen.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich höre noch etwas weiter.");
                return scn_Radio();
                break;
            case Radiowidmen.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich habe genug.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Shuichi, Template.characters.Shuichi.pose.default, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.8);
                return Template.scn_zweiteMBchoice();
                break;
        }
    }
    Template.scn_Radio = scn_Radio;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_SakuraTod() {
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.HBsoundtrack, 1, 2, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_HBSturm);
        await Template.ƒS.update(4);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_SakuraTod);
        await Template.ƒS.update(2);
        await Template.ƒS.update(10);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_SakuraTod = scn_SakuraTod;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_Straße2MB() {
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Es wird bald anfangen zu wirken.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "eehh");
        await Template.ƒS.update(1);
        let gehen = {
            Ja: "Ich werde jetzt gehen.",
            No: "Wie heißt du?"
        };
        let Hammerbreakersintus = await Template.ƒS.Menu.getInput(gehen, "choicez");
        console.log(Hammerbreakersintus);
        switch (Hammerbreakersintus) {
            case gehen.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde jetzt gehen.");
                await Template.ƒS.update(1);
                return Template.scn_BreakerTod();
                break;
            case gehen.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Wie heißt du?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Mein Name ist Alice, und deiner?");
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Daran konnte ich mich bis jetzt noch nicht erinnern.");
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Schau mal, ich habe hier eine Adresse, dort wohne ich angeblich. Weißt du wo das ist?");
                await Template.ƒS.update(0.5);
                Template.ƒS.Sound.play(Template.sound.gunshots, 1, false);
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hide(Template.characters.Alice);
                await Template.ƒS.Character.hide(Template.characters.Alice);
                await Template.ƒS.update(0.1);
                await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.running, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Komm! Folge mir in diese Gasse, die schießen auf uns!!");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Location.show(Template.backgrounds.BG_StraßeFlucht);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Hier wir nehmen die Hintertür!");
                await Template.ƒS.update(0.2);
                return Template.scn_LadenMB();
                break;
        }
    }
    Template.scn_Straße2MB = scn_Straße2MB;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_Straße2clean() {
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Na gut, dann vielleicht später.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "eehh");
        await Template.ƒS.update(1);
        let gehen = {
            Ja: "Ich werde jetzt gehen.",
            No: "Wie heißt du?"
        };
        let Hammerbreakersintus = await Template.ƒS.Menu.getInput(gehen, "choicez");
        console.log(Hammerbreakersintus);
        switch (Hammerbreakersintus) {
            case gehen.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich werde jetzt gehen.");
                await Template.ƒS.update(1);
                return Template.scn_nüchternerTod();
                break;
            case gehen.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Wie heißt du?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Mein Name ist Alice, und deiner?");
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Daran konnte ich mich bis jetzt noch nicht erinnern.");
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Schau mal, ich habe hier eine Adresse, dort wohne ich angeblich. Weißt du wo das ist?");
                await Template.ƒS.update(0.5);
                await Template.ƒS.Sound.play(Template.sound.gunshots, 1, false);
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hide(Template.characters.Alice);
                await Template.ƒS.Character.hide(Template.characters.Alice);
                await Template.ƒS.update(0.1);
                await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.running, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Komm! Folge mir in diese Gasse, die schießen auf uns!!");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Location.show(Template.backgrounds.BG_StraßeFlucht);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Hier wir nehmen die Hintertür!");
                await Template.ƒS.update(0.2);
                return Template.scn_Laden();
                break;
        }
    }
    Template.scn_Straße2clean = scn_Straße2clean;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_beiAlice() {
        await Template.ƒS.update(1.3);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "So hier sind wir, fühl dich ganz wie zu Hause.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Nettes Zimmer hast du hier.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Freut mich sehr, wenn es dir gefällt.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Weißt du... eeh... also... glaubst du an Schicksal?");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "... weil weißt du ich glaube fest daran. Vor allem.. naja vorhin in der Bar..");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Du hast mir das Leben gerettet.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Du hast meines auch gerettet.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Aber.. Das war.. nachdem ich dich ursprünglich.. einfach nur für ein paar Hammerbreakers abziehen wollte.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Aber dann hast du mir leid getan, deswegen hab ich dir einfach ein paar geschenkt.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ehm, aber ich habe ehrlich gesagt nicht die leiseste Ahnung, ob diese Dinger gut für dich sind.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ich bekomme das Zeug auch vom Kartell. Sie erpressen Schutzgeld und nötigen mich dazu, diese Drogen für sie zu verkaufen.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Mich bringen diese Teile schon immer in Fahrt. Der Rausch ist allerdings ziemlich kurz im Vergleich zu anderen Drogen.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Und das nimmst du einfach so hin? Dass sie dich zwingen Drogen zu verkaufen und damit anderen Menschen zu schaden?");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Was habe ich denn für eine andere Wahl?");
        await Template.ƒS.update(2);
        await Template.ƒS.Character.hide(Template.characters.Alice);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.close, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Diese Stadt ist für uns beide wie ein Gefängnis.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ich wollte schon immer weg von hier, habe mich aber nicht getraut. Aber jetzt, wo ich dich habe... Naja.. Ich fühle mich sicher bei dir.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Wollen wir beide nicht zusammen irgendwo anders ein neues Leben starten? Hm? Was sagst du?");
        await Template.ƒS.update(0.4);
        let neuesLebenstarten = {
            Ja: "Okay, let's do it.",
            No: "Ich weiß nicht..."
        };
        let mitAlicedurchbrennen = await Template.ƒS.Menu.getInput(neuesLebenstarten, "choicez");
        console.log(mitAlicedurchbrennen);
        switch (mitAlicedurchbrennen) {
            case neuesLebenstarten.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Mit dir ein neues Leben anfangen?");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Nichts lieber als das.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Awww, du machst mich sehr glücklich damit!");
                await Template.ƒS.update(0.2);
                break;
            case neuesLebenstarten.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich weiß nicht... ich denke es ist besser wenn ich warte, bis meine Erinnerungen zurückkehren.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Alice, "Okay, das kann ich verstehen, aber mich bekommst du trotzdem nicht mehr so schnell vom Hals, Süßer.");
                await Template.ƒS.update(0.2);
                break;
        }
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Kannst du dich mittlerweile an deinen Namen erinnern?");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "...Ja! Mein Name ist....");
        Template.DataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        console.log(Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "d.. ..das.. das muss ein Zufall sein..");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Der Boss des Kartells heißt ebenfalls so...");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "...es ist schon spät, war ein langer Tag. Komm, legen wir uns aufs Ohr.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Sehr gerne...");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.2);
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Könnte es sein, dass ich der Anführer eines Drogenkartells war und die Autovermietung ein Geldwäschebetrieb?");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Oh mein Gott.. auf diesen Schock..");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Sollte ich vielleicht...?");
        await Template.ƒS.update(0.2);
        let aufdenSchock = {
            Ja: "keinen Hammerbreaker schmeißen",
            No: "mich mit nem' Hammerbreaker beruhigen"
        };
        let drittesmindbreaker = await Template.ƒS.Menu.getInput(aufdenSchock, "choicez");
        console.log(drittesmindbreaker);
        switch (drittesmindbreaker) {
            case aufdenSchock.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Das Zeug brauche ich nicht.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.update(0.2);
                return Template.scn_darkroom();
                break;
            case aufdenSchock.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Das wird gut tun.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.update(0.2);
                return Template.scn_MBdarkroom();
                break;
        }
    }
    Template.scn_beiAlice = scn_beiAlice;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_brokenglass() {
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        await Template.ƒS.Sound.fade(Template.sound.Dumm, 0, 1, true);
        await Template.ƒS.Sound.fade(Template.sound.Street, 1, 2, true);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Autovermietung);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Hier sind wir.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Hier war doch bis vor kurzem noch eine Autovermietung.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ja, ich erinnere mich dunkel... Das hier muss meine Autovermietung gewesen sein...");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Da hat sich wohl jemand ganz schön bedient.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Sieht so aus. Vielleicht hat dieser Einbruch etwas mit meinem Gedächtnisverlust zu tun.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Haben Sie dir das nicht alles im Krankenhaus gesagt?");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Nein...");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Kommt mir sehr verdächtig vor...");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Hier standen früher so viele Autos, kaum zu glauben, dass das alles dir gehört hat.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Aber..");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ich habe ein ungutes Gefühl hier. Ich habe das Gefühl als würde man uns beobachten.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Lass uns zu mir gehen, hier bist du doch eh nicht sicher.");
        await Template.ƒS.update(0.4);
        await Template.ƒS.Sound.fade(Template.sound.Street, 0, 1, true);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Okay...");
        await Template.ƒS.update(0.4);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Stunde);
        await Template.ƒS.update(0.4);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.backgrounds.BG_BeiAlice);
        await Template.ƒS.update(0.4);
        return Template.scn_beiAlice();
    }
    Template.scn_brokenglass = scn_brokenglass;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_happyAlice() {
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.Suite, 1, 2, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_HBSturm);
        await Template.ƒS.update(2);
        await Template.ƒS.update(4);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_einJahr);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Straße1);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ich bin froh, dass alles gut gegangen ist. Und jetzt bin nicht nur ich, sondern die ganze Stadt ist wieder clean.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ich liebe dich.");
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_happyAlice = scn_happyAlice;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_happyAliceLondon() {
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.Suite, 1, 2, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_einJahr);
        await Template.ƒS.update(2);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_London);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Jetzt ist schon ein Jahr vergangen und du konntest niemanden finden, der Hammerbreakers verkauft, geschweige denn herstellt.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Aber ich denke das ist besser so. Ich mag es hier in London und ich mag unser Leben. Ich liebe dich.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_happyAliceLondon = scn_happyAliceLondon;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_happySakuraLondon() {
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.zweiterDrill, 1, 2, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(2);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_einJahr);
        await Template.ƒS.update(2);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_London);
        await Template.ƒS.Character.show(Template.characters.Sakura, Template.characters.Sakura.pose.veryhappy, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Jetzt ist schon ein Jahr vergangen und du konntest niemanden finden, der Hammerbreakers verkauft, geschweige denn herstellt.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, "Aber ich denke das ist besser so. Ich mag es hier in London und ich mag unser Leben. Ich liebe dich.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Sakura, Template.DataForSave.nameProtagonist);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_happySakuraLondon = scn_happySakuraLondon;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_keinePolizei() {
        await Template.ƒS.update(1.3);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(3);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.left);
        await Template.ƒS.Character.show(Template.characters.Shuichi, Template.characters.Shuichi.pose.default, Template.ƒS.positions.right);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "In diesem Fall... Darf ich dir meinen Freund vorstellen? Sein Name ist Shuichi.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Hallo, nett dich kennen zu lernen. Ich habe mitbekommen, dass du in Schwierigkeiten steckst.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Wenn dieses Teil da in deiner wulstigen Manteltasche keine Waffe ist, würde ich sagen, du brauchst eine Pistole.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "... nur für den Notfall");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Zufälligerweise, kann ich dir diese Waffe verkaufen. Keine Sorge, bezahlen kannst du ein ander mal.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.hide(Template.characters.Shuichi);
        await Template.ƒS.update(0.01);
        await Template.ƒS.Character.show(Template.characters.Shuichi, Template.characters.Shuichi.pose.weapon, Template.ƒS.positions.right);
        await Template.ƒS.update(0.01);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Bittesehr");
        await Template.ƒS.Character.hide(Template.characters.Shuichi);
        await Template.ƒS.update(0.01);
        await Template.ƒS.Character.show(Template.characters.Shuichi, Template.characters.Shuichi.pose.default, Template.ƒS.positions.right);
        await Template.ƒS.update(0.01);
        Template.ƒS.Inventory.add(Template.inventory.Waffe);
        Template.ƒS.Sound.play(Template.sound.door, 1, false);
        await Template.ƒS.update(1);
        await Template.ƒS.update(0.01);
        await Template.ƒS.Sound.fade(Template.sound.isokschnell, 0, 0.01, true);
        Template.ƒS.Sound.play(Template.sound.gunshots2, 1, false);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        await Template.ƒS.update(0.8);
        await Template.ƒS.update(2.1);
        Template.ƒS.Sound.play(Template.sound.luger, 1, false);
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_BarWeap);
        await Template.ƒS.update(1);
        await Template.ƒS.Sound.fade(Template.sound.Dumm, 1, 1, true);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Wow, wie hast du das gemacht? Ich bin beeindruckt.");
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.left);
        await Template.ƒS.Character.show(Template.characters.Shuichi, Template.characters.Shuichi.pose.default, Template.ƒS.positions.right);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Heidablitz, das war ja mal knapp. Du scheinst ein sehr guter Schütze zu sein. ...Zwei Kopfschüsse und ein Streifschuss.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "... .... .....ja, scheint so. Ich fühle mich schon etwas besser.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Wie war das? Du hast deine Erinnerungen verloren, ja? Wie man schießt weißt du anscheinend noch gut.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Wie dem auch sei, danke, dass du uns vor denen beschützt hast. Aber ihr habt alle gesehen, einer von ihnen konnte entkommen.");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Die Polizei wird bestimmt schon unterwegs sein. Hey, was ist das da?  ..in deiner Manteltasche?");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Was meinst du? Achso, meine Tasche...");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "[Q = Inventar öffnen]");
        await Template.ƒS.update(5);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Ein Radio, interessant. Na dann schalte ihn mal an, vielleicht hören wir es ja, wenn der dritte Täter von der Polizei gefasst wird");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Hör' ruhig ein bisschen Radio und entspann' dich, während ich mich ein bisschen mit Alice unterhalte.");
        await Template.ƒS.update(0.1);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.8);
        await Template.ƒS.update(5);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Alice, dieser Typ bedeuted Ärger, das kann ich riechen.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ach komm schon Shuichi...");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Findest du ihn nicht auch total schnuckelig?");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Er ist... attraktiv, das muss man ihm lassen.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Ja.., ich glaube ich hab mich etwas .....");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Sei einfach vorsichtig.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Sind wir fertig?");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Ja. HEY DUU!!");
        await Template.ƒS.Character.show(Template.characters.Shuichi, Template.characters.Shuichi.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Hey, willst du dich noch eine halbe Minute deinem Radio widmen?");
        await Template.ƒS.update(0.8);
        let Radiowidmen = {
            Ja: "Eine weitere halbe Minute Radio hören",
            No: "Ich bin fertig [Escape drücken]"
        };
        let nochnehalbeminute = await Template.ƒS.Menu.getInput(Radiowidmen, "choicez");
        console.log(nochnehalbeminute);
        switch (nochnehalbeminute) {
            case Radiowidmen.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich höre noch etwas weiter.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Ganz wie du willst.");
                await Template.ƒS.update(0.2);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                await Template.ƒS.update(1);
                return Template.scn_Radio();
                break;
            case Radiowidmen.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich habe genug.");
                await Template.ƒS.update(0.2);
                return Template.scn_zweiteMBchoice();
                break;
        }
    }
    Template.scn_keinePolizei = scn_keinePolizei;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_nüchternerTod() {
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Straßeerwischt);
        await Template.ƒS.update(3);
        await Template.ƒS.Character.show(Template.characters.Gangster, Template.characters.Gangster.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Gangster, "jetzt haben wir ihn");
        await Template.ƒS.Character.show(Template.characters.zweiter_Gangster, Template.characters.zweiter_Gangster.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.zweiter_Gangster, "Hahaha... endlich... Du kleine Ratte!!");
        await Template.ƒS.Character.show(Template.characters.dritter_Gangster, Template.characters.dritter_Gangster.pose.default, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Sound.fade(Template.sound.Street, 0, 0.2, true);
        await Template.ƒS.Speech.tell(Template.characters.dritter_Gangster, "...endlich bist du tod!");
        await Template.ƒS.update(1);
        Template.ƒS.Sound.play(Template.sound.gunshot, 1, false);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Black);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.backgrounds.BG_Ende);
        await Template.ƒS.update(3);
    }
    Template.scn_nüchternerTod = scn_nüchternerTod;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_zweiteMBchoice() {
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Wilde Sache.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Nun gut, freut mich, deine Bekanntschaft gemacht zu haben, mysteriöser Fremder. Pass auf dich auf.");
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Hat mich auch gefreut, danke für die Waffe.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Shuichi, "Vergiss nicht, das war kein Geschenk.");
        await Template.ƒS.Character.hide(Template.characters.Shuichi);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Alice, Template.characters.Alice.pose.default, Template.ƒS.positions.left);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "Hey, sag mir nochmal deine Adresse. Ich kenne mich in der Gegend gut aus und kann dich sicher hinführen.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Hier...");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Alice, "AAh, natürlich weiß ich wo das ist. Ich führe dich hin. Ich gehe schonmal vor und schaue, ob die Luft rein ist.");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Danke.");
        await Template.ƒS.update(0.1);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(2);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "hmm.. woher kommt dieses Verlangen?");
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Ich denke vielleicht......");
        await Template.ƒS.update(2);
        let Mindbreakerzwei = {
            Ja: "Ein Hammerbreaker nehmen.",
            No: "Hammerbreakers nicht nehmen."
        };
        let vielleicht = await Template.ƒS.Menu.getInput(Mindbreakerzwei, "choicez");
        console.log(vielleicht);
        switch (vielleicht) {
            case Mindbreakerzwei.Ja:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Es kann nicht schaden und es schmeckt irgendwie.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Na gut, dann werde ich Alice mal folgen");
                await Template.ƒS.update(0.2);
                return Template.scn_MBbrokenglass();
                break;
            case Mindbreakerzwei.No:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Das Zeug ist Gift.");
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Na gut, dann werde ich Alice mal folgen");
                await Template.ƒS.update(0.2);
                return Template.scn_brokenglass();
                break;
        }
    }
    Template.scn_zweiteMBchoice = scn_zweiteMBchoice;
    ;
})(Template || (Template = {}));
//# sourceMappingURL=Mindbreakers.js.map