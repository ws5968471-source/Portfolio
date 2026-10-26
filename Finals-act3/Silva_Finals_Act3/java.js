$(document).ready(function(){
    $("#stud1").text("My Student Profile")

    $("#btntitle").click(function(){
        $(this).css("background","yellow")
        $("#stud1").text("Welcome To MY Profile")
    })

    $("#btnhide").click(function(){
        $("#profile1").hide("slow")
    })

    $("btntitle").click(function(){
        $("#message").text("Your clicked the button")
        $(this).css("background","yellow")
    })

})