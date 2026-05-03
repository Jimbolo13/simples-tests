const text = document.getElementById("text");
const choices = document.getElementById("choices");

let clues = [];

function showText(message) {
    text.innerText = message;
}

function showChoices(options) {
    choices.innerHTML = "";
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option.text;
        btn.onclick = option.action;
        choices.appendChild(btn);
    });
}

function startGame() {
    showText("Vous êtes appelé au manoir Valmont pour un meurtre...");
    showChoices([
        { text: "Explorer la bibliothèque", action: library },
        { text: "Explorer le jardin", action: garden },
        { text: "Explorer la cave", action: cellar },
        { text: "Accuser", action: accuse }
    ]);
}

function library() {
    if (!clues.includes("letter")) {
        clues.push("letter");
        showText("Vous trouvez une lettre parlant d'héritage.");
    } else {
        showText("Rien de nouveau ici.");
    }
    backToMenu();
}

function garden() {
    if (!clues.includes("footprints")) {
        clues.push("footprints");
        showText("Des empreintes suspectes.");
    } else {
        showText("Le jardin est calme.");
    }
    backToMenu();
}

function cellar() {
    if (!clues.includes("weapon")) {
        clues.push("weapon");
        showText("Une arme ensanglantée !");
    } else {
        showText("Seulement des ombres...");
    }
    backToMenu();
}

function accuse() {
    showText("Qui accusez-vous ?");
    showChoices([
        { text: "Armand", action: () => endGame("Armand") },
        { text: "Céleste", action: () => endGame("Celeste") },
        { text: "Lucien", action: () => endGame("Lucien") }
    ]);
}

function endGame(choice) {
    if (choice === "Armand" && clues.includes("letter")) {
        showText("Bravo ! Armand est coupable.");
    } else {
        showText("Mauvaise accusation...");
    }
    showChoices([
        { text: "Rejouer", action: () => location.reload() }
    ]);
}

function backToMenu() {
    showChoices([
        { text: "Retour", action: startGame }
    ]);
}

startGame();
