const campoDeFormulario = document.querySelectorAll('.form');

const numeroNovo = document.getElementById('numero-novo');

const nomeNovo = document.getElementById('nome-novo');

const validadeNova = document.getElementById('validade-nova');

const submit = document.getElementById('submit');


submit.addEventListener('click', function(){
    campoDeFormulario.forEach(function(input){
        if(input.value == ''){
            input.classList.add('invalido')
            input.classList.remove('valido')
        }else{
            input.classList.add('valido')
        }
    })
})