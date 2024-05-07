let title = document.getElementById('title');
let inputField = document.getElementById('userInput');

function checkOre() {
    let input = inputField.value;
    let formattedInput;

    if (input) {
        formattedInput = input.trim().toUpperCase();
        let defaultYesMessage = input + " is indeed highlighted.";

        switch (formattedInput) {
            case "MK2 SONAR":
            case "VOYANESIA":
            case "THRONE":
            case "POLTERGEIST":
            case "EYE OF THE SIREN":
            case "PHOTONIUS FLUXULIUM":
            case "RUNESTONE":
            case "HELIOSTRA":
            case "YVELDOLORITE":
            case "CYGNUS":
            case "CYGNUS OBS":
            case "CYGNUS OB2":
            case "CYGNUS OB2-12":
            case "CYGNUS OBS-12":
            case "CHECKPOINT0901":
            case "PRISMATICA":
            case "SWORD WALTZ":
            case "ASTRAEA":
            case "MENDELEVIUM":
            case "QUANTALYX":
            case "QUANTALYX REVAMP":
            case "VICITUS":
            case "VIRTULILY":
            case "HYPERFULLERENE":
            case "JACKPOT":
            case "INFERNUS FLAMMEA":
            case "EMPRESS OF LIGHT":
            case "ALYSODEMENOS":
            case "ALYSODEMENOS REVAMP":
            case "NAUTICALIS":
            case "HADOPELAGIC ARTIFACT":
            case "TECHRILYX":
            case "FINALITIUM":
            case "SOLFLURINIER":
            case "AESTHETIC REALITY":
            case "SOULSHADE":
            case "VIRTUOSITY":
            case "VIRTUOSITY REVAMP":
            case "PRINTORBS":
            case "CUBLEXRTIYE":
            case "OBSERVATORIUM":
            case "SOUVENIR OF SURVEILLANCE":
            case "UNNAMED FIRE TORNADO":
            case "DELTA COMPLEX":
            case "WILLHEIM":
            case "CHAOTICA":
            case "ASTRAL ANOMALY":
            case "SAKURIA":
            case "SHADOWSPEC":
            case "GLITCHY RELOADING ORE":
            case "WHATEVER THIS THING IS":
            case "HOLOVIRLUX":
            case "TEMPESTOR":
            case "ALCHEMORA":
            case "JADEFALL":
            case "ECTOPLASMADO":
            case "PHLEGETHONIC SCORIA":
            case "CELESTIVAL":
            case "ALBUCA SPIRALIS":
            case "PSI":
            case "Ψ":
            case "ψ":
            case "GRADIENCE":
            case "EXOPOLIS":
            case "CANIVESIUM":
            case "ASSAILANT":
            case "STAR WRATH":
            case "STARWRATH":
            case "VERDIBLORA":
            case "BLACK PEARL":
                title.innerHTML = defaultYesMessage;
                break;
            case "KILLBOT CRYSTAL":
                title.innerHTML = "Killbot crystal does not exist and will never be added. Rocc is only for legacy ores.";
                break;
            case "A FLARE V2":
                title.innerHTML = "Dark... what are you doing..."
                break;
            case "RADIATIVE QUASAR":
                title.innerHTML = "Uh, yeah, sadly."
                break;
            case "CAELARIUS REVAMP":
                title.innerHTML = "If anything, that ore was UN-highlighted..."
                break;
            default:
                title.innerHTML = "This ore is not currently highlighted.";
                break;
        }
    }
}
