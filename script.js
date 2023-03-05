function carregar(){
    var img = window.document.getElementById('img')
    var imag= window.document.getElementById('imag')
    var desc = window.document.getElementById('descricao')
    data = new Date()
    var hora =data.getHours()
    var min =data.getMinutes()
    img.innerHTML=`Agora são ${hora}horas e ${min}Minutos`
  if (hora > 5 && hora < 12){
    imag.src= 'imagens/manha.png'
    desc.innerHTML= '<h1>Porsche Cayman GT4 RS</h1> Dobradinha da Porsche: é a vez do 718 Cayman GT4 RS'


  } else if (hora>=12 && hora <18){
imag.src= 'imagens/tarde.png'
document.body.style.backgroundImage = 'linear-gradient(to bottom, rgb(255, 200, 0),rgb(255, 174, 0))'
desc.innerHTML= '<h1>Porsche 911 GT3</h1> Porsche 911 GT3 ficou na décima posição do ranking dos mais beberrões'


  } else {
    imag.src= 'imagens/noite.png'
    document.body.style.backgroundImage = ' linear-gradient(to bottom, rgb(17, 0, 255),rgb(5, 27, 113))'
  }
}