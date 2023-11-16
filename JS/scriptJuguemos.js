/*juego*/


let imag1=document.querySelector("#imag1");
let imag2=document.querySelector("#imag2");
let imag3=document.querySelector("#imag3");

let caja1=document.querySelector("#arrasCaja1");
let caja2=document.querySelector("#arrasCaja2");
let caja3=document.querySelector("#arrasCaja3");

let destino=document.querySelector(".cajasArras");


/*imagenes traslado*/

imag1.addEventListener('dragstart', (evento)=>{
    evento.dataTransfer.setData("Text","/assets/imagenes/Rompe3.png");

console.log('evento dragstart');
})


imag2.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData("Text","/assets/imagenes/Rompe1.png");

console.log('evento dragstart');
})

imag3.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData("Text","/assets/imagenes/rompe2.png");

console.log('evento dragstart');
})



imag1.addEventListener('dragend',(finalTraslado)=>{ 
    imag1.style.display="none";
    console.log('evento dragend');
})

imag2.addEventListener('dragend',(finalTraslado)=>{ 
    imag2.style.display="none";
    console.log('evento dragend');
})


imag3.addEventListener('dragend',(finalTraslado)=>{ 
    imag3.style.display="none";
    console.log('evento dragend');
})




/*destino img*/
caja1.addEventListener('dragover',(otroEvento)=>{
    otroEvento.preventDefault();
})
caja2.addEventListener('dragover',(otroEvento)=>{
    otroEvento.preventDefault();
})
caja3.addEventListener('dragover',(otroEvento)=>{
    otroEvento.preventDefault();
})

caja1.addEventListener('drop',(soltarIma)=>{
    soltarIma.preventDefault();
    let dato_imag1=soltarIma.dataTransfer.getData('Text');
    caja1.innerHTML=`<img id="imag1" src="${dato_imag1}"/>`;
})



caja2.addEventListener('drop',(soltarIma)=>{
    soltarIma.preventDefault();
    let dato_imag2=soltarIma.dataTransfer.getData('Text');
    caja2.innerHTML=`<img id="imag2" src="${dato_imag2}"/>`;
})
   
    

caja3.addEventListener('drop',(soltarIma)=>{
    soltarIma.preventDefault();
    let dato_imag3=soltarIma.dataTransfer.getData('Text');
    caja3.innerHTML=`<img id="imag3" src="${dato_imag3}"/>`;
})

function reinicio() {
    
    caja1.innerHTML = '<p class="pCaja"> Arrastre y suelte la imágen aquí</p>';
    caja2.innerHTML = '<p>Arrastre y suelte la imágen aquí</p>';
    caja3.innerHTML = '<p>Arrastre y suelte la imágen aquí</p>';
    
    imag1.style.display = "block";
    imag2.style.display = "block";
    imag3.style.display = "block";
}





