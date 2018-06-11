var editId;


// TO LIST ALL PRODUCTS
$(document).ready( function(){

  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/products',
    method: 'GET',
    datatype: 'JSON'
  }).done(function(products){
    products.forEach(function(product_list){
      var li = '<li >' + product_list.name + product_list.base_price + '-' + product_list.description + '-' + product_list.quantity_on_hand + '-' + product_list.color + '-' + '</li>'
        $('#list').append(li)
    })
  })


  // TO CREATE A NEW PRODUCT
  $('#create').on('click', function(){
    editId
    var name = $('#name').val()
    var base_price = $('#price').val()  
    var color = $('#color').val() 
    var quantity_on_hand = $('#quantity').val()   
    var description = $('#description').val()
    var urlVal = (editId == null) ? 'http://json-server.devpointlabs.com/api/v1/products' : 'http://json-server.devpointlabs.com/api/v1/products/' + editId
    var typeVal = (editId == null) ? 'POST' : 'PUT'
    var productVal = (editId == null) ? {product: {name: name, base_price: base_price, color: color, quantity_on_hand: quantity_on_hand, description: description }} : { product: { base_price: base_price, color: color, description: description, id: editId, name: name, other_attributes: null, quantity_on_hand: 0, weight: null } }
    debugger
    // var product_list = {product: {name: name, base_price: base_price, color: color, quantity_on_hand: quantity_on_hand, description: description } }
    
    $.ajax({
      url: urlVal,
      method: typeVal,
      datatype: 'JSON',
      data: productVal
    }).done(function(product_list){
      var li = '<li>' + product_list.name + product_list.base_price + '-' + product_list.color + '-' + product_list.quantity_on_hand + '-' + product_list.description + '-' + '</li>'
      $('#list').append(li)

      $('#name').val('')
      $('#price').val('')
      $('#color').val('')
      $('#quantity').val('')
      $('#description').val('')
    })
  })

  // TO EDIT A PRODUCT
  $(document).on('click', '#edit', function(product_list){
    editId = this.parentNode.dataset.product_listId
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/products/' + editId,
      method: 'GET',
      datatype: 'JSON'
    }).done(function(prod){

      $('#name').val('${prod.name}')
      $('#price').val('${prod.base_price}')
      $('#color').val('${prod.color}')
      $('#quantity').val('${prod.quantity_on_hand}')
      $('#description').val('${prod.description}')
      editId = prod.id
    })
  })


  $(document).on('click', '#delete', function(){
    deleteId = this.parentNode.dataset.product_listId
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/products/' + delId,
      method: 'DELETE'
    }).done(function(msg){
      var row = $("[data-product_list-id'" + delId + "'")
      row.remove('li');
      alert(msg.message)
    })
  })
})
