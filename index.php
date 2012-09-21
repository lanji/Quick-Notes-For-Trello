<?php
include 'header.php'; ?>
        <div class="main-container">
            <div class="main wrapper clearfix">

                <article>
                    <form action="#" id="main-form" method="post">
                        <textarea placeholder="Enter your new card title here!" cols="60" rows="8"></textarea><br/>
                        <input type="submit" name="submit" value="Submit"> 
                    </form>
                </article>

                <aside>
                    <h3>Quick setup</h3>
                    <ul>
                        <li class="loggedout">
                            <a id="connectLink" href="#">Connect To Trello</a>
                        </li>
                        <li class="loggedin">
                                <div id="header">
                                    Logged in to Trello as:<br/> <span id="fullName"></span> 
                                    <br/><a id="disconnect" href="#">Log Out</a>
                                </div>      
                        </li>
                        <li class="loggedin">
                            <p>Choose a board</p>
                            <div id="output"></div> 
                        </li>
                    </ul>
                </aside>

            </div> <!-- #main -->
        </div> <!-- #main-container -->
<?
include 'footer.php';
?>