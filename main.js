function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const elemento = event.target;

            if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);

            if(elemento.classList.contains('btn-clear')) this.clear();

            if(elemento.classList.contains('btn-del')) this.del();

            if(elemento.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText;
        this.display.focus();
    }

    this.clear = elemento => this.display.value = "";

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;

        }catch(e){
            alert('Conta inválida.');
            return;
        }
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e=> {
            if(e.keyCode !== 13) return;
            
            this.realizaConta();
        });
    }
}

const calculadora = new Calculadora();
calculadora.inicia();