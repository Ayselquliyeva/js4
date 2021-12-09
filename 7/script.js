
let marka  = [
    "Bmw", "Mersedes","Opel"
]

let model = [
    ["x6","x7",'m5'],
    ["sClass", "190"],
    ["astra", "vectra", "zafira"]
]



let markaSelect = document.getElementById("marka");
let modelSelect = document.getElementById("model");

onload =  function(){
    let ekran = `<option selected disabled > Marka Secin </option>`;

    for(let i = 0; i<marka.length; i++){
        ekran += `<option value="${i}" > ${marka[i]} </option>`
    }

    markaSelect.innerHTML = ekran;

}


markaSelect.onchange = function(){
    let ekran = `<option selected disabled > Model Secin </option>`;

    let value = markaSelect.value;


    for(let i = 0; i<model[value].length; i++){
        ekran += `<option value="${i}" > ${model[value][i]} </option>`
    }

    modelSelect.innerHTML = ekran;
}



// onload = function(){
//     alert("salam")
// }
