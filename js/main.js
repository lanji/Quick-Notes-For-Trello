/*!
 * Trello Quick Notes Javascript
 * http://charleshalliday.com/qntrello
 *
 * Copyright 2012 Halliday Websites
 * Do what you like with this code, it's your funeral
 *
 * Date: Late September 2012
 */

var onAuthorize = function() {
        updateLoggedIn();
        $(".boardlist").empty();

        Trello.members.get("me", function(member) {
            $(".fullName").text(member.fullName);

            var $boards = $('<div>').text('Loading boards...').appendTo('.boardlist').after('<li class="listslist"><p>Choose a list</p></li>');

            Trello.get("members/my/boards/all", function(boards) {
                $boards.empty();
                $.each(boards, function(ix, board) {
                    if (board.closed === false) {
                        $("<div>").attr('onClick', 'getLists($(this),"' + board.id + '");').addClass("board").addClass(board.id).text(board.name).appendTo($boards);
                        console.log(board.id);
                    }
                });
                //check if board was selected and select it again
                $('.' + localStorage.setBoard).click();
            });
        });

    };
var hideOthers = function(othersClass) {
        $('.' + othersClass).each(function() {
            $this = $(this);
            $this.slideUp('slow');
        });
    };
var saveList = function(thisThang, id) {
        //save the selection to local storage
        localStorage.setList = id;

        //do some animation stuff
        thisThang.removeClass("list").addClass("currentList");
        hideOthers("list");
    };
var getLists = function(thisThang, id) {
        //save the selection to local storage
        localStorage.setBoard = id;


        //do some animation stuff
        thisThang.removeClass("board").addClass("currentBoard");
        hideOthers("board");

        var $lists = $("<div>").text("Loading lists...").appendTo(".listslist");

        Trello.get("boards/" + id + "/lists", function(lists) {
            $lists.empty();
            $.each(lists, function(ix, list) {
                if (list.closed === false) {
                    if (list.idBoard === id) {
                        $("<div>").addClass("list").addClass(list.id).attr('onClick', 'saveList($(this),"' + list.id + '");getCards();').text(list.name).appendTo($lists);
                        console.log(list.id);
                    }
                }
            });
            $('.' + localStorage.setList).click();
        });
    };
var getCards = function() {
        //save the selection to local storage
        var cardList = localStorage.setList;
        $('.cardslist').html('');
        Trello.get("lists/" + cardList + "/cards", function(cards) {
            $.each(cards, function(ix, card){
                if(card.closed === false){
                    $("<li>").addClass('cardinlist').addClass(cards.id).text(card.name).appendTo($('.cardslist'));
                }
            });
            console.log(cards);

        });
    };
var resetSelections = function() {
        //remove local storage
        delete localStorage.setBoard;
        delete localStorage.setList;
        onAuthorize();
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

/* Part of this function is from Marc Drago's project https://github.com/markdrago/cardorizer */
create_card_with_parameters = function(name, desc, listid) {
    Trello.post("cards", {
        name: name,
        desc: desc,
        idList: listid
    });
    show_feedback();
};

show_feedback = function(){
    //remove entries from inputs
    $('input[type="text"]').each(function(){
        $(this).val('');
    });
    //add card to the list
    getCards();

};

Trello.authorize({
    interactive: false,
    scope: { read: true, write: true },
    success: onAuthorize
});

$("#connectLink").click(function() {
    Trello.authorize({
        type: "popup",
        scope: { read: true, write: true },
        success: onAuthorize,
        name: 'Quick-Notes-for-Trello'
    });
});
$('.resetSelections').on('click', resetSelections);
$("#disconnect").click(logout);
$('#submitcard').click(function(){
    create_card_with_parameters($('#cardtitle').val(),$('#carddescription').val(),localStorage.setList);
});


