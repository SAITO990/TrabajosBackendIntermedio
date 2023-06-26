$(function() {
    console.log($("h1").html());
    console.log($("li").hasClass("elemento9"));

    $("<h2>Dominando métodos jQuery</h2>").insertAfter("h1");
    $("h2").addClass("subtitulo");

    $(".subtitulo").clone().insertAfter("ul").attr("id", "segundo");

    $(".esconder").click(function() { 
        $(".elemento2, .elemento5").hide();
    });

    $(".mostrar").click(function() {
        $(".elemento2, .elemento5").show();
    });
});
