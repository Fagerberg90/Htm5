$(document).ready(function () {
    $("select").change(function () {
        $(this).find("option:selected").each(function () {
            if ($(this).attr("value") == "happy") {
                $(".box").not(".happy").hide();
                $(".happy").show();
            }
            else if ($(this).attr("value") == "good") {
                $(".box").not(".good").hide();
                $(".good").show();
            }
            else if ($(this).attr("value") == "sad") {
                $(".box").not(".sad").hide();
                $(".sad").show();
            }
            else {
                $(".box").hide();
            }
        });
    }).change();
});