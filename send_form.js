$('#form-submit').on('click', function(event) {
  event.preventDefault();

  var formdata = $('#contact-form').serialize();

  $.ajax({
    type: 'POST',
    url: 'send_form.php',
    data: formdata,
    beforeSend: function() {
      $("#form-submit").val('Enviando...');
      $("#form-submit").prop('disabled', true); // disable button
    },
    success: function(data){
      $('#contact-form').submit();
    }
  });
});