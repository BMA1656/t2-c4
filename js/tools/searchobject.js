export function importLocal(valor) {
    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        var objetoAlmacenado = JSON.parse(localStorage.getItem(clave));

        for (let i = 0; i < objetoAlmacenado.length; i++) {
            if (objetoAlmacenado[i].id === valor) {
                return objetoAlmacenado[i];
            }
        }
    }
}