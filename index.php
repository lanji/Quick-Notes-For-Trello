<?php
include 'header.php'; ?>
        <div class="main-container">
            <div class="main wrapper clearfix">

                <article>

                    <table>
                        <tr>
                            <td>
                        <label for="cardtitle">Title of Card: </label>
                            </td>
                            <td>
                        <input type="text" placeholder="Enter your card title here" name="cardtitle" id="cardtitle"/>
                            </td>
                        </tr>
                        <tr>
                            <td>    
                        <label for="carddescription">Description of Card: </label>
                            </td>
                            <td>
                        <input type="text" placeholder="Enter your description here" name="carddescription" id="carddescription"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <p href="#" id="seemore">See More</p>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>

                        
                        <input type="button" name="submitcard" value="Submit Card" id="submitcard"> 

                    <div class="postdisplayoptions">
                        All Cards in the List:
                    </div>
                    <div class="resentposts">
                        <ul class="cardslist">
                            
                        </ul>
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