function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} Horas...`
    if(hora>=0 && hora<12){
        //Bom dia
        img.src='foto-manha.png'
        img.alt='Foto da Manha...'
    }else if(hora < 18){
        //Boa tarde
        img.src='foto-tarde.png'
        img.alt='Foto da Tarde...'
        document.body.style.background='orange'
    }else{
        //Boa noite
        img.src='foto-noite.png'
        img.alt='Foto da Noite...'
        document.body.style.background='rgb(0, 6, 61)'
    }
}


