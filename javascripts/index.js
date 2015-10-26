$().ready(function(){
  // $(".vr_btn").on("click",function(){
  //   $(".vr").toggle();
  // });
  // create_mc_mv_sl page
  // 
    
    var height = $(window).height(); 
    $(".create_mv_sidebar").css({"height" : height-215+ "px" });                                     
   if (navigator.userAgent.match("Firefox") || navigator.userAgent.match("MSIE")) {
    $(".create_mv_sidebar").css({"height" : height-215 + "px" });                                                                          
   }
   $(window).resize(function(){
    var height = $(window).height(); 
    $(".create_mv_sidebar").css({"height" : height-215+ "px" });                                     
   if (navigator.userAgent.match("Firefox") || navigator.userAgent.match("MSIE")) {
    $(".create_mv_sidebar").css({"height" : height-215 + "px" });                                                                          
   }
   });
   
   $(window).resize(function(){
   // Hull Color 垂直置中
   var whei = $(window).height() ;
   var wwid = $(window).width() ;
   // var hhei = $(".hullcolor").height();
   var ans = (whei-497)/2;
   var ans2 = (wwid-800)/2;

   $(".hullcolor").css({"top": ans,"margin-left": ans2});
   if (wwid<767){
    $(".hullcolor").css({"margin-top": "100px","margin-left": "0px","width":"100%"});
   }
});
   var whei = $(window).height() ;
   var wwid = $(window).width() ;
   var ans = (whei-497)/2;var ans2 = (wwid-800)/2;
   
   $(".hullcolor").css({"top": ans,"margin-left": ans2});
   if (wwid<767){
    $(".hullcolor").css({"margin-top": "100px","margin-left": "0px","width":"100%"});
   }
   // Hull Color 換圖
   // checkbox
  $(".color +.item_select").on("click ",function(){
    var color_src = $(this).prev().attr("name");
    // alert(color_src);
   $(".hullcolor").attr("src",color_src).show();
   $("iframe").hide();
    
  });
  //item
  $(".color").on("click ",function(){
    var color_src = $(this).attr("name");
    // alert(color_src);
   $(".hullcolor").attr("src",color_src).show();
   $("iframe").hide(); 
  });
  $(document).click(function(e) {
    var target = e.target;

   // 點其他地方把Hull Color隱藏
   // 360秀出來
    if (!$(target).is('.color,.color +.item_select,.right_icon') && !$(target).parents().is('.color,.color +.item_select,.right_icon') && $(".color").length > 0) {
      $(".hullcolor").hide();   
      $("iframe").show();
    }
   });

  // $(".color,.color +.item_select").on("mouseleave ",function(){
  //   var color_src = $(this).prev().attr("name");
  //   // alert(color_src);
  //  $(".hullcolor").attr("src",color_src).fadeOut();
    
  // });
  
  //why_yachting
  var $one = $('.tab-pane:first', '.tab-content '),
      $three = $('.tab-pane:last', '.tab-content');

  $(".tab_next").click(function () {
 
    var $next,
        $selected = $(".tab-content>.active");
    // get the selected item
    // If next li is empty , get the first
    $next = $selected.next('.tab-pane').length ? $selected.next('.tab-pane') : $one;
    $selected.removeClass("active in");
    $next.addClass('active in');
});

  $(".tab_prev").click(function () {
    var $prev,
        $selected = $(".tab-content>.active");
    // get the selected item
    // If prev li is empty , get the last
    $prev = $selected.prev('.tab-pane').length ? $selected.prev('.tab-pane') : $three;
    $selected.removeClass("active in");
    $prev.addClass('active in');

});

  //our layout
  var $first = $('.slide_img:first', '.mv_bg '),
      $last = $('.slide_img:last', '.mv_bg');
  $(".next").click(function () {
 
    var $next,
        $selected = $(".selected");
    // get the selected item
    // If next li is empty , get the first
    $next = $selected.next('.slide_img').length ? $selected.next('.slide_img') : $first;
    $selected.removeClass("selected");
    $next.addClass('selected');
    var slide = "url("+ $(".selected>img").attr("id")+ ")";

  var height = $(window).height();
   $(".carousel-inner > .item").css({"height" : height-287+ "px" });                                     
   $(".pic1").css({"background" : slide +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic2").css({"background" : slide +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic3").css({"background" : slide +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic4").css({"background" : slide +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic5").css({"background" : slide +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
});

  $(".prev").click(function () {
    var $prev,
        $selected = $(".selected");
    // get the selected item
    // If prev li is empty , get the last
    $prev = $selected.prev('.slide_img').length ? $selected.prev('.slide_img') : $last;
    $selected.removeClass("selected");
    $prev.addClass('selected');
    var slide = "url("+ $(".selected>img").attr("id")+ ")";

  var height = $(window).height();
   $(".carousel-inner > .item").css({"height" : height-287+ "px" });                                     
   $(".pic1").css({"background" : slide +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic2").css({"background" : slide +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic3").css({"background" : slide +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic4").css({"background" : slide +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic5").css({"background" : slide +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
});

  

  $(".slide_iframe a").on("click",function(){
    $("body").find(".cross").show();
  });
  $(".cross").on("click",function(){
    $(this).hide();
  });
  var height = $(window).height();
   if ($("slide_img").length > 0){
  $(".carousel-inner > .item").css({
    "height" : height-280+ "px" 

  });
  }else{
    $(".carousel-inner > .item").css({
          "height": height - 210 + "px"
        });
  }

  

  $(window).resize(function(){

       var height = $(window).height();
           $(".carousel-inner > .item").css({
          "height": height - 210 + "px"
        });
     });
  $("a[rel^='prettyPhoto']").prettyPhoto({"default_width": "100%","default_height": "100%",hd: true});


  $(".menu").find(".hr").hide();

  $("ul>li.dropdown").on("mouseenter ", function(){
  $(this).addClass("open");

  $("ul>li.dropdown").not(this).removeClass("open");  
  $(this).children(".hr").show(0);
  });
  

  $(".slide").on("mouseenter", function(){
  $("body").find("li").removeClass("open");  
  });
  // $(".container").on("mouseenter", function(){
  // $(this).find("ul>li.dropdown").removeClass("open");  
  
  // });

  $("li").on("mouseout", function(){  
  $(this).children(".hr").hide(0);
  });

 
  $("li.dropdown").on("mouseleave", function(){
  $("body").find("li").removeClass("open");
  
  });

  $('.dropdown').on("click",function(){

    $(this).children(".hr").toggle();
  })
  
  // $(".why_nav>li").on("click",function(){
  //  $("li.active").find("a").css({
  //   "text-decoration": "underline",
  //   "font-weight" : "bold",
  //   "color" : "white",
  // });
  // });
  

  // 語系選擇效果
  $('.lang').on("click",function(){
    
    $(this).find(".dropdown-menu").toggle();
  });
  
  $('.lang').on("mouseleave",function(){
    
    $(this).find(".dropdown-menu").hide();
  });

  // $(".create_img").on("mouseenter",function(){
  //    // alert(123);
  //   $(this).animate({
  //     transform: "scale(1.2)"
  //   });
  // });

  // 分頁秀出效果 about_hyperlien  
  $(".about_content_bg").fadeIn(300);
  

  // 分頁秀出效果 about_TBDC
  $(".tbdc_content_bg").fadeIn(300);
  
  // 分頁秀出效果 about_designer
  $(".about_designer_bg").fadeIn(300);
  $(".p_about_designer_bg").fadeIn(300);
  
   // 分頁秀出效果 create
  $(".create_bg").fadeIn(300);
  $(".p_create_bg").fadeIn(300);
  // 分頁秀出效果 modern_vintage 
  $(".mv_bg").fadeIn(300);
  $(".p_mv_bg").fadeIn(300);
  // 分頁秀出效果 why_yachting 
  $(".why_nav_bg").fadeIn(300);
  $(".why_list_bg").fadeIn(300);
  $(".p_why_bg").fadeIn(300);
  
  // 分頁秀出效果 create_mv 
  $(".create_mv_sidebar").fadeIn(300);
  $(".create_mv_price").fadeIn(300);
  $(".p_create_mv_price").fadeIn(300);
  $(".p_create_mv_sidebar").fadeIn(300);



  

   // 側邊欄效果  create_mv,create_sl, create_mc
  $(".mv_down_icon").on("click",function(){
    $(this).fadeOut(300);
    $(this).siblings(".create_mv_sidebar").fadeIn(500);  
    $(this).siblings(".p_create_mv_sidebar").fadeIn(500);  
  });  
  $(".right_icon").on("click", function(){
    // alert(123);
    $(this).parents(".create_mv_sidebar").fadeOut(300);
    $(this).parents(".p_create_mv_sidebar").fadeOut(300);
    $("body").find(".mv_down_icon").fadeIn(300);
  });

  $(".min").click(function(){
    $(".create_mv_price").fadeOut(300);
    $(".create_mv_price_sm").fadeIn(300);
  });
  $(".max").click(function(){
    $(".create_mv_price").fadeIn(300);
    $(".create_mv_price_sm").fadeOut(300);
  });
  $(".p_min").click(function(){
    $(".p_create_mv_price").fadeOut(300);
    $(".p_create_mv_price_sm").fadeIn(300);
  });   
  $(".p_max").click(function(){
    $(".p_create_mv_price").fadeIn(300);
    $(".p_create_mv_price_sm").fadeOut(300);
  });

   // 側邊欄效果 mv sl mc
  $(".down_icon").on("click", function(){
    // alert(123);
    $(this).fadeOut(300);
    $(this).siblings(".our_layout_sidebar").fadeIn(500);  
  });
  $(".left_icon").on("click", function(){
    // alert(123);
    $(this).parents(".our_layout_sidebar").fadeOut(300);
    $("body").find(".down_icon").fadeIn(300);
  });

 

// 
    // gallery效果web   
  
   

   
   // gallery效果phone
   

   // $(document).click(function(e) {
   //  var p_target = e.target;

   //  if (!$(p_target).is('.p_mv_bg') && !$(p_target).parents().is('.p_mv_bg') && $(".p_mv_bg").length > 0) {
   //    // alert(123);
   //      $(".p_img").attr('src',"image/index_1.png"); 
   //  }
   // });

  
  $("li>a").click(function(){
    $(".why_list_bg").animate({scrollTop:0}, '500', function() { 
      // $(".why_text").hide(300).fadeIn(300);  
    });
    


  });


   
  // 顯示金額&更換品項名稱&換圖
  $(".sub_item ,.mid_item").on("mouseenter click",function(){
      // alert(123);
      // 顯示金額
       var price = $(this).next(".item_select").val();
        $(".item_price").html(price);

      // 更換品項名稱  
      var name = $(this).attr("id");
      $(".item_name").html(name);
      
      //換圖
      var img = $(this).next(".item_select").attr("src");
      var img_src = img.substring(1, img.length);
      if (img == null){
      $(".item_img>img").attr("src", "image/logo.png");  
      }else{
      
      // $(".item_img>img").attr("src", img_src);
    }
  });

  $(".color").on("mouseenter click",function(){
      // alert(123);
      // 顯示金額
       var price = $(this).next(".item_select").val();
        $(".item_price").html(price);

      // 更換品項名稱  
      var name = $(this).html();
      $(".item_name").html(name);
      
      //換圖
      var img = $(this).attr("name");
      if (img == null){
      $(".item_img>img").attr("src", "image/logo.png");  
      }else{
      
    //   $(".item_img>img").attr("src", img);
    //   $(".item_img>img").css({"width": "100%",
    // "height": "auto",
    // "margin-top": "0px"});

    }
  });



  // 計算總價
  $(".item_select").click(function(){
    var total = null;


    $("input:checked").each(function(){

    total += parseInt($(this).val()); 
  });

     // $(".total_price").html(total);

  });

  // 換圖

  


  setInterval(function(){ 

  // 內容秀出效果 about_hyperlien   
  $(".content_title").fadeIn(1000);
  $(".content_text").fadeIn(1000); 
  // 內容秀出效果 about_TBDC
  $(".tbdc_title").fadeIn(1000);
  $(".tbdc_text").fadeIn(1000);
  $(".tbdc_text_1").fadeIn(1000);
  $(".tbdc_text_2").fadeIn(1000);
  // 內容秀出效果 create
  $(".create_title").fadeIn(1000);
  $(".create_img").fadeIn(1000);
  // 內容秀出效果 about_designer
  $(".member_row").each(function(index) {
    $(this).delay(500*index).fadeIn(400);
  });
  
  }, 300);
  
  var height = $(window).height();
  var width = $(window).width();
    if (width>767 && $(".create_img").length ==3){
      // alert(height);
      $(".create_img").css({
        "margin-top" : (height-378)/2 + "px"
      });
      $(window).resize(function(){
       var height = $(window).height();
           $(".create_img").css({
        "margin-top" : (height-378)/2 + "px"});
           $(".carousel-inner > .item").css({
          "height": height - 210 + "px"
        });
     });
    }

   if (width>767 && $(".create_mv_sidebar").length > 0){
      // alert(height);
      $(".carousel-inner > .item").css({
          "height": height - 200 + "px"
        });
      $(window).resize(function(){
       var height = $(window).height();
         
           $(".carousel-inner > .item").css({
          "height": height - 200 + "px"
        });
     });
    }


     if ($(".slide_img").length > 0){
      var height = $(window).height();
      var  mv_src = "url(./image/mv/1a.jpg)";

      var  mc_src = "url(./image/mc/1a.jpg)";
      var  sl_src = "url(./image/sl/1a.jpg)";
      var  mv33_src = "url(./image/mv33/1a.jpg)";
      var  sl52_src = "url(./image/sl52/1a.jpg)";
      $(".carousel-inner > .item").css({"height" : height-287+ "px" });                                     
      $(".pic1").css({"background" : sl_src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
      $(".pic2").css({"background" : mc_src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
     $(".pic3").css({"background" : mv_src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
     $(".pic4").css({"background" : mv33_src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
     $(".pic5").css({"background" : sl52_src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});

      
      $(".slide_img>img").on("click",function(){
      // alert(123);
    //   $("body").animate({scrollTop:0}, '500', function() { 
    //   // $(".why_text").hide(300).fadeIn(300);  
    // });
     var height = $(window).height();
   $(".carousel-inner > .item").css({"height" : height-287+ "px" });                                     
      var  src = "url("+ $(this).attr('id') + ")";
   $(".pic1").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic2").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic3").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic4").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic5").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
   });
    $(".slide_img>img").on("click",function(){
       // alert(123);
      
      var  p_src = $(this).attr('id');
   $(".p_img").attr('src',p_src); 
   });

      $(window).resize(function(){
      var height = $(window).height();
           $(".carousel-inner > .item").css({"height" : height-287+ "px" });
           if ($(".slide_img").length > 0 && $(window).width() < 480){
               var  p_src = $(this).attr('id');
              $(".p_img").attr('src',p_src); 
              var height = $(window).height();
              var width = $(window).width();
              $(".carousel-inner > .item").css({"height" : height-287+ "px","margin-top" : 107+ "px" });                                   
              $(".slide_img").css({"height": width*17*94/10000 + "px"});
              $(".slide_iframe").css({"height": width*17*94/10000 + "px"});  

      $(".slide_img>img").on("click",function(){
      
           var height = $(window).height();
         $(".carousel-inner > .item").css({"height" : height-287+ "px","margin-top" : 107+ "px" });                                     
            var  src = "url("+ $(this).attr('src') + ")";

         $(".pic1").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                          "background-size" : "contain",});
         $(".pic2").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                          "background-size" : "contain",});
         $(".pic3").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                          "background-size" : "contain",});
         $(".pic4").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
         $(".pic5").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
         });
    $(".slide_img>img").on("click",function(){
      var  p_src = $(this).attr('src');
        $(".p_img").attr('src',p_src); 
            });

      $(window).resize(function(){
      if (767>$(window).width()>480) {
      var height = $(window).height();
           $(".carousel-inner > .item").css({"height" : height-287+ "px","margin-top" : 0+ "px" });
         }else if ($(window).width()<479) {$(".carousel-inner > .item").css({"height" : height-287+ "px","margin-top" : 107+ "px" });}
     

     });
    } else {

      $(".slide_img").css({"height":  "63px"});
      $(".slide_iframe").css({"height": "63px"}); 

    }


     });
    }  
  
    if ($(".slide_img").length > 0 && $(window).width() < 480){
       var  p_src = $(this).attr('src');
      $(".p_img").attr('src',p_src); 
      var height = $(window).height();
      var width = $(window).width();
      $(".carousel-inner > .item").css({"height" : height-287+ "px","margin-top" : 107+ "px" });                                   
      $(".slide_img").css({"height": width*17*94/10000 + "px"});
      $(".slide_iframe").css({"height": width*17*94/10000 + "px"});

        
      $(".slide_img>img").on("click",function(){
      
     var height = $(window).height();
   var height = $(window).height();
      var  mv_src = "url(./image/mv/1a.jpg)";
      var  mc_src = "url(./image/mc/1a.jpg)";
      var  sl_src = "url(./image/sl/1a.jpg)";
      var  mv33_src = "url(./image/mv33/1a.jpg)";
      var  sl52_src = "url(./image/sl52/1a.jpg)";
      $(".carousel-inner > .item").css({"height" : height-287+ "px" });    
   $(".pic1").css({"background" : sl_src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
      $(".pic2").css({"background" : mc_src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
     $(".pic3").css({"background" : mv_src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
     $(".pic4").css({"background" : mv33_src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
     $(".pic5").css({"background" : sl52_src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
   });
    $(".slide_img>img").on("click",function(){
       // alert(123);
      var height = $(window).height();
   $(".carousel-inner > .item").css({"height" : height-287+ "px" });                                     
      var  src = "url("+ $(this).attr('id') + ")";
   $(".pic1").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic2").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic3").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic4").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain",});
   $(".pic5").css({"background" : src +" "+"no-repeat" +" "+ "center" +" "+"center"+ " "+"",
                    "background-size" : "contain","height" : height-287+ "px"});
   });
      $(window).resize(function(){
      if (767>$(window).width()>480) {
      var height = $(window).height();
           $(".carousel-inner > .item").css({"height" : height-287+ "px","margin-top" : 107+ "px" });
         }else if ($(window).width()<479) {$(".carousel-inner > .item").css({"height" : height-287+ "px","margin-top" : 107+ "px" });}
     });
    } 

  var height = $(window).height();
  var width = $(window).width();
  console.log(height);
  console.log(width);
  if (navigator.userAgent.match("Firefox") || navigator.userAgent.match("MSIE")){
    if($(".slide_img").length > 0){
    $(".carousel-inner > .item").css({"height" : height-280+"px" });  
     }else{
      $(".carousel-inner > .item").css({"height" : height-208+"px" });  
     }
      $(window).resize(function(){
        if($(".slide_img").length > 0){
    $(".carousel-inner > .item").css({"height" : height-280+"px" });  
     }else{
      $(".carousel-inner > .item").css({"height" : height-208+"px" });  
     }
      });
}

});