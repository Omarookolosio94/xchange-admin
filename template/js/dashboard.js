function Redirect() {
  window.location.href = "../../template/Pages/Order_Single.html";
}

function RedirectInventory() {
  window.location.href = "../../template/Pages/Inventory_Single.html";
}

$(document).ready(function () {
  "use strict";

  var item = [];

  $.ajax({
    type: "GET",
    url: "../../template/Data/Orders.json",
    success: function (result) {
      item = result;
      var display = $("#order-list");
      $.each(item, function (key, val) {
        var div;

        div =
          '<tr onclick="Redirect()"> ' +
          "<td>" +
          val.id +
          "</td>" +
          "<td>" +
          val.orderId +
          "</td>" +
          "<td>" +
          val.total +
          "</td>" +
          "<td>" +
          val.payment_type +
          "</td>" +
          "<td>" +
          val.status +
          "</td>" +
          "<td class='order-item'>" +
          val.date_ordered +
          "</td>" +
          "</tr>";

        display.append(div);
      });

      if (item.length > 0) {
        jQuery("#example").DataTable();
      }
    },
  });

  $.ajax({
    type: "GET",
    url: "../../template/Data/Orders.json",
    success: function (result) {
      var product = result;

      var display = $("#cart-list");

      $.each(product[0].product_ordered, function (key, val) {
        var div;
        var total = val.unit_price * val.quantity;
        div =
          "<tr> " +
          "<td>" +
          val.product_id +
          "</td>" +
          "<td>" +
          val.name +
          "</td>" +
          "<td>" +
          val.description +
          "</td>" +
          "<td>" +
          val.unit_price +
          "</td>" +
          "<td>" +
          val.quantity +
          "</td>" +
          "<td>" +
          total +
          "</td>" +
          "</tr>";

        display.append(div);
      });
    },
  });

  $.ajax({
    type: "GET",
    url: "../../template/Data/Products.json",
    success: function (result) {
      var product = result;
      var display = $("#inventory-list");

      $.each(product, function (key, val) {
        var div;
        div =
          "<tr onclick='RedirectInventory()'>" +
          "<td>" +
          val.product_id +
          "</td>" +
          "<td>" +
          val.product_name +
          "</td>" +
          "<td>" +
          val.category +
          "</td>" +
          "<td>" +
          val.unit_price +
          "</td>" +
          "<td>" +
          val.units_in_stock +
          "</td>" +
          "<td>" +
          val.units_in_order +
          "</td>" +
          "<td>" +
          val.date_added +
          "</td>" +
          "</tr>";

        display.append(div);
      });

      if (product.length > 0) {
        jQuery("#inventory-table").DataTable();
      }
    },
  });
});
