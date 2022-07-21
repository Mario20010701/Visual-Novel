declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let DataForSave: {
        nameProtagonist: string;
        score: number;
    };
    let inventory: {
        notiz: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
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
        BG_blitz: {
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
        BG_trad: {
            name: string;
            background: string;
        };
        BG_AmisGefecht: {
            name: string;
            background: string;
        };
        BG_Black: {
            name: string;
            background: string;
        };
        BG_Temple: {
            name: string;
            background: string;
        };
        BG_Generalstab: {
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
        Mutter: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        Vater: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        General_Yamamoto_Isoruku: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        General_Genkimura_Heirato: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        General_Hideki_Tojo: {
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
    let sound: {
        testtt: string;
    };
}
declare namespace Template {
    function scn_flugzeug(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_Tempel(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_Vater1(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_Vater2(): ƒS.SceneReturn;
}
