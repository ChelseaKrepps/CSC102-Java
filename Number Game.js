function randomNumber()
{ //* variable declaration
    var player2 = Math.ceil(Math.random()*10);
    var youWinImage = "youWinImage.jpg";
    var youLoseImage = "youLoseImage.jpg";
    var player1 = onclick;



    

 //* output conditions win/lose
    if (player1 == player2) 
        {
            document.getElementById("winnerorloser").src = youWinImage;
        } 

    else {
        document.getElementById("winnerorloser").src = youLoseImage;
    }

    //*varaible outputs for computer numbers
    if (player2 == 1)
    {
        document.getElementById("computersNumber").innerHTML = "ONE";

    }

    if (player2 == 2)
        {
            document.getElementById("computersNumber").innerHTML = "TWO";
    
        }

     if (player2 == 3)
            {
                document.getElementById("computersNumber").innerHTML = "THREE";
        
            }

     if (player2 == 4)
                {
                    document.getElementById("computersNumber").innerHTML = "FOUR";
            
                }

                if (player2 == 5)
                    {
                        document.getElementById("computersNumber").innerHTML = "FIVE";
                
                    }

                    if (player2 == 6)
                        {
                            document.getElementById("computersNumber").innerHTML = "SIX";
                    
                        }
                        if (player2 == 7)
                            {
                                document.getElementById("computersNumber").innerHTML = "SEVEN";
                        
                            }
    
                            if (player2 == 8)
                                {
                                    document.getElementById("computersNumber").innerHTML = "EIGHT";
                            
                                }
                                if (player2 == 9)
                                    {
                                        document.getElementById("computersNumber").innerHTML = "NINE";
                                
                                    }
                                    if (player2 == 10)
                                        {
                                            document.getElementById("computersNumber").innerHTML = "TEN";
                                    
                     }
}