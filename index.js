const parts = [
    document.getElementById("ground"),
    document.getElementById("scaffold"),
    document.getElementById("body"),
    document.getElementById("arms"),
    document.getElementById("legs"),
    document.getElementById("head"),
];
const usedLettersElem = document.getElementById("usedLetters");
const lettersCont = document.getElementById("letters");
const msg1Elem = document.getElementById("message1");
const msg2Elem = document.getElementById("message2");

let sw = "x";
let trials = [];
let fails = 0;
function startGame() {
    sw = words[Math.floor(Math.random() * words.length)].toLocaleUpperCase();
    console.log(sw);
    trials.splice(0);
    fails = 0;
    parts.forEach(p => (p.style.opacity = 0));
    usedLettersElem.innerText = "";
    msg1Elem.innerText = "Nytt spel";
    msg2Elem.innerText = "Gissa bokstav - tryck på tangent";

    lettersCont.replaceChildren();
    sw.split("").forEach(letter => {
        lettersCont.insertAdjacentHTML("beforeend", '<div class="letter"></div>');
    });
}
function showLetter(letter) {
    for (let i = 0; i < sw.length; i++) {
        if (sw.charAt(i) === letter) {
            lettersCont.children.item(i).innerText = letter;
        }
    }
}
function isDone() {
    for (let i = 0; i < sw.length; i++) {
        if (!trials.includes(sw.charAt(i))) return false;
    }
    return true;
}
function newCandidateLetter(letter) {
    if (trials.includes(letter)) {
        msg1Elem.innerText = "Du har redan provat " + letter;
        return;
    }
    trials.push(letter);

    if (sw.includes(letter)) {
        showLetter(letter);
        if (isDone()) {
            msg1Elem.innerText = "Rätt ord! Bra jobbat";
        } else {
            msg1Elem.innerText = "Rätt bokstav!";
        }
    } else {
        parts[fails++].style.opacity = 1;
        if (fails >= parts.length) {
            msg1Elem.innerText = "Nu gick det dåligt";
        } else {
            msg1Elem.innerText = "Fel bokstav!";
        }
    }

    usedLettersElem.innerText = trials.join(" ");
}

// let partIx = 0;
// let timer = setInterval(() => {
//     parts[partIx].style.opacity = 0;
//     console.log("Part " + partIx);

//     if (++partIx === parts.length) {
//         clearInterval(timer);

//         timer = setInterval(() => {
//             parts[--partIx].style.opacity = 1;
//             console.log("Part " + partIx);

//             if (partIx === 0) {
//                 clearInterval(timer);
//             }
//         }, 2000);
//     }
// }, 2000);

document.body.addEventListener("keyup", e => {
    if (fails >= parts.length || isDone()) {
        startGame();
    } else if (e.key.length === 1 && e.key.match(/[a-zåäö]/i)) {
        newCandidateLetter(e.key.toLocaleUpperCase());
    }
});

var words = [
    "Impertinent",
    "Hegemoni",
    "Verserad",
    "Kompilera",
    "Cinematek",
    "Renegat",
    "Karessera",
    "Extemporera",
    "Transversal",
    "Epistemologi",
    "Apologi",
    "Juvenil",
    "Flegmatisk",
    "Preciös",
    "Anomali",
    "Elyseisk",
    "Perplex",
    "Truism",
    "Panegyrik",
    "Fatigera",
    "Amsaga",
    "Blamage",
    "Paternalism",
    "Notabilitet",
    "Afasi",
    "Marodera",
    "Arrivist",
    "Transkribera",
    "Bondfångare",
    "Didaktisk",
    "Konsonans",
    "Synopsis",
    "Exeges",
    "Krumpen",
    "Digression",
    "Facil",
    "Ballistik",
    "Altererad",
    "Efemär",
    "Proveniens",
    "Olåt",
    "Apanage",
    "Tendentiös",
    "Flagrant",
    "Sangvinisk",
    "Endräkt",
    "Menageri",
    "Ominös",
    "Redundans",
    "Palaver",
    "Eutanasi",
    "Boren",
    "Förskansa",
    "Internalisera",
    "Defaitism",
    "Bivack",
    "Aviarium",
    "Intermittent",
    "Misoneism",
    "Dikotomi",
    "Epigon",
    "Interfoliera",
    "Polyandri",
    "Lapidarisk",
    "Topografi",
    "Mesallians",
    "Bigott",
    "Opalescens",
    "Usurpator",
    "Origo",
    "Meritokrati",
    "Eldfängd",
    "Antonym",
    "Koaffyr",
    "Kalamitet",
    "Kohort",
    "Akronym",
    "Stipulation",
    "Profylax",
    "Statuarisk",
    "Animositet",
    "Trilemma",
    "Anapest",
    "Braskande",
    "Käril",
    "Providens",
    "Antipod",
    "Ominös",
    "Episkopal",
    "Gravitetisk",
    "Intrinsikalt",
    "Moratorium",
    "Egalitär",
    "Blasfemi",
    "Stagflation",
    "Pensum",
    "Eon",
    "Fallissemang",
    "Nekrofag",
    "Citadell",
    "Exogami",
    "Konkav",
    "Daler",
    "Koherens",
    "Diskrepans",
    "Opulent",
    "Epålett",
    "Desideratum",
    "Jökel",
    "Depreciera",
    "Konkordans",
    "Nullitet",
    "Perenn",
    "Exogen",
    "Rekursiv",
    "Haiku",
    "Kithara",
    "Äril",
];

startGame();
