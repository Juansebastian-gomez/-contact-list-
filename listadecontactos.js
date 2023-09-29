// Creamos una lista de contactos 
const listaDeContactos = [
    "Santiago Molina",
    "Ana Restrepo",
    "Valentina Ardila"
  ];
  
  // Esta función cumple con el trabajo de añadir un nuevo contacto 
  function agregarContacto(nombreCompleto) {
    
    listaDeContactos.push(nombreCompleto);// Push nos agrega un contacto al final del array
  }
  
  // Esta función elimina un contacto de la lista
  function borrarContacto(nombreCompleto) {
    
    const indice = listaDeContactos.indexOf(nombreCompleto);
    if (indice !== -1) {
      
      listaDeContactos.splice(indice, 1); // el splice nos elimina el contacto encontrado
    }
  }
  
  // Esta función muestra los contactos que teniamos.
  function imprimirContactos() {
    console.log("Mis amigos:");
    
    listaDeContactos.forEach(contacto => {  // for each nos recorre cada uno de los contactos y también los muestra
      console.log(contacto);
    });
  }
  
  // Ahora agregamos un nuevo contacto
  agregarContacto("Samuel");
  
  // Mostramos la lista actualizada
  imprimirContactos();
  
  // Se elimina un contacto 
  borrarContacto("Ana Restrepo");
  
  // mostramos la lista después de que se eliminó al contacto.
  imprimirContactos();
  