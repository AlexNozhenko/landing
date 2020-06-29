$(function(){
  $(".button_call_top, .button_icon_phone, .button_order, .button_call_footer").click(function(){
    // $(".form-container").css("display", "flex");
    $(".form-container").removeClass("fade");
    $(".form__input_text").addClass("animation");
  });

  $(".button_icon_menu").click(function(){
    $(".popup-menu-wrap").removeClass("fade");
    $(".button_icon_menu").hide();
    $(".button_icon_close").show();
  });

  $(".button_icon_close").click(function(){
    $(".button_icon_close").hide();
    $(".popup-menu-wrap").addClass("fade");
    $(".button_icon_menu").show();
  });

  $(document).mouseup(function (e){ 
    var div = $(".form"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      $(".form-container").addClass("fade");
      $(".form__input_text").removeClass("animation");
    }
  });

  $(document).ready(function(){
    $(".menu, .menu-footer, .popup-menu").on("click","a", function (event) {
        event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
      });
  });

  $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:2
                },
                1100:{
                    items:3
                }
            }
        });
    });

  $(".phone_mask").inputmask({"mask": "+7 (999) 999-9999"});

  $(".form").each(function () {
    $(this).validate({
      errorPlacement(error, element) {
        return true;
      },
      focusInvalid: false,
      rules: {
        phone: {
          required: true,
        },
        name: {
          required: true,
          // maxlength: 5,
        },
        email: {
          required: true,
          email: true,
        }
      } 
    }) 
  })
  //     submitHandler(form) {
  //     let th = $(form);

  //     $.ajax({
  //     type: 'POST',
  //     url: 'mail.php',
  //     data: th.serialize(),
  //     // eslint-disable-next-line func-names
  //   }).done(() => {
  //     console.log("Yes");
      
  //     th.trigger('reset');
  //   });

  //   return false;
  //   }
  });
