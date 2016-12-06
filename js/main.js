$(document).ready(function(){
  //microinteraction landing headline
  $(".header-content").hide();
  $(".header-content").fadeIn(1000);

  //scroll to top show
  $(document).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
  });
  //scroll to top action
  $('.go-top').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          return false;
      });
  });

  $('.icon-arrow-down').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 800 }, 'slow');
          return false;
      });
  });

  // $(".book-scrool").draggable({
  //   scroll:true,
  //   start: function(){
  //     $(this).data("startingScrollTop",$(this).parent().scrollTop());
  //   },
  //   drag: function(event,ui){
  //     var st = parseInt($(this).data("startingScrollTop"));
  //     ui.position.top -= $(this).parent().scrollTop() - st;
  //   }
  // });
});
