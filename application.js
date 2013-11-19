    $(document).ready(function(){
    var generatedNumber = Math.floor((Math.random()*10)+1);
        });

        $(document).ready(function(){
        $("#checkUserInput").click(function(){
            var inputedNumber = $('#userInput').val();
            if (isNaN(inputedNumber)) {
                alert('Please input a number');
            } else if(inputedNumber == generatedNumber){
                alert('You win');                
            } else if (inputedNumber>generatedNumber) {
                alert('Too high');
            } else {
                alert('Too low');
            }
        });