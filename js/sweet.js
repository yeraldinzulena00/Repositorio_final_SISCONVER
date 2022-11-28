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
    
    
        '<form>'+
        '<div class="mb-3">'+
        '<label for="exampleInputEmail1" class="form-label">Email address</label>'+
        '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">'+
        ' <div id="emailHelp" class="form-text">Well never share your email with anyone else.</div>'+
        '</div>'+
        '<div class="mb-3">'+
        '  <label for="exampleInputPassword1" class="form-label">Password</label>'+
        ' <input type="password" class="form-control" id="exampleInputPassword1">'+
        '</div>'+
        ' <div class="mb-3 form-check">'+
        ' <input type="checkbox" class="form-check-input" id="exampleCheck1">'+
        '  <label class="form-check-label" for="exampleCheck1">Check me out</label>'+
        ' </div>'+
    
        ' </form>',
       
    
      })
}


);