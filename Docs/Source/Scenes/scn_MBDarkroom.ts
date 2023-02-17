namespace Template {
    export async function scn_MBdarkroom(): ƒS.SceneReturn {
        await ƒS.Location.show(backgrounds.BG_einigeStunden);
        await ƒS.update(1.3);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(1.3);
        await ƒS.Sound.fade(sound.Drone, 1, 3)
        await ƒS.Location.show(backgrounds.BG_MBDarkroom);
        await ƒS.update(4);
        await ƒS.Character.show(characters.Doktor, characters.Doktor.pose.default, ƒS.positions.bottomcenter)
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.Doktor, "Sie sind ja wach, sehr schön.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Ich denke Sie werden einige Fragen haben und ich bin bereit jede einzelne zu beantworten.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Können Sie sich schon daran erinnern wer ich eigentlich bin?");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.narrator, "Nein.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Ich war ihr Anwalt... für fünf lange Jahre.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Fünf Jahre lang, habe ich Sie in ihren kriminellen Tätigkeiten beraten und verteidigt.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Als die neue Droge Hammerbreakers auf den Markt kam, infizierten Sie und ihr Kartell die ganze Stadt mit diesem Gift.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Dann haben Sie angefangen, die Droge selbest zu konsumieren und wurden, wie die allermeisten Menschen, danach süchtig.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Weil ihre Profite so hoch waren, dass Sie in ihrem Geld baden konnten, bestellten Sie immer mehr von diesen Drogen.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Und als ich, ihr Anwalt, das alles nicht mehr ertragen konnte und aussteigen wollte, haben Sie mich mit meiner Familie erpresst.");
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.Doktor, "Schließlich haben Sie meine Tochter... vor meinen eigenen Augen umbringen lassen.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Nehmen Sie es mir nicht übel..");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, DataForSave.nameProtagonist);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "..aber ich musste Sie irgendwie stoppen, also gab ich ihnen eine speziell dosierte Menge, ihrer eigenen Droge, die Sie nicht hätte töten können..");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "..Das tat ich um ihnen ein Reset zu verpassen. Mein Plan war es eigentlich, dass Sie restlos ihre Erinnerungen verlieren und irgendwo ein neues Leben beginnen.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Wissen Sie.. diese Drogen... und das ganze Geld haben Sie zerstört.. Sie waren früher mal ein guter Mensch...");
        await ƒS.Speech.tell(characters.Doktor, DataForSave.nameProtagonist);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Deswegen will ich ihnen nichts böses. Sehen Sie, wir haben Sie nicht gefesselt und ihrer Freundin, Alice,.. ihr geht es auch gut.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.narrator, "Wo ist Sie?");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Sie ist im Nebenraum und wird dort von meinem Bruder ärztlich versorgt. Mein Bruder ist tatsächlich Arzt, keine Sorge.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.narrator, "Ärztlich versorgt? Wieso?");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Sie hat eine Überdosis Hammerbreakers erwischt.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Als meine Leute euch beide heute Nacht aufgesucht haben, stand zum Glück die Tür offen, denn Alice war kurz davor an ihrem Erbrochenen zu ersticken.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Trotzdem entschuldige ich mich dafür, dass euch meine Leute gestern Abend beobachtet haben. Ich wollte Ihnen Zeit geben, ihre Erinnerungen zu sammeln, bevor ich Ihnen alles erkläre.");
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Doktor, "Sie sollten mir also dankbar sein.");
        await ƒS.update(0.2);


        let demDoktorglauben = {
            Ja: "Ich glaube ihnen.",
            No: "Ich glaube kein Wort/Pistole ziehen."
        };
        let dok = await ƒS.Menu.getInput(demDoktorglauben, "choicez");
        console.log(dok);
        switch (dok) {
            case demDoktorglauben.Ja:
                await ƒS.Speech.tell(characters.narrator, "Ich glaube ihnen.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Doktor, "Gut, Sie erinnern sich. Aber Sie zittern und sind ganz bleich...");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Doktor, "Das sind die Nebenwirkungen der Hammerbreaker...");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Doktor, "Ich gebe ihnen eine Beruhigungsspritze, die Ihnen wieder zu klarem Geist verhelfen wird.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.narrator, "Okay...");
                await ƒS.update(0.2);
                ƒS.Speech.hide();
                await ƒS.update(0.2);
                await ƒS.Location.show(backgrounds.BG_Black);
                await ƒS.update(2);
                await ƒS.Speech.tell(characters.Doktor, "Dann bitte einmal still halten.");
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.Drone, 2.4, 3);
                ƒS.Sound.fade(sound.Drone, 0, 0.01);
                ƒS.Character.hideAll();
                ƒS.Speech.hide();
                await ƒS.update(3);
                await ƒS.Location.show(backgrounds.BG_Ende);
                await ƒS.update(3);
                break;
            case demDoktorglauben.No:
                await ƒS.Sound.fade(sound.Drone, 0, 0.5);
                await ƒS.Speech.tell(characters.narrator, "Wenn Sie mich schon kidnappen, dann durchsuchen Sie mich gefälligst auch richtig!");
                await ƒS.update(0.1);
                ƒS.Speech.hide();
                ƒS.Sound.play(sound.luger1, 1, false);
                await ƒS.update(0.01);
                ƒS.Character.hideAll();
                await ƒS.update(0.01);
                await ƒS.update(2);
                await ƒS.Sound.fade(sound.Drone, 0.5, 2);
                await ƒS.Speech.tell(characters.narrator, "Alice!!! Wo bist du?");
                await ƒS.update(0.2);
                ƒS.Sound.play(sound.door, 1, false);
                await ƒS.Character.show(characters.Gangster, characters.Gangster.pose.default, ƒS.positions.bottomcenter);
                await ƒS.update(0.1);
                ƒS.Sound.play(sound.luger1, 1, false);
                await ƒS.update(0.2);
                await ƒS.Character.hide(characters.Gangster);
                await ƒS.update(0.2);
                await ƒS.update(1);
                await ƒS.Sound.fade(sound.groovy, 1, 1, true);
                await ƒS.Sound.fade(sound.Drone, 0, 1);
                await ƒS.Character.show(characters.Alice, characters.Alice.pose.default, ƒS.positions.bottomcenter);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Alice, DataForSave.nameProtagonist);
                await ƒS.update(0.1);
                await ƒS.Speech.tell(characters.Alice, "..ich bin so froh dich zu sehen.");
                await ƒS.update(0.1);
                await ƒS.Speech.tell(characters.Alice, "Dieser Gangster hat mich im Nebenraum festgehalten. Da war noch ein Mädchen, das von der Decke hing.");
                await ƒS.update(0.1);
                await ƒS.Speech.tell(characters.narrator, "Wie meinst du das?");
                await ƒS.update(0.1);
                await ƒS.Speech.tell(characters.Alice, "Komm mit.");
                await ƒS.update(0.1);
                return scn_MBGF();
                break;
        }

    };
}