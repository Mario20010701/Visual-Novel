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
    };
}
declare namespace Template {
    let characters: {
        narrator: {
            name: string;
        };
        aisaka: {
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
