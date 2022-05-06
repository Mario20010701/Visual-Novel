namespace Template {
    export async function scn_flugzeug():ƒS.SceneReturn {
        await ƒS.Location.show(backgrounds.BG_Flugzeug);
        await ƒS.update(1);
        await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.smile, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell("Marie","hi, ich bin Marie");   
        await ƒS.Speech.tell(characters.yamato,"hii, Marie, wie gehts?");
        await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.upset, ƒS.positions.bottomcenter);
        await ƒS.Location.show(backgrounds.BG_Baum);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.yamato,dialog.flugzeug.T0002);
        return scn_flugzeug();

    }
}



