function jeda(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

var sld = (x) => {
  $("#main").css("transform", `translateX(-${x}vw)`);
  $(".menu-item").removeClass("m-actv");
  $(".smenu-item").removeClass("sm-actv");

  switch (x) {
    case 0:
      $("#m-h").addClass("m-actv");
      $("#sm-h").addClass("sm-actv");
      break;
    case 100:
      $("#m-p").addClass("m-actv");
      $("#sm-p").addClass("sm-actv");
      break;
    case 200:
      $("#m-c").addClass("m-actv");
      $("#sm-c").addClass("sm-actv");
      break;
  }

  closeProduct();
  $('#side-menu').removeClass('show-side-menu');
};

async function showProduct(id) {
  switch (id) {
    case 0:
      $("#spl3").removeClass("hide");
      $("#ds-title").text("Tesla 3");
      $("#dst-range").text("272");
      $("#dst-ts").text("140");
      $("#dst-tts").text("5.8");
      jeda(100);
      splide3.refresh();
      $("#spc-r-3").removeClass("hide");
      $("#spc-r2-3").removeClass("hide");
      $("#spc-ic-x").removeClass("hide");
      break;
    case 1:
      $("#splS").removeClass("hide");
      $("#ds-title").text("Tesla S");
      $("#dst-range").text("405");
      $("#dst-ts").text("149");
      $("#dst-tts").text("3.1");
      jeda(100);
      splideS.refresh();
      $("#spc-r-s").removeClass("hide");
      $("#spc-r2-s").removeClass("hide");
      $("#spc-ic").removeClass("hide");
      $("#spc-a-s").removeClass("hide");
      $("#spc-com-s").removeClass("hide");
      $("#spc-con-s").removeClass("hide");
      break;
    case 2:
      $("#splY").removeClass("hide");
      $("#ds-title").text("Tesla Y");
      $("#dst-range").text("330");
      $("#dst-ts").text("135");
      $("#dst-tts").text("4.8");
      jeda(100);
      splideY.refresh();
      $("#spc-r-y").removeClass("hide");
      $("#spc-r2-y").removeClass("hide");
      $("#spc-ic").removeClass("hide");
      $("#spc-a-y").removeClass("hide");
      $("#spc-com-y").removeClass("hide");
      $("#spc-con-y").removeClass("hide");
      break;
    case 3:
      $("#splX").removeClass("hide");
      $("#ds-title").text("Tesla X");
      $("#dst-range").text("351");
      $("#dst-ts").text("149");
      $("#dst-tts").text("3.8");
      jeda(100);
      splideX.refresh();
      $("#spc-r-x").removeClass("hide");
      $("#spc-r2-x").removeClass("hide");
      $("#spc-ic").removeClass("hide");
      $("#spc-a-x").removeClass("hide");
      $("#spc-com-x").removeClass("hide");
      $("#spc-con-x").removeClass("hide");
      break;
  }
  $("#prod-detail").css("height", "100%");
  $("#detail-pict").addClass("show-pict");
  $("#detail-specs").addClass("show-specs");
  $("#box-product").css("overflow-y", "hidden");
  await jeda(1000);
}

async function closeProduct() {
  $("#detail-pict").removeClass("show-pict");
  $("#detail-specs").removeClass("show-specs");
  await jeda(800);
  $("#prod-detail").css("height", "0%");
  $("#box-product").css("overflow-y", "scroll");
  $(".splide").addClass("hide");
  $(".collapse").removeClass("show");
  $(".arru").addClass("hide");
  $(".arrd").removeClass("hide");
  $(".spc-r").addClass("hide");
  $(".spc-r2").addClass("hide");
  $("#spc-ic").addClass("hide");
  $("#spc-ic-x").addClass("hide");
  $(".spc-icd").addClass("hide");
}

$("#specAccordion").on("hide.bs.collapse", (e) => {
  $(".arru").addClass("hide");
  $(".arrd").removeClass("hide");
});

$("#specAccordion").on("shown.bs.collapse", (e) => {
  var idTarget = e.target.id;
  $('[aria-controls="' + idTarget + '"]')
    .children(".arrd")
    .addClass("hide");
  $('[aria-controls="' + idTarget + '"]')
    .children(".arru")
    .removeClass("hide");
});

var check_form = () => {
  if (
    $("#input-fname").val() !== "" &&
    $("#input-lname").val() !== "" &&
    $("#input-email").val() !== "" &&
    $("#input-pnum").val() !== "" &&
    $("#inputAddress").val() !== "" &&
    $("#inputCity").val() !== "" &&
    $("#inputState").val() !== "0" &&
    $("#inputZip").val() !== "" &&
    $("#inputProduct").val() !== "0"
  ) {
    $("#btn-buy").removeClass("btn-buy-dissable");
    $("#btn-buy").addClass("btn-buy-enable");
  } else {
    $("#btn-buy").removeClass("btn-buy-enable");
    $("#btn-buy").addClass("btn-buy-dissable");
  }
};

var toggleSideMenu = () => {
  $('#side-menu').toggleClass('show-side-menu');
}
