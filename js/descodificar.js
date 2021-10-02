'use strict'
const ROT0=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó','ú',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT1=['ú','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í','ó',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT2=['ó','ú','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é','í',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT3=['í','ó','ú','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á','é',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT4=['é','í','ó','ú','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','á',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT5=['á','é','í','ó','ú','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT6=['z','á','é','í','ó','ú','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT7=['y','z','á','é','í','ó','ú','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT8=['x','y','z','á','é','í','ó','ú','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT9=['w','x','y','z','á','é','í','ó','ú','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
const ROT10=['v','w','x','y','z','á','é','í','ó','ú','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u',',','.',' ','0','1','2','3','4','5','6','7','8','9'];
function descodificar(){
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
    document.getElementById("ROT-1").value=f1;
    document.getElementById("ROT-2").value=f2;
    document.getElementById("ROT-3").value=f3;
    document.getElementById("ROT-4").value=f4;
    document.getElementById("ROT-5").value=f5;
    document.getElementById("ROT-6").value=f6;
    document.getElementById("ROT-7").value=f7;
    document.getElementById("ROT-8").value=f8;
    document.getElementById("ROT-9").value=f9;
    document.getElementById("ROT-10").value=f10;
}