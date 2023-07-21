export default function searchLocal(valor) {
  for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    const objetoAlmacenado = JSON.parse(localStorage.getItem(clave));

    for (let j = 0; j < objetoAlmacenado.length; j++) {
      if (objetoAlmacenado[j].id === valor) {
        return objetoAlmacenado[j];
      }
    }
  }
  return null;
}
