//******************** Nineth hometask *********************

//-------------------------------------Task1-----------------------------
$("a[href^='https://']").attr("target", "_blank");

//-------------------------------------Task2-----------------------------

$(".head")
  .css("background-color", "green")
  .find(".inner")
  .css("fontSize", "5px");

//-------------------------------------Task3-----------------------------
$("h3+div").each(function () {
  $("h3").before($(this));
});

//-------------------------------------Task4-----------------------------

$('[type="checkbox"]').change(function () {
  if (this.checked && $(":checked").length == 3) {
    $('[type="checkbox"]').prop("disabled", true);
  }
});
