function mainmenu() {
    $("#publicMenu ul ").css({display: "none"}); // Opera Fix
    $("#publicMenu li").hover(function() {
        $(this).find('ul:first').css({visibility: "visible", display: "none"}).show(200);
    }, function() {
        $(this).find('ul:first').css({visibility: "hidden"});
    });

    $("#publicMenu>li").each(function() {
        $this = $(this);//the first row <li>s
        if ($this.children('ul').length > 0)
            $this.children("a").addClass("bgDown");
    });

    $("#publicMenu>li ul>li").each(function() {
        $this = $(this);//the first row <li>s
        if ($this.children('ul').length > 0)
            $this.children("a").addClass("bgSide");
    });
}
mainmenu();