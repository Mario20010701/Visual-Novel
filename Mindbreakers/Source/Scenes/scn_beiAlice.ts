namespace Template {
    export async function scn_beiAlice(): ƒS.SceneReturn {
        await ƒS.update(1.3);
        await ƒS.Character.show(characters.Alice, characters.Alice.pose.default, ƒS.positions.bottomcenter)
        await ƒS.Speech.tell(characters.Alice, "So hier sind wir, fühl dich ganz wie zu Hause.");
        await ƒS.update(0.4);
        await ƒS.Speech.tell(characters.narrator, "Nettes Zimmer hast du hier.");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Alice, "Freut mich sehr, wenn es dir gefällt.");
        await ƒS.update(0.4);
        await ƒS.Speech.tell(characters.Alice, "Weißt du... eeh... also... glaubst du an Schicksal?");
        await ƒS.update(0.4);
        await ƒS.Speech.tell(characters.Alice, "... weil weißt du ich glaube fest daran. Vor allem.. naja vorhin in der Bar..");
        await ƒS.update(0.4);
        await ƒS.Speech.tell(characters.Alice, "Du hast mir das Leben gerettet.");
        await ƒS.update(0.4);
        await ƒS.Speech.tell(characters.narrator, "Du hast meines auch gerettet.");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Alice, "Aber.. Das war.. nachdem ich dich ursprünglich.. einfach nur für ein paar Hammerbreakers abziehen wollte.");
        await ƒS.update(0.4);
        await ƒS.Speech.tell(characters.Alice, "Aber dann hast du mir leid getan, deswegen hab ich dir einfach ein paar geschenkt.");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Alice, "Ehm, aber ich habe ehrlich gesagt nicht die leiseste Ahnung, ob diese Dinger gut für dich sind.");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Alice, "Ich bekomme das Zeug auch vom Kartell. Sie erpressen Schutzgeld und nötigen mich dazu, diese Drogen für sie zu verkaufen.");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Alice, "Mich bringen diese Teile schon immer in Fahrt. Der Rausch ist allerdings ziemlich kurz im Vergleich zu anderen Drogen.");
        await ƒS.update(0.4);
        await ƒS.Speech.tell(characters.narrator, "Und das nimmst du einfach so hin? Dass sie dich zwingen Drogen zu verkaufen und damit anderen Menschen zu schaden?");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Alice, "Was habe ich denn für eine andere Wahl?");
        await ƒS.update(2);
        await ƒS.Character.hide(characters.Alice);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Alice, characters.Alice.pose.close, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Alice, "Diese Stadt ist für uns beide wie ein Gefängnis.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Alice, "Ich wollte schon immer weg von hier, habe mich aber nicht getraut. Aber jetzt, wo ich dich habe... Naja.. Ich fühle mich sicher bei dir.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Alice, "Wollen wir beide nicht zusammen irgendwo anders ein neues Leben starten? Hm? Was sagst du?");
        await ƒS.update(0.4);
        let neuesLebenstarten = {
            Ja: "Okay, let's do it.",
            No: "Ich weiß nicht..."
        };
        let mitAlicedurchbrennen = await ƒS.Menu.getInput(neuesLebenstarten, "choicez");
        console.log(mitAlicedurchbrennen);
        switch (mitAlicedurchbrennen) {
            case neuesLebenstarten.Ja:
                await ƒS.Speech.tell(characters.narrator, "Mit dir ein neues Leben anfangen?");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.narrator, "Nichts lieber als das.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Alice, "Awww, du machst mich sehr glücklich damit!");
                await ƒS.update(0.2);
                break;
            case neuesLebenstarten.No:
                await ƒS.Speech.tell(characters.narrator, "Ich weiß nicht... ich denke es ist besser wenn ich warte, bis meine Erinnerungen zurückkehren.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Alice, "Okay, das kann ich verstehen, aber mich bekommst du trotzdem nicht mehr so schnell vom Hals, Süßer.");
                await ƒS.update(0.2);
                break;
        }

        await ƒS.update(0.4);
        await ƒS.Speech.tell(characters.Alice, "Kannst du dich mittlerweile an deinen Namen erinnern?");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.narrator, "...Ja! Mein Name ist....");
        DataForSave.nameProtagonist = await ƒS.Speech.getInput();
        console.log(DataForSave.nameProtagonist);
        await ƒS.update(0.4);
        await ƒS.Speech.tell(characters.Alice, DataForSave.nameProtagonist);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Alice, "d.. ..das.. das muss ein Zufall sein..");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Alice, DataForSave.nameProtagonist);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Alice, "Der Boss des Kartells heißt ebenfalls so...");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Alice, "...es ist schon spät, war ein langer Tag. Komm, legen wir uns aufs Ohr.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Alice, DataForSave.nameProtagonist);
        await ƒS.update(0.2);
        await ƒS.Location.show(backgrounds.BG_Black)
        await ƒS.Character.hideAll();
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.narrator, "Sehr gerne...");
        await ƒS.update(0.2);
        await ƒS.Speech.hide();
        await ƒS.update(0.2);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.narrator, "Könnte es sein, dass ich der Anführer eines Drogenkartells war und die Autovermietung ein Geldwäschebetrieb?");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.narrator, "Oh mein Gott.. auf diesen Schock..");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.narrator, "Sollte ich vielleicht...?");
        await ƒS.update(0.2);
        let aufdenSchock = {
            Ja: "keinen Hammerbreaker schmeißen",
            No: "mich mit nem' Hammerbreaker beruhigen"
        };
        let drittesmindbreaker = await ƒS.Menu.getInput(aufdenSchock, "choicez");
        console.log(drittesmindbreaker);
        switch (drittesmindbreaker) {
            case aufdenSchock.Ja:
                await ƒS.Speech.tell(characters.narrator, "Das Zeug brauche ich nicht.");
                await ƒS.update(0.2);
                await ƒS.Speech.hide();
                await ƒS.update(0.2);
                return scn_darkroom();
                break;
            case aufdenSchock.No:
                await ƒS.Speech.tell(characters.narrator, "Das wird gut tun.");
                await ƒS.update(0.2);
                await ƒS.Speech.hide();
                await ƒS.update(0.2);
                return scn_MBdarkroom();
                break;
        }
    };
}