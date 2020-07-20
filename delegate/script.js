window.onload = function () {
    var items = document.querySelectorAll('div');

    for(var i=0; i<items.length; i++){
        items[i].addEventListener("click", function(e){
            if (e.target.className !== 'remove_button') return;
            var target = e.target;
            target.parentNode.remove();
        });
    }

};