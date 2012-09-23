<?php
include 'header.php'; ?>
        <div class="main-container">
            <div class="main wrapper clearfix">

                <article>
                    <form action="#" id="main-form" method="post">
                        <textarea placeholder="Enter your new card title here!" cols="60" rows="8"></textarea><br/>
                        <input type="submit" name="submit" value="Submit"> 
                    </form>
                    <div class="postdisplayoptions">
                        <input type="radio" name="display" value="This Session" checked> Cards from this session &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="display" value="All On List"> All Cards on the list
                    </div>
                    <div class="resentposts">
                        <li class="post">This is an example of a resently created card</li>
                    </div>
                </article>

                <aside>
                    <h3>Quick setup</h3>
                    <ul>
                        <li class="loggedout">
                            <a id="connectLink" href="#">Connect To Trello</a>
                        </li>
                        <li class="loggedin">
                                <div id="header">
                                    Logged in to Trello as:<br/> <span class="fullName"></span> 
                                    <br/><a id="disconnect" href="#">Log Out</a>
                                </div>      
                        </li>
                        <li class="loggedin">
                            <p>Choose a board <span class="resetSelections">Reset Selections<span></p>
                            <div class="boardlist"></div> 
                        </li>
                    </ul>
                </aside>

            </div> <!-- #main -->
        </div> <!-- #main-container -->
<?
include 'footer.php';
?>