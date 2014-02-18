function mainmenu() {
    $(".MLMHor ul ").css({display: "none"}); // Opera Fix
    $(".MLMHor li").hover(function() {
        $(this).find('ul:first').css({visibility: "visible", display: "none"}).show(200);
    }, function() {
        $(this).find('ul:first').css({visibility: "hidden"});
    });

    $(".MLMHor>li").each(function() {
        $this = $(this);//the first row <li>s
        if ($this.children('ul').length > 0)
            $this.children("a").addClass("bgDown");
    });

    $(".MLMHor>li ul>li").each(function() {
        $this = $(this);//the first row <li>s
        if ($this.children('ul').length > 0)
            $this.children("a").addClass("bgSide");
    });
}
$(document).ready(function() {
    mainmenu();
});