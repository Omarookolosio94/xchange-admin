function Redirect() {
  window.location.href = "./Pages/Order_Pending.html";
}

(function ($) {
  "use strict";

  $.ajax({
    type: "GET",
    url: "../../template/Data/Orders.json",
    success: function (result) {
      var item = result;
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
          "</td>";

        display.append(div);
      });
    },
  });
})(jQuery);
