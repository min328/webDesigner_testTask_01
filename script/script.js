/* eslint-disable */

$(function () {
    /* GNB 메뉴 */
    $("li.mainLi>a").mouseover(function () {
        $("ul.subMenu").stop().slideDown(500);
        $("ul.subMenu").show();
    });

    $("li.mainLi>a").mouseout(function () {
        $("ul.subMenu").stop().slideUp(300);
    });

    $("li.subLi>a").mouseover(function () {
        $("ul.subMenu").stop().slideDown(500);
    });

    $("li.subLi>a").mouseout(function () {
        $("ul.subMenu").stop().slideUp(300);
    });
    /* GNB 메뉴 */

    /* slideshow 기능 */
    setInterval(fn_Slide, 3000);
    function fn_Slide(){
        $("div#slideShuttle").animate(
            {"margin-top" : "-300px"}
            ,3000
            ,function(){
                $("div#slideShuttle>div:first-child").insertAfter("div#slideShuttle>div:last-child");
            }
        );
    }
    /* slideshow 기능 */

    /* bbs 탭기능 */
    $("button.bbsBtn").click(function(){
        $("button.bbsBtn").removeClass("tabSelected");
        $(this).addClass("tabSelected");

        var clicked_btn = $(this).attr('id');

        if(clicked_btn == "noticeBtn") {
            $("div#bbs>table#gallery").css({
                "display" : "none"
            });

            $("div#bbs>table#notice").css({
                "display" : "block"
            })
        } else if(clicked_btn == "galleryBtn") {
            $("div#bbs>table#gallery").css({
                "display" : "block"
            });

            $("div#bbs>table#notice").css({
                "display" : "none"
            })
        }
    });
    /* bbs 탭기능 */

    /* 레이어팝업 기능 */
    $("#popUp").click(function(){
        $("div#layerPopBG").show();
    });

    $("button#layer_close").click(function(){
        $("div#layerPopBG").hide();
    });
    /* 레이어팝업 기능 */
});
