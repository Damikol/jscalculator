(function() {
    //assign a variable name for screen,button, clear and equal
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    //take the variable button and check which button was pressed, 
    //add eventlistener to find out which button was pressed, 
    //define event click, the event will run if the event is active
    //target the value in the dataset
    //for the value to be inserted in the screen you push to the screen
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    //if the equal is active it works
    //if the screen is having an empty value it wont show anything
    //if a value is passed then the else statement happens, then stored in the answer variable
    equal.addEventListener('click', function(e) {
        if(screen.value === '') {
            screen.value = "Please enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    //
    clear.addEventListener('click', function(e){
        screen.value = "";
    })



})();