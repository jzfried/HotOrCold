    var generatedNumber;
    function generateRandomNumber (){
        return Math.floor((Math.random()*10)+1);
    };
    var generatedMessage;
    function displayMessage (message){
        $(document).ready(function(){
        $('#checkUserInput').click(function(){
        $('.wrapper2').append('message');
    });
        });
    
    $(document).ready(function(){
     generatedNumber = generateRandomNumber ();
        });
        $("#checkUserInput").click(function(){
            var inputedNumber = $('#userInput').val();
            if (isNaN(inputedNumber)) {
                displayMessage('Please input a number');
            } else if(inputedNumber == generatedNumber){
                displayMessage('You win');                
            } else if (inputedNumber > generatedNumber) {
                displayMessage('Too high');
            } else {
                displayMessage('Too low');
            }
            });

        $("#startAgain").click(function(){
            generatedNumber = generateRandomNumber ();
            $("#userInput").val("");
        });