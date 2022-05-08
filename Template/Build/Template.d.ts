declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let DataForSave: {
        nameProtagonist: string;
        score: number;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    let backgrounds: {
        BG_Baum: {
            name: string;
            background: string;
        };
        BG_Flugzeug: {
            name: string;
            background: string;
        };
        BG_Americanformation: {
            name: string;
            background: string;
        };
        BG_AmericanlandingPhil: {
            name: string;
            background: string;
        };
        BG_JapaneseCapture: {
            name: string;
            background: string;
        };
        BG_Atomic: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
    let characters: {
        narrator: {
            name: string;
        };
        Aisaka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
                smile: string;
                upset: string;
            };
        };
        yamato: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        mother: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
    };
}
declare namespace Template {
    let dialog: {
        flugzeug: {
            T0000: string;
            T0001: string;
            T0002: string;
        };
    };
}
declare namespace Template {
    function scn_flugzeug(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_schiff(): ƒS.SceneReturn;
}
