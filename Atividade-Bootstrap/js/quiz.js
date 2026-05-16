document.getElementById('selectTecnologia').addEventListener('change', function () {
    const valor = this.value;
    const descChumbo = document.getElementById('descricaoChumbo');
    const descLitio = document.getElementById('descricaoLitio');


    descChumbo.classList.add('d-none');
    descLitio.classList.add('d-none');


    if (valor === 'chumbo') {
        descChumbo.classList.remove('d-none');
    } else if (valor === 'litio') {
        descLitio.classList.remove('d-none');
    }
});


document.getElementById('btnEnviarQuiz').addEventListener('click', function () {
    const respostasCorretas = {
        q1: 'V',
        q2: 'F',
        q3: 'V',
        q4: 'F',
        q5: 'V'
    };

    let acertos = 0;
    let respondidas = 0;


    for (let i = 1; i <= 5; i++) {
        const selecionada = document.querySelector(`input[name="q${i}"]:checked`);

        if (selecionada) {
            respondidas++;
            if (selecionada.value === respostasCorretas[`q${i}`]) {
                acertos++;
            }
        }
    }

    const modalCorpo = document.getElementById('textoResultadoQuiz');

    if (respondidas < 5) {
        modalCorpo.innerHTML = `<span class="text-warning fw-bold">Atenção:</span> Você precisa responder todas as 5 perguntas antes de enviar.`;
    } else {
        modalCorpo.innerHTML = `Você acertou <strong class="text-success fs-2">${acertos}</strong> de 5 perguntas!<br><br>
        <span class="fs-6 text-muted">Continue estudando os materiais acima.</span>`;
    }

    const resultadoModal = new bootstrap.Modal(document.getElementById('modalResultadoQuiz'));
    resultadoModal.show();
});