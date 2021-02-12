$(function(){
  $(".q-list").click(function(){
    var $answer=$(this).find(".answer");
    if($answer.hasClass("open")){
      $answer.removeClass("open");
      $(this).find("span").text("🔻");
    }else{
      $answer.addClass("open");
      $(this).find("span").text("🔺");
    };
  });
});