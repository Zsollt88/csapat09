//01 Feladat
function DiakInfo(nev, csoport, tipus) {
    var azonosito = '';
    if (tipus == true) {
        azonosito = 'Junior Frontend';
    }
    else {
        azonosito = 'Webprogramozó';
    }
    return nev + ' Team 0' + csoport + ' ' + azonosito;
}
document.write(DiakInfo('Minta Márton', 8, true));
//02 Feladat
function SzovegesErtekeles(jegy) {
    var ertekeles = ['', ''];
    if (jegy == 5) {
        ertekeles = ['Példás', 'Példás'];
    }
    else if (jegy == 4) {
        ertekeles = ['Jó', 'Jó'];
    }
    else if (jegy == 3) {
        ertekeles = ['Változó', 'Változó'];
    }
    else {
        ertekeles = ['Hanyag', 'Rossz'];
    }
    return [ertekeles[0], ertekeles[1]];
}
document.write('<br>' + SzovegesErtekeles(2));
//03 Feladat
function HarommalOszthatokSzama(vizsgalandoTomb) {
    var oszthatok = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 3 == 0) {
            oszthatok++;
        }
    }
    return oszthatok;
}
document.write('<br>' + HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));
//04 Feladat
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var randomSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    var tutiSzamokTomb = [];
    var szerepelE = false;
    for (var i = 0; i < mennyiseg; i++) {
        var randomSzam_1 = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        for (var j = 0; j < tutiSzamokTomb.length; j++) {
            if (randomSzam_1 == tutiSzamokTomb[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            tutiSzamokTomb.push(randomSzam_1);
        }
    }
    return tutiSzamokTomb;
}
document.write('<br>' + Nyeroszamok(5, 1, 90));
