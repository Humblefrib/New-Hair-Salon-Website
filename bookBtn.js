var bookBtns = document.getElementsByClassName("highlightButton");

for(var i = 0; i < bookBtns.length; i++) {
    var bookBtn = bookBtns[i];

    bookBtn.addEventListener("click", function() {
        setTimeout(function() {
            var div = document.getElementById('highlightDiv');
            div.classList.add('highlight');
            div.classList.remove('unHighlight');
    
            setTimeout(function() {
                div.classList.remove('highlight');
                div.classList.add('unHighlight');
            }, 450);
        }, 1000);
    });
}

let ContactBtn = document.querySelector(".ContactBtn");

ContactBtn.addEventListener("click", function() {
    setTimeout(function() {
        var div = document.getElementById('highlightDiv');
        div.classList.add('highlight');
        div.classList.remove('unHighlight');

        setTimeout(function() {
            div.classList.remove('highlight');
            div.classList.add('unHighlight');
        }, 450);
    }, 100);
});
