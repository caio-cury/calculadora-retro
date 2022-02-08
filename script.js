const tela = document.querySelector('.tela');
const botoes = Array.from(document.querySelectorAll('.btn'));
let conta = '';

botoes.map(btn => {
    btn.addEventListener('click', event => {
        switch (event.target.innerText) {
            case 'AC':
                conta = '';
                tela.innerText = '';
                break;
            case '+':
                conta = tela.innerText;
                conta += event.target.innerText;
                tela.innerText = '';
                break;
            case '-':
                conta = tela.innerText;
                conta += event.target.innerText;
                tela.innerText = '';
                break;
            case 'x':
                conta = tela.innerText;
                conta += '*';
                tela.innerText = '';
                break;
            case '÷':
                conta = tela.innerText;
                conta += '/';
                tela.innerText = '';
                break;
            case '=':
                try {
                    conta += tela.innerText;
                    tela.innerText = eval(conta);
                    conta = '';
                    break;
                } catch (error) {
                    tela.innerText = '';
                }
            case 'DEL':
                tela.innerText = tela.innerText.slice(0, -1);
                conta = tela.innerText;
                break;
            default:
                tela.innerText += event.target.innerText;
        }
    })
})