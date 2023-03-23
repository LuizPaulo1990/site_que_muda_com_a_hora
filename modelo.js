function carregar(){
    // IDs são unicos. Voce pode usar o getElementById para referenciar a eles ao invés do querySelector
    var msg = document.getElementById('#msg');
    var img = document.getElementById('#imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    msg.innerHTML = `Agora São ${hora}h : ${minuto}m.`

    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagens/manhã.png';
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagens/tarde.png';
        document.body.style.background = '#b9846f';
    } else {
        //Boa noite
        img.src = 'imagens/noite.png';
        document.body.style.background = '#515154';
    }

}



