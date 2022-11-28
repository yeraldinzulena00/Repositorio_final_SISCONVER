$('#Boton').click(function(){

    Swal.fire({
        title: 'Desea Inactivar el libro',
        showDenyButton: true,
        
        confirmButtonText: 'Confirmar',
        
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Inactivado', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Cancelado', '', 'info')
        }
      })
    
}


);





  $('#Boton_agregar').click(function(){

    
    Swal.fire({
        html:
    
    
        ' <form class="   needs-validation" novalidate>'+
        '<div class=" ">'+
          '  <h1 class=" ">Agregar Libro</h1>'+
          ' <img src="assets/img/icons8-editar-propiedad-100.png" alt="" >'+
          '<div class=" justify-content-center align-items-center d-flex ">'+
          
  
          
          ' <div class=" d-flex flex-column col-10 ">'+
              
          ' <label for="Fecha" class="form-label  ">Nombre Libro: </label>'+
          '  <input type="text" class="form-control form-control-lg m-2" aria-describedby="emailHelp" required placeholder="Ingrese el nombre del libro">'+
          ' <label for="Fecha" class="form-label  ">Nombre Autor: </label>'+
          '   <input type="text" class="form-control form-control-lg m-2" aria-describedby="emailHelp" required placeholder="Ingrese el nombre del autor">'+
          ' <label for="Fechad" class="form-label">Cantidad:</label>'+
          '<input type="number" class="form-control form-control-lg m-2" step="1" min="1" required pattern="^[0-9]+" required placeholder="Ingrese una cantidad">'+
          
          
          
          
          '  <label for="Nombre del Alumno" class="form-label">Tema :</label>'+
          ' <input type="Text" class="form-control form-control-lg m-2" required placeholder="Ingrese un tema">'+
          '  <label for="Nombre del Libro" class="form-label">Estado :</label>'+
          ' <input type="text" class="form-control form-control-lg m-2" required placeholder="Escriba el estado del libro"></input>'+
          ' </div>'+' </div>',
    
      })
}


);