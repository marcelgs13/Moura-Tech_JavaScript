const visor = document.getElementById('visor');
const botoes = document.querySelectorAll('.num, .op');
const btnCalc = document.getElementById('calc');
const btnClear = document.getElementById('clear');

for (let btn of botoes) {
    btn.addEventListener('click', (e) => {
        visor.textContent += e.target.textContent;
    });
}

btnCalc.addEventListener('click', () => {
    try {
        if (visor.textContent) {
            let expressao = visor.textContent.replace(/,/g, '.');
            let resultado = eval(expressao);
            visor.textContent = String(resultado).replace(/\./g, ',');
        }
    } catch {
        visor.textContent = 'Erro';
    }
});

btnClear.addEventListener('click', () => {
    visor.textContent = '';
});