const usuarios =[
    {
        login:'perboni@gmail.com',
        pass:'perbas'
    },
    {
        login:'elen',
        pass:'freire'
    },
    {
        login:'bia',
        pass:'melhado'
    },
    {
        login: 'bia',
        pass: 'patinho'
    }
]

let botao = document.getElementById('btn')

botao.addEventListener('click', function logar(){
    var login = document.getElementById('user').value;
    var senha= document.getElementById('senha').value;
    var validalogin = false

for(let i in usuarios){


    if(login == usuarios[i].login && senha == usuarios[i].pass){
        validalogin=true
        location.href= "reservas.html";
        break
    }
}
if(validalogin==true){
    alert('OK')
}else{
      alert('ERRO')
}
})


window.addEventListener("scroll",function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 120);
})