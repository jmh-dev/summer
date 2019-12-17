
$(function(){
    init();
});

const init = () =>{
    bannerHide();
    btnUserMenu();
}

//banner hide
const bannerHide = () =>{

    if(!($("div").hasClass("goto_App"))){
        $("#summerPalaceWrap").addClass("noneBanner")
    }

    $(".btn_banner_close").click(function(){
        $(".goto_App").remove();
        $("#summerPalaceWrap").addClass("noneBanner")
    });
}

//comm tab
const tabCommon = () =>{
    const $tabLi = $(".tab_menu li a");
    $(".tab_contents>div").hide();
    $(".tab_contents>div:first-child").show();

    $tabLi.click(function (index) {
        const tg = $(this);
        let numIndex = tg.parent("li").index()
        $tabLi.parent("li").not(tg.parent("li").addClass("active")).removeClass("active");

        $(".tab_contents>div").not($(".tab_contents>div").eq(numIndex).show()).hide();
    });
}

//all menu slide
const allMenuToggle = () =>{
    $(".toggle_menu h4").click(function(){
        $(".toggle_menu h4").not($(this).toggleClass("active")).removeClass("active");

        $(".toggle_menu h4").next(".detail_menu_list").not($(this).next(".detail_menu_list").stop().slideDown(500)).stop().slideUp(500);

        if($(this).hasClass("active")){
            $(this).next(".detail_menu_list").slideDown(500);
        } else{
            $(this).next(".detail_menu_list").slideUp(500)
        }
    })
}

const btnUserMenu = () =>{
    $(".btn_user_menu").click(function(){
        $(this).toggleClass("on");
        $(".hid_user_menu").css("right","0");
    });

    $(".btn_menu_close").click(function(){
        $(".hid_user_menu").css("right","-100%");
    })
}

const quantityLength = () =>{
    $(".leng_control").each(function(){
        const tg = $(this);
        let num = parseInt(tg.children(".quantity").text());

        tg.children(".menu_len_minus").click(function(){
            num--;
            tg.children(".quantity").text(num);
        });
        tg.children(".menu_len_add").click(function(){
            num++;
            tg.children(".quantity").text(num);
        });
    })

}

const layerPopup = (tg) =>{
    tg.click(function(){
        $(".layer_popup").fadeIn();
    });

    $(".layer_close").click(function(){
        $(".layer_popup").fadeOut();
    })
}