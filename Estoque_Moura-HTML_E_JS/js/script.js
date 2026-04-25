let estoqueCaixas = 0;
let estoqueChumbo = 0;
let estoqueAcido = 0;
let bateriasAvulsas = 0;
let caixasDeBateria = 0;
//Manipulação do DOM para atualizar os valores na interface
const spanCaixas = document.querySelector("#qtdCaixas");
const spanChumbo = document.querySelector("#qtdChumbo");
const spanAcido = document.querySelector("#qtdAcido");

function atualizarInterface() {
    spanCaixas.textContent = estoqueCaixas;
    spanChumbo.textContent = estoqueChumbo;
    spanAcido.textContent = estoqueAcido;
}

document.querySelector("#btnRegistrar").addEventListener("click", function (e) {
    e.preventDefault(); 
    const form = document.forms["cadastroInsumos"];

    let caixasAdd = parseInt(form.elements["caixas"].value) || 0;
    let chumboAdd = parseInt(form.elements["chumbo"].value) || 0;
    let acidoAdd = (form.elements["acido"].value * 1) || 0;

    if (caixasAdd === 0 && chumboAdd === 0 && acidoAdd === 0) {
        window.alert("Por favor, preencha algum dos campos para registrar no estoque.");
    }
    else if (caixasAdd >= 0 && chumboAdd >= 0 && acidoAdd >= 0) {
        estoqueCaixas += caixasAdd;
        estoqueChumbo += (chumboAdd * 100); 
        estoqueAcido += acidoAdd;

        atualizarInterface();
        
        form.elements["caixas"].value = "0";
        form.elements["chumbo"].value = "0";
        form.elements["acido"].value = "0";
    } 
    else {
        window.alert("Valores inválidos! Insira apenas números positivos.");
    }
});

// Lógica de Produção e Agrupamento
document.querySelector("#btnProduzir").addEventListener("click", function () {
    if (estoqueCaixas >= 1 && estoqueChumbo >= 5 && estoqueAcido >= 0.5) {
        estoqueCaixas -= 1;
        estoqueChumbo -= 5;
        estoqueAcido -= 0.5;

        bateriasAvulsas++; 

        if (bateriasAvulsas === 10) {
            bateriasAvulsas = 0;
            caixasDeBateria++;
        }

        atualizarInterface();
        

        window.alert("Bateria produzida com sucesso!");
    } else {
        window.alert("Materiais insuficientes para produzir uma bateria!");
    }
});

document.querySelector("#btnVisualizar").addEventListener("click", function() {
    window.alert(
        "- RELATÓRIO DE PRODUTOS PRONTOS -\n\n" +
        "Baterias Avulsas: " + bateriasAvulsas + "\n" +
        "Caixas de Baterias (10 un): " + caixasDeBateria
    );
});