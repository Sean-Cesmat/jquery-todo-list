$(document).ready(function() {
  var itemList = {};
  var currentState = {};
  var itemID = 0;

  var addItem = function(e) {
    e.preventDefault();
    var newListItem = $('<li class="list-item" ' + 'data-item-id="' + itemID +'">');
    $('ul').append(newListItem.text($('#new-todo').val()).prepend('<i class="fas fa-square"></i>').append('<i class="delete far fa-times-circle"></i>'));
    itemList[itemID] = $('#new-todo').val();
    console.log(itemList);
    $('#new-todo').val('').focus();
    $(newListItem).click(checkBox);
    $('.delete').click(removeItem);
    itemID++;
    console.log(itemID);
  }

  var checkBox = function() {
    //console.log(this);
    $(this).children('.fas').toggleClass('fa-square');
    $(this).children('.fas').toggleClass('fa-check-square');
    $(this).toggleClass('checked');
  }

  var removeItem = function(li) {
    //console.log($('.delete').parent());
    $(this).parent().remove();
    //console.log($(this).parent().attr('data-item-id'));
    delete itemList[$(this).parent().attr('data-item-id')];
    console.log(itemList);
  }

  $('#add-item-btn').click(addItem);
  $('#new-todo').keyup(function(e){
      if (e.keyCode === 13) {
          addItem(e);
      }
  });
  $('ul').on('click', '.delete', function(e) {
    var item = this;
    removeItem(e, item);
  });

  $( "ul" ).sortable();
  $( "ul" ).disableSelection();

  // $('#save-list').click(function() {
  //   // Put the object into storage
  //   //localStorage.setItem('itemList', JSON.stringify(itemList));
  //
  //   $('.list-item').each(function() {
  //     console.log($(this).val());
  //     var string = $(this).text();
  //     //currentState[$(this).attr('data-item-id')] = string;
  //     if ($(this).hasClass('checked')) {
  //       currentState[$(this).attr('data-item-id') + '-isChecked'] = true;
  //     } else {
  //       currentState[$(this).attr('data-item-id') + '-isChecked'] = false;
  //     }
  //   });
  //   localStorage.setItem('currentState', JSON.stringify(currentState))
  //   // Retrieve the object from storage
  //   retrievedItemList = localStorage.getItem('currentState');
  //
  //   console.log('retrievedObject: ', JSON.parse(retrievedItemList));
  // });
  // var loadList = function() {
  //   loadCurrentState = JSON.parse(localStorage.getItem(retrievedItemList));
  //   console.log(loadCurrentState);
  // }
  //
  // loadList();
});
