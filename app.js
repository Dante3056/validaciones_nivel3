$().ready(function () {

  $.validator.setDefaults({
    errorClass: 'text-danger',
    highlight: function(element){
    $(element)
      .closest('.form-control')
      .addClass('is-invalid');
    },
    unhighlight: function(element){
      $(element)
        .closest('.form-control')
        .addClass('is-valid');
        }
  });

  $("#form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
      password2: {
        required: true,
        minlength: 8,
        equalTo: "#pass1",
      },
      residencia: {
        required: true,
      },
    },
    messages: {
      email: {
        required: "El campo es obligatorio",
        email: "Ingresa una direccion de correo válida correo@ejemplo.com",
      },
      password: {
        required: "El campo es obligatorio",
        minlength: "la contraseña debe tener minimo 8 caracteres",
      },
      password2: {
        required: "El campo es obligatorio",
        minlength: "La contraseña debe tener minimo 8 caracteres",
        equalTo: "La contraseña debe coincidir con el campo anterior",
      },
      residencia: {
        required: "El campo es obligatorio",
      },
    }, 
  });
});
