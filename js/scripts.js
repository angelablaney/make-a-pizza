// // Business Logic for Customer ---------------------

// function Customer(fullName, phoneNumber, address) {
//   this.fullName = fullName;
//   this.phoneNumber = phoneNumber;
//   this.address = address;
// }


// Business Logic for Pizza ---------------------


function Pizza(crust, size, sauce, toppings, total) {
  this.crust = crust;
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.total = total;
}

Pizza.prototype.listToppings = function() {
  return this.toppings.join(", ");
};


Pizza.prototype.calculateTotal = function() {
  let total = 0.00;
  this.toppings.forEach(function(topping) {
    total += 2.00})

  if (this.size === "Extra Large") {
    total += 40.00;
  } else if (this.size === "Large") {
    total += 32.00;
  } else if (this.size === "Medium") {
    total += 24.00;
  } else if (this.size === "Small") {
    total += 16.00;
  }

this.total = total;

}


function emptyForm(){
  // $("input#new-first-name").val("");
  // $("input#new-last-name").val("");
  // $("input#new-phone-number").val("");
  // $("input#new-address").val("");
  // $("select#new-city").val("");
  // $("select#new-state").val("");
  // $("select#new-zip").val("");
  $("select#new-crust").val("");
  $("select#new-size").val("");
  $("select#new-sauce").val("");
  $("input[name=selected-topping]").prop("checked", false);
}


// UI Logic ------------------

$(document).ready(function(){

  $("form#new-contact").submit(function(event){
    event.preventDefault();
  
  const selectedCrust = $("select#new-crust").val();
  const selectedSize = $("select#new-size").val();
  const selectedSauce = $("select#new-sauce").val();
  const selectedToppings = $("input:checkbox[name=selected-topping]:checked").map(function() {
    return $(this).val()
  }).get()
  let newPizza = new Pizza(selectedCrust, selectedSize, selectedSauce, selectedToppings);
  newPizza.calculateTotal()

  $(".crust").html(newPizza.crust);
  $(".size").html(newPizza.size);
  $(".sauce").html(newPizza.sauce);
  $(".toppings").html(newPizza.listToppings());
  $(".total").html(newPizza.total);
  emptyForm();
  })
})