//! jQuery syntax
/*

    $(selector).methodOrFunction()

*/

$("#menu").on("click", () => {
  $(".menu-content").toggle();
});

$("body").css("background", "red");
