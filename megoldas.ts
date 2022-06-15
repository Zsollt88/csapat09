//01 Feladat
function DiakInfo(nev:string, csoport:number, tipus:boolean):string{
  let azonosito:string = '';
    if(tipus==true){
    azonosito = 'Junior Frontend';
   }
   else{
    azonosito = 'Webprogramozó';
   }
   return nev+' Team 0'+csoport+' '+azonosito
}
document.write(DiakInfo('Minta Márton', 8, true));
//02 Feladat
function SzovegesErtekeles(jegy:number):[string, string]{
    let ertekeles :[string, string]=['', ''];
    if(jegy==5){
        ertekeles=['Példás', 'Példás'];
    }
    else if(jegy==4){
        ertekeles=['Jó', 'Jó'];
    }
    else if(jegy==3){
        ertekeles=['Változó', 'Változó'];
    }
    else{
        ertekeles=['Hanyag', 'Rossz'];
    }
    return [ertekeles[0],ertekeles[1]];
}
document.write('<br>'+SzovegesErtekeles(2));
//03 Feladat
function HarommalOszthatokSzama(vizsgalandoTomb:number[]):number{
    var oszthatok:number=0;
    for(let i=0;i<vizsgalandoTomb.length;i++){
        if(vizsgalandoTomb[i]%3==0){
            oszthatok++;
        }
    }
    return oszthatok
}
document.write('<br>'+HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20 ]));
//04 Feladat
function Nyeroszamok(mennyiseg:number, alsoHatar:number, felsoHatar:number):number[]{
    let randomSzam:number=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
let tutiSzamokTomb:number[]=[];
let szerepelE:boolean=false;

for(let i=0;i<mennyiseg;i++){
    let randomSzam:number=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
    for(let j=0;j<tutiSzamokTomb.length;j++){
        if(randomSzam == tutiSzamokTomb[j]){
            szerepelE = true;
        }
    }
    if(szerepelE== false){
        tutiSzamokTomb.push(randomSzam);
    }
    
}
return tutiSzamokTomb

}
document.write('<br>'+Nyeroszamok(5,1,90));