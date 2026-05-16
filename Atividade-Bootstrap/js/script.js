let estoqueCaixas = 0;
let estoqueChumbo = 0;
let estoqueAcido = 0;
let bateriasAvulsas = 0;
let caixasDeBateria = 0;

// Elementos da interface principal
const spanCaixas = document.querySelector("#qtdCaixas");
const spanChumbo = document.querySelector("#qtdChumbo");
const spanAcido = document.querySelector("#qtdAcido");

function atualizarInterface() {
    spanCaixas.textContent = estoqueCaixas;
    spanChumbo.textContent = estoqueChumbo;
    spanAcido.textContent = estoqueAcido;
}


let modalFeedbackInstance = null;

function mostrarFeedback(titulo, mensagem, corClasseTexto) {

    if (!modalFeedbackInstance) {
        modalFeedbackInstance = new bootstrap.Modal(document.getElementById('modalFeedback'));
    }

    const tituloEl = document.getElementById('feedbackTitle');
    const corpoEl = document.getElementById('feedbackBody');


    tituloEl.textContent = titulo;
    tituloEl.className = "modal-title fw-bold " + corClasseTexto;
    corpoEl.textContent = mensagem;

    modalFeedbackInstance.show();
}


document.querySelector("#btnRegistrar").addEventListener("click", function (e) {
    e.preventDefault();


    const checkConfirmar = document.querySelector("#checkConfirmar");
    if (!checkConfirmar.checked) {
        mostrarFeedback("Ação Necessária", "Por favor, marque a caixa de confirmação dos dados para registrar os materiais.", "text-warning");
        return;
    }

    const form = document.forms["cadastroInsumos"];

    let caixasAdd = parseInt(form.elements["caixas"].value) || 0;
    let chumboAdd = parseInt(form.elements["chumbo"].value) || 0;
    let acidoAdd = parseFloat(form.elements["acido"].value) || 0;

    if (caixasAdd === 0 && chumboAdd === 0 && acidoAdd === 0) {
        mostrarFeedback("Atenção", "Por favor, preencha as quantidades em pelo menos um dos campos para registrar no estoque.", "text-warning");
    }
    else if (caixasAdd >= 0 && chumboAdd >= 0 && acidoAdd >= 0) {
        estoqueCaixas += caixasAdd;
        estoqueChumbo += (chumboAdd * 100);
        estoqueAcido += acidoAdd;

        atualizarInterface();


        form.elements["caixas"].value = "0";
        form.elements["chumbo"].value = "0";
        form.elements["acido"].value = "0";

        checkConfirmar.checked = false;


        mostrarFeedback("Registrado!", "Materiais adicionados ao estoque com sucesso.", "text-success");
    }
    else {
        mostrarFeedback("Erro", "Valores inválidos! Insira apenas números positivos.", "text-danger");
    }
});


document.querySelector("#btnProduzir").addEventListener("click", function () {
    // Lógica da produção
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


        mostrarFeedback("Sucesso na Produção!", "Uma nova bateria foi montada com sucesso.", "text-success");
    } else {

        mostrarFeedback("Estoque Insuficiente", "Você não possui materiais suficientes para produzir uma nova bateria.", "text-danger");
    }
});


document.querySelector("#btnVisualizar").addEventListener("click", function () {
    document.querySelector("#relAvulsas").textContent = bateriasAvulsas;
    document.querySelector("#relCaixas").textContent = caixasDeBateria;
});