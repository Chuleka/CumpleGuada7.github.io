/*pantallas */
let primera = document.getElementById('primera')
let segunda = document.getElementById('segunda')
let tercera = document.getElementById('tercera')


/*respuestas */
let respuesta1 = document.getElementById('respuesta1')
let respuesta2 = document.getElementById('respuesta2')
let respuesta3 = document.getElementById('respuesta3')

/*botones */
let btnEntrar = document.getElementById('entrar')

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

let btnCerar1 = document.getElementById('btnCerar1')
let btnCerar2 = document.getElementById('btnCerar2')
let btnCerar3 = document.getElementById('btnCerar3')


btnEntrar.addEventListener('click', ()=>{
    primera.classList.remove('active')
    

    segunda.classList.add('active')
})

btn1.addEventListener('click', ()=>{
    primera.classList.remove('active')

    segunda.classList.remove('active')
   
    tercera.classList.add('active')
    respuesta1.classList.add('active')
    respuesta2.classList.remove('active')
    respuesta3.classList.remove('active')
})

btn2.addEventListener('click', ()=>{
    primera.classList.remove('active')

    segunda.classList.remove('active')
   
    tercera.classList.add('active')
    respuesta1.classList.remove('active')
    respuesta2.classList.add('active')
    respuesta3.classList.remove('active')
})

btn3.addEventListener('click', ()=>{
    primera.classList.remove('active')

    segunda.classList.remove('active')
   
    tercera.classList.add('active')
    respuesta1.classList.remove('active')
    respuesta2.classList.remove('active')
    respuesta3.classList.add('active')
})


btnCerar1.addEventListener('click', ()=>{
    primera.classList.remove('active')
    segunda.classList.add('active')
    tercera.classList.remove('active')
})

btnCerar2.addEventListener('click', ()=>{
    primera.classList.remove('active')
    segunda.classList.add('active')
    tercera.classList.remove('active')
})

btnCerar3.addEventListener('click', ()=>{
    primera.classList.remove('active')
    segunda.classList.add('active')
    tercera.classList.remove('active')
})