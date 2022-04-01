$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};
    
    //tooltip
    $('.js-tooltip').tooltip({
        position: { my: "right+20 bottom-12", at: "right top" },
    })
    
    
    //mobile popup
    $('.js-popup-mobile-open').on('click', function() {
        let popupData = $(this).attr('data-popup');
        $('.js-popup-mobile.active').removeClass('active');
        $('.js-popup-mobile[data-popup="'+popupData+'"]').addClass('active');
        $('body').addClass('popup-show');
        return false;
    })
    $('.js-popup-mobile-close').on('click', function() {
        $(this).parents('.js-popup-mobile').removeClass('active');
        $('body').removeClass('popup-show');
        return false;
    })
    
    
    //menu
    $('.main-menu-wrap .btn-menu').on('click', function() {
        if ($(this).parent().find('.submenu-outer-wrap')) {
            if ($(this).parent().hasClass('open')) {
                $(this).parent().removeClass('open');
                $(this).parents('.menu-content-block').removeClass('open');
            } else {
                $(this).parents('.main-menu-wrap').find('.open').removeClass('open');
                $(this).parents('.menu-content-block').addClass('open');
                $(this).parent().addClass('open');
            }
            return false;
        }
    })
    $('.main-menu-wrap .js-menu-edit').on('click', function() {
        $(this).parent('.submenu-outer-wrap').addClass('submenu-edit');
        return false;
    })
    $('.main-menu-wrap .js-menu-ok').on('click', function() {
        $(this).parent('.submenu-outer-wrap').removeClass('submenu-edit');
        return false;
    })
    $('.main-menu-wrap .js-menu-close').on('click', function() {
        $(this).parent('.submenu-outer-wrap').removeClass('submenu-edit');
        $(this).parents('li').removeClass('open');
        $(this).parents('.menu-content-block').removeClass('open');
        return false;
    })
    $('.main-menu-wrap .frm-select-menu.menu-main').on('click', function() {
        if ($(this).find('input').is(':checked')) {
            $(this).next('ul').find('input').prop( "checked", true );
        } else {
            $(this).next('ul').find('input').prop( "checked", false );
        }
    })
    $('.main-menu-wrap .menu .btn-menu').each(function() {
        $(this).prev('.submenu-outer-wrap').css('top', $(this).position().top)
    })

    //select content toggle
    $('input[data-content]').each(function () {
        if ($(this).is(':checked')) {
            let selectContent = $(this).attr('data-content');
            $('.frm-content[data-content="' + selectContent + '"]').addClass('active');
        }
    })
    $('input[data-content]').on('click', function () {
        $('.frm-content.active').removeClass('active');
        $('input[data-content]').each(function () {
            if ($(this).is(':checked')) {
                let selectContent = $(this).attr('data-content');
                $('.frm-content[data-content="' + selectContent + '"]').addClass('active');
            }
        })
    })
    $('.btn[data-content]').on('click', function() {
        let dataContent = $(this).attr('data-content');
        $(this).attr('disabled', 'disabled');
        $('.frm-content[data-content="' + dataContent + '"]').slideDown(200);
        return false;
    })
    
    
    //view
    if ($('.js-view-toggle').hasClass('active')) {
        $('.js-view-box').addClass('view-rows').removeClass('view-grid');
    } else {
        $('.js-view-box').removeClass('view-rows').addClass('view-grid');
    }
    $('.js-view-toggle').on('click', function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.js-view-box').addClass('view-rows').removeClass('view-grid');
        } else {
            $('.js-view-box').removeClass('view-rows').addClass('view-grid');
        }
        return false;
    })


    //datepicker
    $('.js-datepicker .form-input').datepicker({
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        beforeShow: function( input ) {
            setTimeout(function() {
                var buttonPane = $( input )
                    .datepicker( "widget" )
                    .find( ".ui-datepicker-buttonpane" );

                
                //button morning
                $( "<button>", {
                    text: "morning",
                    click: function() {
                        //function
                    }
                }).appendTo( buttonPane ).addClass("elm-datepicker-button ui-datepicker-morning ui-state-default ui-priority-primary ui-corner-all");
                
                //button day
                $( "<button>", {
                    text: "day",
                    click: function() {
                        //function
                    }
                }).appendTo( buttonPane ).addClass("elm-datepicker-button ui-datepicker-day ui-state-default ui-priority-primary ui-corner-all");
                
                //button evening
                $( "<button>", {
                    text: "evening",
                    click: function() {
                        //function
                    }
                }).appendTo( buttonPane ).addClass("elm-datepicker-button ui-datepicker-evening ui-state-default ui-priority-primary ui-corner-all");
                
                //button night
                $( "<button>", {
                    text: "night",
                    click: function() {
                        //function
                    }
                }).appendTo( buttonPane ).addClass("elm-datepicker-button ui-datepicker-night ui-state-default ui-priority-primary ui-corner-all");
                
                
            }, 1 );
        },
        onChangeMonthYear: function( year, month, instance ) {
            setTimeout(function() {
                var buttonPane = $( instance )
                    .datepicker( "widget" )
                    .find( ".ui-datepicker-buttonpane" );


                //button morning
                $( "<button>", {
                    text: "morning",
                    click: function() {
                        //function
                    }
                }).appendTo( buttonPane ).addClass("elm-datepicker-button ui-datepicker-morning ui-state-default ui-priority-primary ui-corner-all");

                //button day
                $( "<button>", {
                    text: "day",
                    click: function() {
                        //function
                    }
                }).appendTo( buttonPane ).addClass("elm-datepicker-button ui-datepicker-day ui-state-default ui-priority-primary ui-corner-all");

                //button evening
                $( "<button>", {
                    text: "evening",
                    click: function() {
                        //function
                    }
                }).appendTo( buttonPane ).addClass("elm-datepicker-button ui-datepicker-evening ui-state-default ui-priority-primary ui-corner-all");

                //button night
                $( "<button>", {
                    text: "night",
                    click: function() {
                        //function
                    }
                }).appendTo( buttonPane ).addClass("elm-datepicker-button ui-datepicker-night ui-state-default ui-priority-primary ui-corner-all");


            }, 1 );
        }
    });
    $('.js-datepicker-inline').datepicker({
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        showOtherMonths: true,
        selectOtherMonths: true
    });
    
	
    //popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})


    //btn tgl
    $('.js-btn-tgl').on('click', function () {
        $(this).toggleClass('active');
        return false;
    })
    
    
    //field inout
    $('.js-field-input .js-field-clear').on('click', function() {
        $(this).parent('.js-field-input')
            .removeClass('inp-valid')
            .find('.form-input').val('');
        return false;
    })
    //select2
    $('.js-field-input .select2').each(function() {
        let sPl = $(this).attr('data-placeholder');
        console.log(sPl);
        $(this).select2({
            placeholder: sPl
        })
    })
    $('.js-field-input .select2').on('select2:open', function(e) {
        $(this).parent('.js-field-input').addClass('inp-active');
    })
    $('.js-field-input .select2').on('select2:close', function(e) {
        $(this).parent('.js-field-input').removeClass('inp-active');
    })
    $('.js-field-input .select2').on('select2:select', function(e) {
        $(this).parent('.js-field-input').removeClass('inp-active').addClass('inp-valid');
    })
    $('.js-field-input .select2').on('select2:clearing', function(e) {
        $(this).parent('.js-field-input').removeClass('inp-valid');
    })
	
});
window.onload = function () {
    //field input
    let fieldInput = document.querySelectorAll('.js-field-input');
    if (fieldInput.length > 0) {
        for (i = 0; i < fieldInput.length; i++) {
            fieldInput[i].querySelector('label').onclick = function () {
                this.parentElement.classList.add('inp-active');
                this.parentElement.classList.remove('inp-valid');
                this.parentElement.querySelector('input').focus();
            }
            //input
            if (fieldInput[i].querySelector('input')) {
                fieldInput[i].querySelector('input').onfocus = function () {
                    this.parentElement.classList.add('inp-active');
                    this.parentElement.classList.remove('inp-valid');
                }
                fieldInput[i].querySelector('input').onblur = function () {
                    this.parentElement.classList.remove('inp-active');
                    if (this.value.length == "0") {
                        this.parentElement.classList.remove('inp-valid');
                    } else {
                        this.parentElement.classList.add('inp-valid');
                    }
                }
                //select
            } else if (fieldInput[i].querySelector('select')) {
                fieldInput[i].querySelector('select').onchange = function () {
                    this.parentElement.classList.add('inp-active');
                    this.parentElement.classList.remove('inp-valid');
                }
                fieldInput[i].querySelector('select').onblur = function () {
                    this.parentElement.classList.remove('inp-active');
                    if (this.options[this.selectedIndex].text === "") {
                        this.parentElement.classList.remove('inp-valid');
                    } else {
                        this.parentElement.classList.add('inp-valid');
                    }
                }
            }
        }
    }
}

