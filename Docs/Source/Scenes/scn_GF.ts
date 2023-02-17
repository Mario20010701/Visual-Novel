namespace Template {
    export async function scn_GF(): ƒS.SceneReturn {
        ƒS.Speech.hide();
        ƒS.Character.hideAll();
        await ƒS.update(0.1);
        await ƒS.Location.show(backgrounds.BG_GFinCage);
        await ƒS.update(0.3);
        await ƒS.Speech.tell(characters.Mädchen_im_Käfig, DataForSave.nameProtagonist);
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Mädchen_im_Käfig, "!!!!!!!!");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Mädchen_im_Käfig, "Oh Gott, ich bin so froh! Du bist am Leben!!!");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.narrator, "Kennen wir uns? Wer bist du?");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Mädchen_im_Käfig, "Ich bin deine Freundin, Sakura! Mach keine Scherze und befreie mich aus diesem Käfig!");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.narrator, "Ehh");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.narrator, "Natürlich.. sofort.");
        await ƒS.update(0.1);
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(0.1);
        ƒS.Sound.play(sound.cagedrop, 1, false);
        ƒS.Sound.play(sound.cageopen, 1, false);
        await ƒS.Location.show(backgrounds.BG_Cagedown);
        await ƒS.update(0.1);
        await ƒS.Character.show(characters.Sakura, characters.Sakura.pose.free, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Sakura, DataForSave.nameProtagonist);
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Sakura, "Ich bin soo froh dich zu sehen.");
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.narrator, "Hast du dein Gedächtnis verloren? Erinnerst du dich an mich Baby?");
        await ƒS.update(0.1);
        await ƒS.Character.show(characters.Alice, characters.Alice.pose.default, ƒS.positions.left);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Alice, "F.. Fr... Freundin? Nein daran kann er sich nicht erinnern, stimmt doch oder?");
        await ƒS.update(0.1);
        let erinnern = {
            Ja: "Ich erinnere mich.",
            No: "Ich erinnere mich nicht."
        };
        let gfgf = await ƒS.Menu.getInput(erinnern, "choicez");
        console.log(gfgf);
        switch (gfgf) {
            case erinnern.Ja:
                await ƒS.Speech.tell(characters.narrator, "Ja...! Doch, natürlich erinnere ich mich an dich Sakura, mein Schatz. Geht es dir gut?");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Alice, "Phh....Ich warte mal da drüben..");
                await ƒS.update(0.2);
                await ƒS.Character.hide(characters.Alice);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Mir geht es bestens, solange du dich erinnerst. Der Doktor hat dir das angetan, richtig?");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.narrator, "Wer ist dieser Mann wirklich?");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Alle nennen ihn den Doktor. Über ihn ist nicht viel bekannt. Er tauchte auf, wie aus dem nichts... mit seinen.. Hammerbreakers.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, DataForSave.nameProtagonist);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Er kam dir bei deinen Geschäften in die Quere und vergiftete die Jugend mit diesen gefährlichen Drogen, die dir ein Dorn im Auge waren.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Nachdem du ihn deswegen verwarnt hattest, überfiel er mit seinen Männern vor ein paar Tagen die Autovermietung und gab dir eine Überdosis von dieser Droge.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Mich hat er entführt und seitdem war ich in diesem Käfig gefangen. Ich danke dir für deine Rettung.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Alice, DataForSave.nameProtagonist);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Alice, "...Was wirst du jetzt tun?");
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.groovy, 0, 2, true);
                let Rache = {
                    Ja: "Rache nehmen.",
                    No: "Zur Polizei gehen."
                };
                let Raache = await ƒS.Menu.getInput(Rache, "choicez");
                console.log(Raache);
                switch (Raache) {
                    case Rache.Ja:
                        await ƒS.Speech.tell(characters.narrator, "Ich werde mich an den Leuten rächen, die mir das alles angetan haben. Meine schlimmsten Feinde sind diejenigen, die diese Hammerbreakers herstellen.");
                        await ƒS.update(0.2);
                        await ƒS.Speech.tell(characters.Sakura, "Aber wer glaubst du, könnte das sein?");
                        await ƒS.update(0.2);
                        let Wer = {
                            Ja: "London.",
                            No: "Hammerbreaker.Records."
                        };
                        let Was = await ƒS.Menu.getInput(Wer, "choicez");
                        console.log(Was);
                        switch (Was) {
                            case Wer.Ja:
                                await ƒS.Speech.tell(characters.narrator, "Ich denke, in London wird diese Droge hergestellt. Also werde ich nach London gehen und mich dort auf die Suche nach den Herstellern machen.");
                                await ƒS.update(0.2);
                                return scn_happySakuraLondon();
                                break;
                            case Wer.No:
                                await ƒS.Speech.tell(characters.narrator, "Für mich ist es ziemlich offensichtlich, dass Hammerbreaker Records die Droge bewerben und ziemlich sicher auch im Vertrieb bzw. der Herstellung ihre Finger im Spiel haben.");
                                await ƒS.update(0.2);
                                await ƒS.Speech.tell(characters.narrator, "Sakura, ruf meine Männer zusammen. Wir stürmen Hammerbreaker Records.");
                                await ƒS.update(0.2);
                                return scn_2GFs();
                                break;
                        }


                        break;
                    case Rache.No:
                        await ƒS.Speech.tell(characters.narrator, "Ich verspüre nicht das Bedürfnis Rache zu nehmen.");
                        await ƒS.update(0.2);
                        await ƒS.Speech.tell(characters.narrator, "Ich werde mich der Polizei stellen und ihnen dabei helfen den Drogenhandel einzudämmen.");
                        await ƒS.update(0.2);
                        return scn_JailhappySakura();
                        break;
                }







                ƒS.Character.hideAll();
                ƒS.Speech.hide();
                await ƒS.update(1);
                return scn_Radio();
                break;
            case erinnern.No:
                await ƒS.Speech.tell(characters.narrator, "Tut mir leid, ich kann mich nicht an dich erinnern.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Waas? Das ist schrecklich. Wir sind bereits zwei Jahre zusammen...");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.narrator, "Es tut mir sehr leid... vielleicht kommen meine Erinnerungen ja wieder zurück... Wenn du wirklich meine Freundin warst, kannst du mir sagen, wer ich bin?");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, DataForSave.nameProtagonist);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Du bist der gutherzigste, liebste Mensch der Welt und gleichzeitig der Führer unseres Kartells. Wir handeln nur mit Marihuana.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.narrator, "Wer war dieser komische Mann mit der Brille wirklich?");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Alle nennen ihn den Doktor. Über ihn ist nicht viel bekannt. Er tauchte auf, wie aus dem nichts... mit seinen.. Hammerbreakers.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, DataForSave.nameProtagonist);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Er kam dir bei deinen Geschäften in die Quere und vergiftete die Jugend mit diesen gefährlichen Drogen, die dir ein Dorn im Auge waren.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Nachdem du ihn deswegen verwarnt hattest, überfiel er mit seinen Männern vor ein paar Tagen die Autovermietung und gab dir eine Überdosis von dieser Droge.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Sakura, "Mich hat er entführt und seitdem war ich in diesem Käfig gefangen. Ich danke dir für deine Rettung.");
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Alice, DataForSave.nameProtagonist);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Alice, "...Was wirst du jetzt tun?");
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.groovy, 0, 2, true);
                let Racheohneerinnerungen = {
                    Ja: "Rache nehmen.",
                    No: "Zur Polizei gehen."
                };
                let Raaache = await ƒS.Menu.getInput(Racheohneerinnerungen, "choicez");
                console.log(Raaache);
                switch (Raaache) {
                    case Racheohneerinnerungen.Ja:
                        await ƒS.Speech.tell(characters.narrator, "Ich werde mich an den Leuten rächen, die mir das alles angetan haben. Meine schlimmsten Feinde sind diejenigen, die diese Hammerbreakers herstellen.");
                        await ƒS.update(0.2);
                        await ƒS.Speech.tell(characters.Sakura, "Aber wer glaubst du, könnte das sein?");
                        await ƒS.update(0.2);
                        let Wer = {
                            Ja: "London.",
                            No: "Hammerbreaker Records."
                        };
                        let Was = await ƒS.Menu.getInput(Wer, "choicez");
                        console.log(Was);
                        switch (Was) {
                            case Wer.Ja:
                                await ƒS.Speech.tell(characters.narrator, "Ich denke, in London wird diese Droge hergestellt. Also werde ich nach London gehen und mich dort auf die Suche nach den Herstellern machen.");
                                await ƒS.update(0.2);
                                return scn_happyAliceLondon();
                                break;
                            case Wer.No:
                                await ƒS.Speech.tell(characters.narrator, "Für mich ist es ziemlich offensichtlich, dass Hammerbreaker Records die Droge bewerben und ziemlich sicher auch im Vertrieb bzw. in der Herstellung ihre Finger im Spiel haben.");
                                await ƒS.update(0.2);
                                await ƒS.Speech.tell(characters.narrator, "Sakura, ruf meine Männer zusammen wir stürmen Hammerbreakers Records.");
                                await ƒS.update(0.2);
                                return scn_happyAlice();
                                break;
                        };


                        break;
                    case Racheohneerinnerungen.No:
                        await ƒS.Speech.tell(characters.narrator, "Ich verspüre nicht das Bedürfnis Rache zu nehmen.");
                        await ƒS.update(0.2);
                        await ƒS.Speech.tell(characters.narrator, "Ich werde mich der Polizei stellen und ihnen dabei helfen den Drogenhandel einzudämmen.");
                        await ƒS.update(0.2);
                        return scn_Jail();
                        break;
                };


                break;
        };

    };
}