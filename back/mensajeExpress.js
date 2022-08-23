class Mensaje{
    constructor(){}

    generarMensaje(tamanio, color, nombre){
        const plantilla = `<h${tamanio} style="color: ${color};">Bienvenido ${nombre} al servidor express</h${tamanio}>`;
        return plantilla;
    }
}
module.exports = Mensaje;