!function(e){"use strict";function n(){if(e(".main-header").length){var n=e(window).scrollTop(),t=e(".main-header"),i=e(".scroll-to-top");n>=50?(t.addClass("fixed-header"),i.fadeIn(300)):(t.removeClass("fixed-header"),i.fadeOut(300))}}if(n(),e(".main-header .navigation li.dropdown ul").length&&(e(".main-header .navigation li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'),e(".main-header .navigation li.dropdown .dropdown-btn").on("click",(function(){e(this).prev("ul").slideToggle(500)})),e(".fullscreen-menu .navigation li.dropdown > a").on("click",(function(){e(this).next("ul").slideToggle(500)})),e(".navigation li.dropdown > a").on("click",(function(e){e.preventDefault()}))),e(".hidden-bar,.fullscreen-menu").length){var t=e(".hidden-bar"),i=e(".nav-toggler"),a=e(".hidden-bar-closer,.close-menu");e(".hidden-bar-wrapper").mCustomScrollbar(),i.on("click",(function(){e("body").addClass("visible-menu-bar"),t.addClass("visible-sidebar")})),a.on("click",(function(){e("body").removeClass("visible-menu-bar"),t.removeClass("visible-sidebar")}))}var o;function s(){if(e(".masonry-items-container").length){var n=e(window),t=e(".masonry-items-container");t.isotope({itemSelector:".masonry-item",masonry:{columnWidth:".masonry-item.col-md-4"},animationOptions:{duration:500,easing:"linear"}}),n.bind("resize",(function(){t.isotope({itemSelector:".masonry-item",animationOptions:{duration:500,easing:"linear",queue:!1}})}))}}function r(){if(e(".sortable-masonry").length){var n=e(window),t=e(".sortable-masonry .items-container"),i=e(".filter-btns");t.isotope({filter:"*",masonry:{columnWidth:".masonry-item"},animationOptions:{duration:500,easing:"linear"}}),i.find("li").on("click",(function(){var n=e(this).attr("data-filter");try{t.isotope({filter:n,animationOptions:{duration:500,easing:"linear",queue:!1}})}catch(e){}return!1})),n.bind("resize",(function(){var e=i.find("li.active").attr("data-filter");t.isotope({filter:e,animationOptions:{duration:500,easing:"linear",queue:!1}})}));var a=e(".filter-btns li");a.on("click",(function(){var n=e(this);n.hasClass("active")||(a.removeClass("active"),n.addClass("active"))}))}}((o=e(".hidden-bar .side-menu")).find(".dropdown").children("a").append((function(){return'<button type="button" class="btn expander"><i class="icon fa fa-angle-right"></i></button>'})),o.find(".dropdown").children("ul").hide(),o.find(".btn.expander").each((function(){e(this).on("click",(function(){return e(this).parent().parent().children("ul").slideToggle(),e(this).parent().toggleClass("current"),e(this).find("i").toggleClass("fa-angle-right fa-angle-down"),!1}))})),s(),r(),e(".progress-line").length&&e(".progress-line").appear((function(){var n=e(this),t=n.data("width");e(n).css("width",t+"%")}),{accY:0}),e(".count-box").length&&e(".count-box").appear((function(){var n=e(this),t=n.find(".count-text").attr("data-stop"),i=parseInt(n.find(".count-text").attr("data-speed"),10);n.hasClass("counted")||(n.addClass("counted"),e({countNum:n.find(".count-text").text()}).animate({countNum:t},{duration:i,easing:"linear",step:function(){n.find(".count-text").text(Math.floor(this.countNum))},complete:function(){n.find(".count-text").text(this.countNum)}}))}),{accY:0}),e(".four-item-carousel").length&&e(".four-item-carousel").owlCarousel({loop:!0,margin:0,nav:!0,smartSpeed:500,autoplay:4e3,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},480:{items:1},600:{items:2},800:{items:3},1024:{items:3},1200:{items:4}}}),e(".single-item-carousel").length&&e(".single-item-carousel").owlCarousel({loop:!0,margin:0,nav:!0,smartSpeed:500,autoplay:4e3,navText:['<span class="flaticon-left-arrow"></span>','<span class="flaticon-arrow-pointing-to-right"></span>'],responsive:{0:{items:1},480:{items:1},600:{items:1},800:{items:1},1024:{items:1}}}),e(".filter-list").length&&e(".filter-list").mixItUp({}),e(".lightbox-image").length&&e(".lightbox-image").fancybox({openEffect:"fade",closeEffect:"fade",helpers:{media:{}}}),e("#contact-form").length&&e("#contact-form").validate({rules:{username:{required:!0},email:{required:!0,email:!0},phone:{required:!0},message:{required:!0}}}),e(".scroll-to-target").length&&e(".scroll-to-target").on("click",(function(){var n=e(this).attr("data-target");e("html, body").animate({scrollTop:e(n).offset().top},1e3)})),e(".wow").length)&&new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init();e(window).on("scroll",(function(){n()})),e(window).on("load",(function(){e(".preloader").length&&e(".preloader").delay(200).fadeOut(500),r(),s()}))}(window.jQuery);