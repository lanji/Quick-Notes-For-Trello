/*!
 * Trello Quick Notes Javascript
 * http://charleshalliday.com/qntrello
 *
 * Includes HTML5 Boilerplate
 *
 * Copyright 2012 Halliday Websites
 * Do what you like with this code, it's your funeral
 *
 * Date: Late September 2012
 */


// Basic shit that trello gives you and then hacked to work with this app
var onAuthorize = function() {
    updateLoggedIn();
    $("#output").empty();
    
    Trello.members.get("me", function(member){
        $("#fullName").text(member.fullName);
    
        var $boards = $("<div>")
            .text("Loading boards...")
            .appendTo("#output");

        Trello.get("members/my/boards/all", function(boards) {
            $boards.empty();
            $.each(boards, function(ix, board) {
                if(board.closed === false){
                    $("<a>")
                    .attr('href','#')
                    .addClass("board")
                    .text(board.name)
                    .appendTo($boards);
                    console.log(board);
                }
            });
        });
    });

};

var updateLoggedIn = function() {
    var isLoggedIn = Trello.authorized();
    $(".loggedout").toggle(!isLoggedIn);
    $(".loggedin").toggle(isLoggedIn);
};
    
var logout = function() {
    Trello.deauthorize();
    updateLoggedIn();
    $('#output').remove();
    window.location.reload(true);
};
                          
Trello.authorize({
    interactive:false,
    success: onAuthorize
});

$("#connectLink")
.click(function(){
    Trello.authorize({
        type: "popup",
        success: onAuthorize,
        name: 'Quick-Notes-for-Trello'
    });
});
    
$("#disconnect").click(logout);
