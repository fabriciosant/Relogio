
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var cumprimentos = document.getElementById('comp')
var hora = 0

function carregar(){
     if(hora === 0){
        msg.innerHTML = ''
        cumprimentos.innerHTML = ''
    }
}

function verificar(){
    hora = document.getElementById('txthora').value
    if(hora == ''){
        alert('ERRO! Digite uma hora válida')
    }
    else if(hora == 0){
        msg.innerHTML = ''
        img.src = 'tempo.jpg'
        cumprimentos.innerHTML = ''
        d
    }
    else if(hora >= 1 && hora < 6){
        msg.innerHTML = `Agora são ${hora} horas da madrugada`
        img.src = 'foto-madrugada.jpg'
        cumprimentos.innerHTML = 'Boa Madrugada!'
        document.body.style.background = '#2d635f'
    }
    else if(hora <= 12){
        msg.innerHTML = `Agora são ${hora} horas da manhã`
        img.src = 'foto-manha.jpg'
        cumprimentos.innerHTML = 'Bom Dia!'
        document.body.style.background = '#4bdbcf'
    }
    else if(hora <= 18){
        msg.innerHTML = `Agora são ${hora} horas da tarde`
        img.src = 'foto-tarde.jpg'
        cumprimentos.innerHTML = 'Boa Tarde!'
        document.body.style.background ='#f8b12e'
    }
    else if(hora <= 23){
        msg.innerHTML = `Agora são ${hora} horas da noite`
        img.src = 'foto-noite.jpg'
        cumprimentos.innerHTML = 'Boa Noite!' 
        document.body.style.background = '#323232'
        
    }else{
        alert('ERROR! Digite uma hora válida!!')
    }

}
