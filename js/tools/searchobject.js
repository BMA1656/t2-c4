export function importLocal(valor) {
    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        var objetoAlmacenado = JSON.parse(localStorage.getItem(clave));

        for (let j = 0; j < objetoAlmacenado.length; j++) {
            if (objetoAlmacenado[j].id === valor) {
                return objetoAlmacenado[j];
            }
        }
    }
}