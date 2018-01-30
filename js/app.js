$(document).ready(function() {
  //var itemList = {};
  var currentState = {};
  var isChecked = {};
  var itemID = Math.floor(Math.random() * 1000);
  var uncheckedIcon = '<i class="fas fa-square"></i>';
  var checkedIcon = '<i class="fas fa-check-square"></i>';
  var deleteIcon = '<i class="delete far fa-times-circle"></i>';

  var addItem = function(e) {
    e.preventDefault();
    var newListItem = $('<li class="list-item" ' + 'id="' + itemID + '"' + 'data-item-id="' + itemID +'">');
    $('ul').append(newListItem.text($('#new-todo').val()).prepend(uncheckedIcon).append(deleteIcon));
    //itemList[itemID] = $('#new-todo').val();
    $('#new-todo').val('').focus();
    $(newListItem).click(checkBox);
    $('.delete').click(removeItem);
    itemID++;
  }
  // Add click event to submit button
  $('#add-item-btn').click(addItem);
  // Make it so you can hit the enter key
  $('#new-todo').keyup(function(e){
      if (e.keyCode === 13) {
          addItem(e);
      }
  });

  // Toggle the icon checked/unchecked and add or remove class
  var checkBox = function() {
    $(this).children('.fas').toggleClass('fa-square');
    $(this).children('.fas').toggleClass('fa-check-square');
    $(this).toggleClass('checked');
  }

  // Called from the delete button click event
  var removeItem = function(li) {
    $(this).parent().remove();
    //delete itemList[$(this).parent().attr('data-item-id')];
  }

  // Delete Button Click Event
  $('ul').on('click', '.delete', function(e) {
    var item = this;
    removeItem(e, item);
  });

  $('#save-list').click(function() {
    // Put the object into storage
    $('.list-item').each(function() {
      var string = $(this).text();
      currentState[$(this).attr('data-item-id')] = string;
      if ($(this).hasClass('checked')) {
        isChecked[$(this).attr('data-item-id')] = true;
      } else {
        isChecked[$(this).attr('data-item-id')] = false;
      }
    });
    localStorage.setItem('currentState', JSON.stringify(currentState));
    localStorage.setItem('isChecked', JSON.stringify(isChecked));
  });

  var loadList = function() {
    var retrievedItemList = JSON.parse(localStorage.getItem('currentState'));
    var retrievedIsChecked = JSON.parse(localStorage.getItem('isChecked'));

    $.each(retrievedItemList, function(i, val) {
      if (retrievedIsChecked[i] === true) {
        var newListItem = $('<li class="list-item checked"' + 'data-item-id="' + i + '">');
        $('ul').append(newListItem.text(val).prepend(checkedIcon).append(deleteIcon));
      } else if (retrievedIsChecked[i] === false) {
        var newListItem = $('<li class="list-item" ' + 'data-item-id="' + i +'">');
        $('ul').append(newListItem.text(val).prepend(uncheckedIcon).append(deleteIcon));
      }
      $(newListItem).click(checkBox);
      $('.delete').click(removeItem);
      i++;
    });

    $('#new-todo').val('').focus();
  }
  $( "ul" ).sortable();
  $( "ul" ).disableSelection();
  loadList();
});
