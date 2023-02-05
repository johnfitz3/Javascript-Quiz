$(".question1").hide();
$(".question2").hide();
$(".question3").hide();
$(".question4").hide();
$(".question5").hide();

var timer2 = "01:00";
var interval = setInterval(function() {


  var timer = timer2.split(':');
 
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  $('.countdown').html(minutes + ':' + seconds);
  timer2 = minutes + ':' + seconds;
}, 1000);


$(document).ready(function(){
    $("button").click(function(){
      $(".intro").hide();
    });
    $("button").click(function(){
        $(".question1").show();

});
});


function correct() {
  const right = document.createElement("p");
  const textNode = document.createTextNode("Correct!");
}

function incorrect() {
  const wrong = document.createElement("p");
  const textNode = document.createTextNode("Incorrect!");
}



$(document).ready(function(){
    $("#q1-ans1").click(function(){
      $(".question1").hide();
      incorrect();
    });
    $("#q1-ans1").click(function(){
        $(".question2").show();

});
});
$(document).ready(function(){
    $("#q1-ans2").click(function(){
      $(".question1").hide();
      correct();
    });
    $("#q1-ans2").click(function(){
        $(".question2").show();

});
});
$(document).ready(function(){
    $("#q1-ans3").click(function(){
      $(".question1").hide();
      incorrect();
    });
    $("#q1-ans3").click(function(){
        $(".question2").show();

});
});
$(document).ready(function(){
    $("#q1-ans4").click(function(){
      $(".question1").hide();
      incorrect();
    });
    $("#q1-ans4").click(function(){
        $(".question2").show();

});
});









$(document).ready(function(){
    $("#q2-ans1").click(function(){
      $(".question2").hide();
      incorrect();
    });
    $("#q2-ans1").click(function(){
        $(".question3").show();

});
});
$(document).ready(function(){
    $("#q2-ans2").click(function(){
      $(".question2").hide();
      incorrect();
    });
    $("#q2-ans2").click(function(){
        $(".question3").show();

});
});
$(document).ready(function(){
    $("#q2-ans3").click(function(){
      $(".question2").hide();
      incorrect();
    });
    $("#q2-ans3").click(function(){
        $(".question3").show();

});
});
$(document).ready(function(){
    $("#q2-ans4").click(function(){
      $(".question2").hide();
      correct();
    });
    $("#q2-ans4").click(function(){
        $(".question3").show();

});
});








$(document).ready(function(){
    $("#q3-ans1").click(function(){
      $(".question3").hide();
      incorrect();
    });



    $("#q3-ans1").click(function(){
        $(".question4").show();

});
});
$(document).ready(function(){
    $("#q3-ans2").click(function(){
      $(".question3").hide();
      incorrect();
    });



    $("#q3-ans2").click(function(){
        $(".question4").show();

});
});
$(document).ready(function(){
    $("#q3-ans3").click(function(){
      $(".question3").hide();
      correct();
    });



    $("#q3-ans3").click(function(){
        $(".question4").show();

});
});
$(document).ready(function(){
    $("#q3-ans4").click(function(){
      $(".question3").hide();
      incorrect();
    });



    $("#q3-ans4").click(function(){
        $(".question4").show();

});
});






$(document).ready(function(){
    $("#q4-ans1").click(function(){
      $(".question4").hide();
      incorrect();
    });
    $("#q4-ans1").click(function(){
        $(".question5").show();

});
});

$(document).ready(function(){
    $("#q4-ans2").click(function(){
      $(".question4").hide();
      incorrect();
    });
    $("#q4-ans2").click(function(){
        $(".question5").show();

});
});
$(document).ready(function(){
    $("#q4-ans3").click(function(){
      $(".question4").hide();
      incorrect();
    });
    $("#q4-ans3").click(function(){
        $(".question5").show();

});
});
$(document).ready(function(){
    $("#q4-ans4").click(function(){
      $(".question4").hide();
      correct();
    });
    $("#q4-ans4").click(function(){
        $(".question5").show();

});
});







$(document).ready(function(){
  $("#q5-ans1").click(function(){
    $(".question5").hide();
    incorrect();
  });
  $("#q5-ans1").click(function(){
     location.assign(results.html);

});
});

$(document).ready(function(){
  $("#q5-ans2").click(function(){
    $(".question5").hide();
    incorrect();
  });
  $("#q5-ans2").click(function(){
    location.assign(results.html);

});
});
$(document).ready(function(){
  $("#q5-ans3").click(function(){
    $(".question5").hide();
    incorrect();
  });
  $("#q5-ans3").click(function(){
    location.assign(results.html);

});
});
$(document).ready(function(){
  $("#q5-ans4").click(function(){
    $(".question5").hide();
    correct();
  });
  $("#q5-ans4").click(function(){
    location.assign(results.html);

});
});