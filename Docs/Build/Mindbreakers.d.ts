declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        MB: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let DataForSave: {
        nameProtagonist: string;
        score: number;
    };
    let inventory: {
        radio: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        Hammerbreakers: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        Waffe: {
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
        BG_KH: {
            name: string;
            background: string;
        };
        BG_Autovermietung: {
            name: string;
            background: string;
        };
        BG_Bar: {
            name: string;
            background: string;
        };
        BG_BarWeap: {
            name: string;
            background: string;
        };
        BG_BarMB: {
            name: string;
            background: string;
        };
        BG_Menü: {
            name: string;
            background: string;
        };
        BG_Ende: {
            name: string;
            background: string;
        };
        BG_Jahre: {
            name: string;
            background: string;
        };
        BG_einigeStunden: {
            name: string;
            background: string;
        };
        BG_Stunde: {
            name: string;
            background: string;
        };
        BG_BeiAlice: {
            name: string;
            background: string;
        };
        BG_Cagedown: {
            name: string;
            background: string;
        };
        BG_Darkroom: {
            name: string;
            background: string;
        };
        BG_Gefängnis: {
            name: string;
            background: string;
        };
        BG_GFinCage: {
            name: string;
            background: string;
        };
        BG_Black: {
            name: string;
            background: string;
        };
        BG_Hotelroom: {
            name: string;
            background: string;
        };
        BG_London: {
            name: string;
            background: string;
        };
        BG_MBAutovermietung: {
            name: string;
            background: string;
        };
        BG_MBCagedown: {
            name: string;
            background: string;
        };
        BG_MBDarkroom: {
            name: string;
            background: string;
        };
        BG_MBGFinCage: {
            name: string;
            background: string;
        };
        BG_MBStraße: {
            name: string;
            background: string;
        };
        BG_SEK: {
            name: string;
            background: string;
        };
        BG_Straße1: {
            name: string;
            background: string;
        };
        BG_Straßeerwischt: {
            name: string;
            background: string;
        };
        BG_StraßeFlucht: {
            name: string;
            background: string;
        };
        BG_einJahr: {
            name: string;
            background: string;
        };
        BG_HBSturm: {
            name: string;
            background: string;
        };
        BG_SakuraTod: {
            name: string;
            background: string;
        };
        BG_AliceTod: {
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
        Mädchen_im_Käfig: {
            name: string;
        };
        Gangster: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        zweiter_Gangster: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        dritter_Gangster: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        Shuichi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
                weapon: string;
            };
        };
        Sakura: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
                free: string;
                dylwys: string;
                happy: string;
                sad: string;
                veryhappy: string;
            };
        };
        Alice: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
                mb: string;
                dylwys: string;
                close: string;
                running: string;
            };
        };
        Doktor: {
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
        HBsoundtrack: string;
        Technosoundtrack: string;
        Drillpianos: string;
        isokschnell: string;
        Dumm: string;
        groovy: string;
        SchwarzesLoch: string;
        Trapflow: string;
        zweiterDrill: string;
        Suite: string;
        gunshots: string;
        gunshot: string;
        gunshots2: string;
        Street: string;
        Drone: string;
        tel: string;
        luger: string;
        luger1: string;
        door: string;
        cagedrop: string;
        cageopen: string;
    };
}
declare namespace Template {
    function scn_2GFs(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_AliceTod(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_BreakerTod(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_darkroom(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_GF(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_Jail(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_JailhappySakura(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_Krankenhaus(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_Laden(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_LadenMB(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_MBdarkroom(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_MBGF(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_MBbrokenglass(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_Polizei(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_Radio(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_SakuraTod(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_Straße2MB(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_Straße2clean(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_beiAlice(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_brokenglass(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_happyAlice(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_happyAliceLondon(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_happySakuraLondon(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_keinePolizei(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_nüchternerTod(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_zweiteMBchoice(): ƒS.SceneReturn;
}
