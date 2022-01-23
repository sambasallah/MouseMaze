$(document).ready(() => {
    $(".boundary").mouseenter(() => {
       $(".boundary").addClass("youlose");
       $("#status").text("You Lose!")
    });

    $("#start").click(() => {
        $(".boundary").removeClass("youlose");
    });

    $("#end").mouseover(() => {
       if(!$("#maze div").hasClass("youlose")) {
         $("#status").text("You win!");
       }
    });
});