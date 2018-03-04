var mens = false;
var womens = false;
var kids = false;
var bdrop = true;
var sdrop = true;
var shdrop = true;
var pdrop = true;
var showb = false;
var shows = false;
var showsh = false;
var age = "all";

var brands = ["Derek Cardigan","Kam Dhillon","Love","Michelle Lane","Calvin Klein","Ann Taylor","Other"];
var brandClass = ["Derek","Kam","Love","Michelle","Calvin","Ann","Other"];

var styles = ["Rimless","Semi-Rimless","Full-Frame"];
var shapes = ["Aviator","Cat-Eye","Oval","Rectangle","D-Frame","Round"];
var j = 0;

$("#men").click(function(){
  mens = !mens;
  if(mens){
    $("#men").css("opacity","1");
    $('#women').css("opacity","0.5");
    $('#kids').css("opacity","0.5");
    age="men";
  } else{
    $(".ageFilt").css("opacity","1");
    $('#women').css("opacity","1");
    $('#kids').css("opacity","1");
    age="all";
  }
  kids = false;
  womens = false;
});
$("#women").click(function(){
  womens = !womens;
  if(womens){
    $("#women").css("opacity","1");
    $('#men').css("opacity","0.5");
    $('#kids').css("opacity","0.5");
    age="women";
  } else{
    $(".ageFilt").css("opacity","1");
    $('#kids').css("opacity","1");
    $('#men').css("opacity","1");
    age="all";
  }
  kids = false;
  mens = false;
});
$("#kids").click(function(){
  kids = !kids;
  if(kids){
    $("#kids").css("opacity","1");
    $('#women').css("opacity","0.5");
    $('#men').css("opacity","0.5");
    age="kids";
  } else{
    $(".ageFilt").css("opacity","1");
    $('#women').css("opacity","1");
    $('#men').css("opacity","1");
    age = "all";
  }
  mens = false;
  womens = false;
});

$(".btndrop").click(function(){
  var a = this.id;
  
  console.log(a);
  if(this.id == "brands" && bdrop){
    $("#brandsdrop").show();
    bdrop = false;
  } else if(this.id == "styles" && sdrop){
    $("#stylesdrop").show();
    sdrop = false;
  } else if(this.id == "shapes" && shdrop){
    $("#shapesdrop").show();
    shdrop = false;
  } else if(this.id == "brands"){
    $("#brandsdrop").hide();
    bdrop = true;
  } else if(this.id == "styles"){
    $("#stylesdrop").hide();
    sdrop = true;
  } else if(this.id == "shapes"){
    $("#shapesdrop").hide();
    shdrop = true;
  } else if(this.id == "prescription" && pdrop){
    $("#pdrop").show();
    pdrop = false;
  } else if(this.id == "prescription"){
    $("#pdrop").hide();
    pdrop = true;
  }
});

var $btns = $('.btn1').click(function() {
  console.log(this.id);
  if (this.id == 'all') {
    $('#parent > div').fadeIn(0);
  } else {
    var el = $('.' + this.id);
    $('#parent > div').hide();
    $(el).each(function(index,item){
      var b = $(item).hasClass(age);
      console.log(b +" " + el);
      if(b){
        $(item).show();
      }
    });
  }
})
var $btns = $('.btn3').click(function() {
  if (this.id == 'all' || age=="all") {
    $('#parent > div').fadeIn(0);
  } else {
    var el = $('.' + this.id);
    $('#parent > div').hide();
    $(el).each(function(index,item){
      var b = $(item).hasClass(age);
      console.log(b +" " + el);
      if(b){
        $(item).show();
      }
    });
  }
})
$("#btndrop").click(function(){
  var a = this.id;
  if(a=="brands"){
    $("#brandsdrop").css("display","block");
  }else if(a=="styles"){
    $("#stylesdrop").css("display","block");
  }else if(a=="prescription"){
    $("#pdrop").css("display","block");
  }else if(a=="shapes"){
    $("#shapessdrop").css("display","block");
  } 
});
$("#brands").click(function(){
  $("brandsdrop").slideDown();
})
$(document).ready(function(){
  $("#all").addClass(".btn1");
});