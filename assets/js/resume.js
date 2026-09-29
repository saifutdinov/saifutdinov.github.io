(function () {
  "use strict";
  var openedByPrint = [];
  window.addEventListener("beforeprint", function () {
    document.querySelectorAll("details.fold:not([open])").forEach(function (d) {
      d.open = true;
      openedByPrint.push(d);
    });
  });
  window.addEventListener("afterprint", function () {
    openedByPrint.forEach(function (d) {
      d.open = false;
    });
    openedByPrint = [];
  });
})();
