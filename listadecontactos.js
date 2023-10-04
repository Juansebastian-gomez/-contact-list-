// Creamos una lista de contactos 
const listaDeContactos = [{
  id :  "1",
  nombre :'Santiago',
  apellido : 'Molina',
  numero : '2222222',
  ubicacion : {
    ciudad : 'ciudad1',
    direccion : 'direccion1'
  }
},
{
  id : '2',
  nombre : 'Ana',
  apellido: 'Restrepo',
  numero : '33333333',
  ubicacion : {
    ciudad : 'ciudad1',
    direccion : 'direccion2',

  }
},
{
  id : ' 3',
  nombre : 'Valentina',
  apellido : 'Ardila',
  numero : '44444444',
  ubicacion : {
    ciudad : 'ciudad3',
    direccion : 'direccion3,'
  }
}   
  ];
  
  // Esta función cumple con el trabajo de añadir un nuevo contacto 
  function agregarContacto(nombreCompleto) {
    
    listaDeContactos.push(nombreCompleto);// Push nos agrega un contacto al final del array
  }
  
  // Esta función elimina un contacto de la lista
  function borrarContacto(id) {
    
    const indice = listaDeContactos.findIndex(contacto => contacto.id === id);
    if (indice !== -1) {
      
      listaDeContactos.splice(indice, 1); // el splice nos elimina el contacto encontrado
    }
  }
  
  // Esta función muestra los contactos que teniamos.
  function imprimirContactos() {
    console.log("mi lista de contactos:");
    
    listaDeContactos.forEach(contacto => {  // for each nos recorre cada uno de los contactos y también los muestra
      console.log(
        'ID: ${contacto.id}, Nombre: ${contacto.nombre} ${contacto.apellido}, Telefono: ${contacto.numero}, Ciudad ${contacto.ubicacion.ciudad}, Dirección: ${contacto.ubicacion.direccion}' //Esta línea de codigo permite imprimir en pantalla todos los datos de manera organizada.
      )
    });
  }
  
  // Ahora agregamos una funcion que me permita añadir un nuevo contacto con los datos anteriores.

  function agregarContacto (contacto){
    listaDeContactos.push(contacto); //push agrega el nuevo contacto
  }

  agregarContacto(nuevoContacto);
  
  // Mostramos la lista después de que se añadió un nuevo contacto.
  imprimirContactos();
  
  // Agregamos una función que me elimine contacto.
  function borrarContacto(id){
    const indice = listaDeContactos.findIndex(contacto => contacto.id === id); //findIndex encuentra el contacto por id el cual voy a eliminar 

    if (indice !== -1);{
      listaDeContactos.splice(indice,1); //splice me borra el contacto
    }
  
  }
//ejemplo de como se eliminaría
  const idContactoAEliminar = 1;

  borrarContacto(idContactoAEliminar);

  // Mostramos la lista después de que se eliminó un contacto.
  imprimirContactos();
  
  
  // creamos una función que me permita actualizar el contacto

  function actualizarContacto(id,nuevosDatos){
    const indice = listaDeContactos.findIndex(contacto => contacto.id === id);
    
    if (indice !==-1) {
      listaDeContactos[indice] = { ...listaDeContactos[indice], ...nuevosDatos }; //los puntos suspensivos cumplen la función de combinar los datos del contacto ya existente con los datos que se van a actualizar, manteniendo las propiedades originales.
  }
    }
  
//mostramos en pantalla la actualización 
imprimirContactos();

//se corrigió la lista de contactos, ya que hubo confusión con el orden de la realización de los proyectos.