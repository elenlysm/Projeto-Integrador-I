const usuarios = [
    {
        login: 'perboni@gmail.com',
        senha: 'perbas'
    },
    {
        login: 'elenf@gmail.com',
        senha: 'freire'
    },
    {
        login: 'biam@gmail.com',
        senha: 'melhado'
    },
    {
        login: 'biap@gmail.com',
        senha: 'patinho'
    }
]

let botao = document.getElementById('btn')

botao.addEventListener('click', function logar() {
    var login = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;
    var validalogin = false

    for (let i in usuarios) {
        if (login == usuarios[i].login && senha == usuarios[i].senha) {
            validalogin = true
            location.href = "D:\Faculdade\Projeto Integrador\Projeto-Integrador-I\reservas.html";

        }
    }
    if (validalogin == true) {
        alert('OK')
    } else {
        alert('ERRO')
    }
})


window.addEventListener("scroll", function () {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 120);
})
