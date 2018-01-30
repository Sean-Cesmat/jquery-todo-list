$(document).ready(function() {

  var addItem = function(e) {
    e.preventDefault();
    console.log('here');
    var newListItem = $('<li>');
    $('ul').append(newListItem.text($('#new-todo').val()).append('<div class="delete">X</div>'));
    $('#new-todo').val('').focus();
    $('.delete').click(removeItem);
  }

  var removeItem = function(li) {
    console.log($('.delete').parent());
    $(this).parent().remove();
  }

  $('#add-item-btn').click(addItem);
  $('ul').on('click', '.delete', function(e) {
    var item = this;
    removeItem(e, item);
  });
});
