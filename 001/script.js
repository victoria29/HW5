window.onload = function () {
    var myLink = document.querySelector('a');
    var myDiv = document.querySelector('div');
    var button = document.querySelector('button');
    myLink.addEventListener('click', showText);

    function showText() {
        if (myDiv.style.display === "none") {
            myDiv.style.display = 'block' ;
        }
        else myDiv.style.display = 'none';
    }

    button.addEventListener('click', cancel);
    function cancel() {
        myLink.removeEventListener('click', showText);
    }
};
