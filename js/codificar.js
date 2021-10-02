'use strict'
const ROT0=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT1=['b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú','a',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT2=['c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú','a','b',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT3=['d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú','a','b','c',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT4=['e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú','a','b','c','d',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT5=['f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú','a','b','c','d','e',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT6=['g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú','a','b','c','d','e','f',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT7=['h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú','a','b','c','d','e','f','g',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT8=['i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú','a','b','c','d','e','f','g','h',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT9=['j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú','a','b','c','d','e','f','g','h','i',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT10=['k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú','a','b','c','d','e','f','g','h','i','j',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
function codificar(){
    let frase=document.getElementById("mensaje").value;
    frase=frase.toLowerCase();
    console.log(frase);
    let f1=[],f2=[],f3=[],f4=[],f5=[],f6=[],f7=[],f8=[],f9=[],f10=[];
    for(let i=0; i<frase.length; i++){
        if(ROT0.includes(frase.charAt(i))){
            f1.push(ROT1[ROT0.indexOf(frase.charAt(i))]);
            f2.push(ROT2[ROT0.indexOf(frase.charAt(i))]);
            f3.push(ROT3[ROT0.indexOf(frase.charAt(i))]);
            f4.push(ROT4[ROT0.indexOf(frase.charAt(i))]);
            f5.push(ROT5[ROT0.indexOf(frase.charAt(i))]);
            f6.push(ROT6[ROT0.indexOf(frase.charAt(i))]);
            f7.push(ROT7[ROT0.indexOf(frase.charAt(i))]);
            f8.push(ROT8[ROT0.indexOf(frase.charAt(i))]);
            f9.push(ROT9[ROT0.indexOf(frase.charAt(i))]);
            f10.push(ROT10[ROT0.indexOf(frase.charAt(i))]);
        }
    }
    f1=f1.join("");
    f2=f2.join("");
    f3=f3.join("");
    f4=f4.join("");
    f5=f5.join("");
    f6=f6.join("");
    f7=f7.join("");
    f8=f8.join("");
    f9=f9.join("");
    f10=f10.join("");
    document.getElementById("ROT1").value=f1;
    document.getElementById("ROT2").value=f2;
    document.getElementById("ROT3").value=f3;
    document.getElementById("ROT4").value=f4;
    document.getElementById("ROT5").value=f5;
    document.getElementById("ROT6").value=f6;
    document.getElementById("ROT7").value=f7;
    document.getElementById("ROT8").value=f8;
    document.getElementById("ROT9").value=f9;
    document.getElementById("ROT10").value=f10;
}