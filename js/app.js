$(document).ready(function() {
  var currentState = {};
  var isChecked = {};
  var itemID = Math.floor(Math.random() * 10000);
  var uncheckedIcon = '<i class="fas fa-square"></i>';
  var checkedIcon = '<i class="fas fa-check-square"></i>';
  var deleteIcon = '<i class="delete far fa-times-circle"></i>';

  // Triggered by submit button / enter key - Make a new list item and add it to the dom
  var addItem = function(e) {
    e.preventDefault();
    var newListItem = $('<li class="list-item" ' + 'id="' + itemID + '"' + 'data-item-id="id-' + itemID +'">');
    $('ul').append(newListItem.text($('#new-todo').val()).prepend(uncheckedIcon).append(deleteIcon));
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
  var removeItem = function() {
    $(this).parent().remove();
  }


  // When the save button is clicked, run this event to save current state of list
  $('#save-list').click(function() {
    // Put the object into storage
    $('.list-item').each(function() {
      // store each list item id as key and <li> val as value
      currentState[$(this).attr('data-item-id')] = $(this).text();
      // if list item is checked off, store it in
      if ($(this).hasClass('checked')) {
        isChecked[$(this).attr('data-item-id')] = true;
      } else {
        isChecked[$(this).attr('data-item-id')] = false;
      }
    });
    // Store the two objects in localStorage
    localStorage.setItem('currentState', JSON.stringify(currentState));
    localStorage.setItem('isChecked', JSON.stringify(isChecked));
  });

  // When the page loads, run this function to load list items that were saved in localStorage
  var loadList = function() {
    // Retrieve the two localStoarge objects and store them in a variable
    var retrievedItemList = JSON.parse(localStorage.getItem('currentState'));
    var retrievedIsChecked = JSON.parse(localStorage.getItem('isChecked'));

    // Run through the list items and add them to the page
    $.each(retrievedItemList, function(i, val) {
      var temp = retrievedIsChecked[i];
      // if the item was checked, recheck that list item
      if (retrievedIsChecked[i] === true) {
        var newListItem = $('<li class="list-item checked"' + 'data-item-id="' + i + '">');
        $('ul').append(newListItem.text(val).prepend(checkedIcon).append(deleteIcon));
      } else if (retrievedIsChecked[i] === false) {
        var newListItem = $('<li class="list-item" ' + 'data-item-id="' + i +'">');
        $('ul').append(newListItem.text(val).prepend(uncheckedIcon).append(deleteIcon));
      }
      // Add click events to list checkbox and delete button
      $(newListItem).click(checkBox);
      $('.delete').click(removeItem);
    });
    // after adding all the list items back, refocus on the input text field
    $('#new-todo').val('').focus();
  }
  // using jQuery UI make the list items sortable
  $( "ul" ).sortable();
  $( "ul" ).disableSelection();

  loadList();
});
