var mens = false;
var womens = false;
var kids = false;
var bdrop = false;
var sdrop = false;
var shdrop = false;
var showb = false;
var shows = false;
var showsh = false;

var brands = ["Derek Cardigan","Kam Dhillon","Love","Michelle Lane","Calvin Klein","Ann Taylor","Other"];
var brandClass = ["Derek","Kam","Love","Michelle","Calvin","Ann","Other"];

var styles = ["Rimless","Semi-Rimless","Full-Frame"];
var shapes = ["Aviator","Cat-Eye","Oval","Rectangle","D-Frame","Round"];
var j = 0;

$("#men").click(function(){
  mens = !mens;
  if(mens){
    $("#men").show();
    $(".ageFilt").css("margin-left","2%");
    $(".ageFilt").css("width","100%");
    $('#women').hide();
    $('#kids').hide();
  } else{
    $(".ageFilt").css("margin","0 0.5% 0 0.5%");
    $(".ageFilt").css("width","32%");
    $('#women').show();
    $('#kids').show();
  }
  kids = false;
  womens = false;
});
$("#women").click(function(){
  womens = !womens;
  if(womens){
    $("#women").show();
    $(".ageFilt").css("margin-left","2%");
    $(".ageFilt").css("width","96%");
    $('#men').hide();
    $('#kids').hide();
  } else{
    $(".ageFilt").css("margin","0 0.5% 0 0.5%");
    $(".ageFilt").css("width","32%");
    $('#men').show();
    $('#kids').show();
  }
  kids = false;
  mens = false;
});
$("#kids").click(function(){
  kids = !kids;
  if(kids){
    $("#kids").show();
    $(".ageFilt").css("margin-left","0%");
    $(".ageFilt").css("width","100%");
    $('#women').hide();
    $('#men').hide();
  } else{
    $(".ageFilt").css("margin","0 0.5% 0 0.5%");
    $(".ageFilt").css("width","32%");
    $('#women').show();
    $('#men').show();
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
  }
});

var $btns = $('.btn1').click(function() {
  console.log(this.id);
  if (this.id == 'all') {
    $('#parent > div').fadeIn(0);
  } else {
    var $el = $('.' + this.id).delay(100).fadeIn(0);
    $('#parent > div').not($el).hide();
  }
})

$("#brands").click(function(){
  $("brandsdrop").slideDown();
})
$(document).ready(function(){
  $("#all").addClass(".btn1");
});