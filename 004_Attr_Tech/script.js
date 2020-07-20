window.onload = function () {
    var mainDiv = document.getElementById("main-div");

    mainDiv.addEventListener('mouseover', function (e){
        var target = e && e.target;
        var dataToggleId = target.getAttribute('data-tooltip');
        if (!dataToggleId) {
            return;
        }
        mainDiv = document.createElement('div');
        mainDiv.className = 'data-tooltip';
        mainDiv.innerHTML = dataToggleId;
        document.body.append(mainDiv);

        var coords = target.getBoundingClientRect();
        var left = coords.left + (target.offsetWidth - mainDiv.offsetWidth) / 2;
        if (left < 0) left = 1;
        mainDiv.style.left = left + 'px';
    } );

    mainDiv.addEventListener('mouseout', hide);
    function hide() {
        if (mainDiv) {
            mainDiv.remove();
            mainDiv = null;
        }
    }
};