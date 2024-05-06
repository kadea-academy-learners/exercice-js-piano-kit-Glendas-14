

let pianoPlay;

document.addEventListener('keypress', function(event){
if(event.key == 'd'){
    pianoPlay = document.querySelector('audio[data-key="68"]')
    pianoPlay.play();
    
}
if(event.key == 'r'){
    pianoPlay = document.querySelector('audio[data-key="82"]')
    pianoPlay.play();
}
if(event.key == 'f'){
    pianoPlay = document.querySelector('audio[data-key="70"]')
    pianoPlay.play();
}
if(event.key == 't'){
    pianoPlay = document.querySelector('audio[data-key="84"]')
    pianoPlay.play();
}
if(event.key == 'g'){
    pianoPlay = document.querySelector('audio[data-key="71"]')
    pianoPlay.play();   
}
if(event.key == 'h'){
    pianoPlay = document.querySelector('audio[data-key="72"]')
    pianoPlay.play();   
}
if(event.key == 'u'){
    pianoPlay = document.querySelector('audio[data-key="85"]')
    pianoPlay.play();   
}
if(event.key == 'i'){
    pianoPlay = document.querySelector('audio[data-key="73"]')
    pianoPlay.play();   
}
if(event.key == 'j'){
    pianoPlay = document.querySelector('audio[data-key="74"]')
    pianoPlay.play();   
}
if(event.key == 'k'){
    pianoPlay = document.querySelector('audio[data-key="75"]')
    pianoPlay.play();   
}
if(event.key == 'o'){
    pianoPlay = document.querySelector('audio[data-key="79"]')
    pianoPlay.play();   
}
if(event.key == 'l'){
    pianoPlay = document.querySelector('audio[data-key="76"]')
    pianoPlay.play();   
}
}

)
