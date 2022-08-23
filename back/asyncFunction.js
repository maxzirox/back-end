
/*/timers le pasamos un callback y un intervalo de tiempo
//console.log('incia la ejecucion')
//setTimeout(()=> console.log('cierra la ejecucion'), 5000)
//interval
console.log('incio de intervalo ', new Date())
let contador = 0;
let procesoRecursivo = setInterval(()=>{
    contador++
    console.log(`se ejecuta ${contador} veces`)

    if(contador == 5){
        clearInterval(procesoRecursivo);
        console.log("proceso Finalizado ", new Date())
    }
}, 1000)*/

function hacerTarea(num, cb){
    console.log('haciendo tarea ' + num);
    setTimeout(cb, 1000);
}
console.log('inicio de tareas');
hacerTarea(1, () => {
    hacerTarea(2, ()=> {
        hacerTarea(3, ()=> {
            hacerTarea(4, () => {
                console.log('fin de tareas')
            })
        })
    })
})

console.log('otras tareas')