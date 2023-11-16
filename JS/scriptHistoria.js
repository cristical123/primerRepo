/*video*/

const inicioVideo=()=>{
    video.play();
}

const pausaVideo=()=>{
    video.pause();
}


let video= document.querySelector("#video");
let botones= document.querySelector(".botonesBarra");
let duracion=document.querySelector("#duracion");
let real= document.querySelector(".tiempoReal");
let terminado=document.querySelector(".tiempoTerminado")

let transformacion = (tiempo) => {
    let minutos = Math.floor(tiempo / 60);
    let segundos = Math.floor(tiempo % 60);

    if (segundos > 59) {
        minutos = Math.floor(tiempo / 60);
        segundos = Math.floor(tiempo % 60);
    }

    return `${minutos}:${segundos.toFixed(0).padStart(2, '0')}`;
}
window.addEventListener('load', ()=>{
    console.log(video.duration);
    duracion.textContent=transformacion(video.duration)

})

video.addEventListener('timeupdate', () => {
    real.textContent = transformacion(video.currentTime);
});

let numero=4.41


