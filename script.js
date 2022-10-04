const campoDeFormulario = document.querySelectorAll('.form');

const numero = document.getElementById('numero');

const nome = document.getElementById('nome');

const cvv = document.getElementById('cvv')

const validadeMes = document.getElementById('validade-mes');

const validadeAno = document.getElementById('validade-ano')

const submit = document.getElementById('submit');

const nomeNovo = document.getElementById('nome-input');

const numeroNovo = document.getElementById('numero-input')

const cvvNovo = document.getElementById('cvv-input');

const mesNovo = document.getElementById('mes-input');

const anoNovo = document.getElementById('ano-input');

const aviso = document.getElementById('aviso');


submit.addEventListener('click', function () {
    campoDeFormulario.forEach(function (input, index) {
        if (input.value == '') {
            input.classList.add('invalido')
            input.classList.remove('valido')
        } else {
            input.classList.add('valido')
        }
    })
})

submit.addEventListener('click', function () {
    if (nomeNovo.value != "") {
        nome.innerHTML = `<p> ${nomeNovo.value} </p>`
    }
})


submit.addEventListener('click', function () {
    if (numeroNovo.value != "") {
        numero.innerHTML = `<p> ${numeroNovo.value} </p>`
    }
})


submit.addEventListener('click', function () {
    if (cvvNovo.value != "") {
        cvv.innerHTML = `<p> ${cvvNovo.value} </p>`
    }
})

submit.addEventListener('click', function () {
    if (anoNovo.value != "") {
        validadeAno.innerHTML = `<p>  ${anoNovo.value} </p>`
    }
})

submit.addEventListener('click', function () {
    if (mesNovo.value != "") {
        validadeMes.innerHTML = `<p> ${mesNovo.value} </p>`
    }
})

nomeNovo.addEventListener('keypress', function (e) {
    const keyCode = (e.keyCode ? e.keyCode : e.which)
    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
        nomeNovo.classList.add('invalido');
        aviso.innerHTML = "Não é possível colocar números no nome."
    }
})

numeroNovo.addEventListener('keypress', function () {
    let indiceNumero = numeroNovo.value.length;
    console.log(indiceNumero)
    if (indiceNumero == 4 || indiceNumero == 9 || indiceNumero == 14) {
        numeroNovo.value += " "
    }
})