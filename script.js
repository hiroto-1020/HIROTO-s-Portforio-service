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
const targetElement=document.querySelectorAll("#animation");
  document.addEventListener("scroll",function(){
    for(i=0;i<targetElement.length;i++){
      const getElementDistance=targetElement[i].getBoundingClientRect().top+targetElement[i].clientHeight*.6
      if(window.innerHeight>getElementDistance){
        targetElement[i].classList.add("show");
      }
    }
  })
  