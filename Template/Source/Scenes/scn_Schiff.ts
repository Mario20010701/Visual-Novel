namespace Template {
    export async function scn_schiff():ƒS.SceneReturn {
    //await ƒS.Speech.tell("Marie","hi, ich bin Marie");  
    await ƒS.Location.show(backgrounds.BG_AmericanlandingPhil);
    await ƒS.update(1);
    //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.smile, ƒS.positions.bottomcenter);
    //await ƒS.update(1);
    await ƒS.Speech.tell("Playername","mein Flugzeug ist beschädigt");   
    await ƒS.Speech.tell(characters.yamato,"Nun ist wohl der Moment gekommen?");
    await ƒS.Character.show(characters.mother, characters.mother.pose.default, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell("Father","warum bist du zurückgekehrt?");
    await ƒS.Speech.tell(characters.narrator,"Die Amerikaner sind nun hier gelandet.");
    await ƒS.update(1);
    }
}

