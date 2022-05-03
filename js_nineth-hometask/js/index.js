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
  const $divElems = $(this);
  $divElems.prev().before($divElems);
});

//-------------------------------------Task4-----------------------------

$('[type="checkbox"]').change(function () {
  if (this.checked && $(":checked").length == 3) {
    $('[type="checkbox"]').prop("disabled", true);
  }
});

function mul(...rest) {
  let result = 1;
  let isNumber;
  for (let i of rest) {
    if (typeof i == 'number') {
      result *= i;
      isNumber = true;
    }
  }
  return isNumber ? result : 0:
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));