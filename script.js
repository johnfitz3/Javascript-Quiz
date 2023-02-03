$(".question1").hide();
$(".question2").hide();
$(".question3").hide();
$(".question4").hide();
$(".question5").hide();


$(document).ready(function(){
    $("button").click(function(){
      $(".intro").hide();
    });
    $("button").click(function(){
        $(".question1").show();

});
});

$(document).ready(function(){
    $(".ans1").click(function(){
      $(".question1").hide();
    });
    $(".ans1").click(function(){
        $(".question2").show();

});
});


$(document).ready(function(){
    $("#ans2").click(function(){
      $(".question2").hide();
    });
    $("#ans2").click(function(){
        $(".question3").show();

});
});

$(document).ready(function(){
    $("#ans3").click(function(){
      $(".question3").hide();
    });



    $("#ans3").click(function(){
        $(".question4").show();

});
});

$(document).ready(function(){
    $("#ans4").click(function(){
      $(".question4").hide();
    });
    $("#ans4").click(function(){
        $(".question5").show();

});
});

