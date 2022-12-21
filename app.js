const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 
function encriptar(text){
    let newtext = removeAccents(text);
    let arrText = newtext.toLowerCase().split('');
    for(let i = 0;i < arrText.length;i++){
        if(arrText[i] === 'a'){
            arrText[i] = 'ai';
        }else if(arrText[i] === 'e'){
            arrText[i] = 'enter'; 
        }
        else if(arrText[i] === 'i'){
            arrText[i] = 'imes'; 
        }
        else if(arrText[i] === 'o'){
            arrText[i] = 'ober'; 
        }
        else if(arrText[i] === 'u'){
            arrText[i] = 'ufat'; 
        }
    }
    let finalWord = arrText.join('').toLowerCase();
    return document.getElementById('text_output').innerHTML = finalWord;//textFinal.appendChild(finalWord);
}

function desencriptar (text){
    let newtext = removeAccents(text);
    console.log(newtext);
    newtext.toLowerCase();
    let withA = newtext.replace(/ai/g, 'a');
    let withE = withA.replace(/enter/g, 'e');
    let withI = withE.replace(/imes/g, 'i');
    let withO = withI.replace(/ober/g, 'o');
    let finalWord = withO.replace(/ufat/g, 'u');
    return document.getElementById('text_output').innerHTML = finalWord; //console.log(finalWord); //textFinal.appendChild(finalWord);
}

let boton = document.getElementById("copiador");
boton.addEventListener("click", copiarAlPortapapeles, false);

function copiarAlPortapapeles() {
    let output = document.getElementById("text_output");
    let inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", output.innerHTML);
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand("copy");
    document.body.removeChild(inputFalso);
}