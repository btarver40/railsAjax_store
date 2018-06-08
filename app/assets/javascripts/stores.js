



$(document).ready( function(){
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/products',
    method: 'GET',
    datatype: 'JSON'
  }).done(function(products){
debugger
    products.forEach(function(product_list){
      var li = '<li >' + product_list.name + product_list.base_price + '-' + product_list.description + '-' + product_list.quantity_on_hand + '-' + product_list.color + '-' + '</li>'
        $('#list').append(li)
    })
  })
})

// if null, display nothing
// make a ternary