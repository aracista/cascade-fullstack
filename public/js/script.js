$(function() {

  
  $('.addButton').on('click', function() {
    $('#formModalLabel').html('Add Employee');
    $('.modal-footer button[type=submit]').html('Add Data');
    $('#name').val('');
    $('#email').val('');
    $('#id').val('');
  });

  $('.viewEdit').on('click', function() {

    $('#formModalLabel').html('Edit Employee');
    $('.modal-footer button[type=submit]').html('Update Data');
    $('.modal-body form').attr('action', 'http://localhost/crud/public/employee/update');

    const id = $(this).data('id');

    $.ajax({
      url: 'http://localhost/crud/public/employee/getEdit',
      data: {id: id},
      method: 'post',
      dataType: 'json',
      success: function(data) {
        $('#name').val(data.name);
        $('#email').val(data.email);
        $('#position').val(data.position);
        $('#id').val(data.id);
      }
    });

  });

});