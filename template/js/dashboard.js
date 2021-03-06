function Redirect() {
  window.location.href = "../Pages/Order_Single.html";
}

function RedirectUser() {
  window.location.href = "../Pages/Users_Single.html";
}

function RedirectInventory() {
  window.location.href = "../Pages/Inventory_Single.html";
}

$(document).ready(function () {
  "use strict";

  var item = [];

  $.ajax({
    type: "GET",
    url: "../Data/Orders.json",
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
    url: "../Data/Orders.json",
    success: function (result) {
      var product = result;

      var display = $("#cart-list");

      $.each(product[0].product_ordered, function (key, val) {
        var div;
        var total = val.unit_price * val.quantity;
        div =
          "<tr onclick='RedirectInventory()'> " +
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
    url: "../Data/Products.json",
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

  $.ajax({
    type: "GET",
    url: "../Data/Users.json",
    success: function (result) {
      var user = result;
      var display = $("#users-list");

      $.each(user, function (key, val) {
        var div;
        var name = val.firstName + " " + val.lastName;
        div =
          "<tr onclick='RedirectUser()'>" +
          "<td>" +
          val.user_id +
          "</td>" +
          "<td>" +
          "<img src=" +
          val.pic +
          ">" +
          "</td>" +
          "<td>" +
          name +
          "</td>" +
          "<td>" +
          val.email +
          "</td>" +
          "<td>" +
          val.number +
          "</td>" +
          "<td>" +
          val.status +
          "</td>" +
          "<td>" +
          val.date_created +
          "</td>" +
          "</tr>";

        display.append(div);
      });
    },
  });

  $.ajax({
    type: "GET",
    url: "../Data/Audit.json",
    success: function (result) {
      var log = result;
      var display = $("#audit-log-list");

      $.each(log, function (key, val) {
        var div;
        div =
          "<tr>" +
          "<td>" +
          val.audit_id +
          "</td>" +
          "<td>" +
          "<img src=" +
          val.pic +
          ">" +
          "</td>" +
          "<td>" +
          val.user_name +
          "</td>" +
          "<td>" +
          val.activity +
          "</td>" +
          "<td>" +
          val.date_added +
          "</td>" +
          "</tr>";

        display.append(div);
      });

      if (log.length > 0) {
        jQuery("#log-table").DataTable();
      }
    },
  });

  $.ajax({
    type: "GET",
    url: "../Data/Error.json",
    success: function (result) {
      var log = result;
      var display = $("#error-log-list");

      $.each(log, function (key, val) {
        var div;
        div =
          "<tr>" +
          "<td>" +
          val.exception_id +
          "</td>" +
          "<td>" +
          val.action +
          "</td>" +
          "<td>" +
          val.exception +
          "</td>" +
          "<td>" +
          val.date_added +
          "</td>" +
          "</tr>";

        display.append(div);
      });

      if (log.length > 0) {
        jQuery("#error-log-table").DataTable();
      }
    },
  });

  $.ajax({
    type: "GET",
    url: "../Data/Location.json",
    success: function (result) {
      var location = result;
      var display = $("#rate-list");

      $.each(location, function (key, val) {
        var div;
        div =
          "<tr>" +
          "<td>" +
          val.location_id +
          "</td>" +
          "<td>" +
          val.city +
          "</td>" +
          "<td>" +
          val.state +
          "</td>" +
          "<td>" +
          val.price +
          "</td>" +
          "<td>" +
          val.delivery_to +
          "</td>" +
          "<td>" +
          val.updated_at +
          "</td>" +
          "<td>" +
          "<button class='btn btn-outline-primary py-2' style='border-radius:0;' data-toggle='modal' data-target='#rate-update-modal'>Update</button>" +
          "</td>" +
          "</tr>";

        display.append(div);
      });

      if (location.length > 0) {
        jQuery("#rate-table").DataTable();
      }
    },
  });
});
