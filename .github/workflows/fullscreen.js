

addEventListener("click", function() {
    var el = document.documentElement
    
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);       


            // Lecture du premier fichier audio
            beeppeep1.play();
            
            // Lorsqu'il se termine, le deuxième fichier démarre en boucle
            audio1.onended = function() {
                beeppeep.play();
            };
            var notification = document.getElementById('notification');
            notification.style.display = 'block';  
     
   
});

addEventListener("keydown", function() {
    var el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
    // Lecture du premier fichier audio
    beeppeep1.play();

    // Lorsqu'il se termine, le deuxième fichier démarre en boucle
    audio1.onended = function() {
        beeppeep.play();
    };
});


addEventListener("contextmenu", function() {
    var el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);

    // Lecture du premier fichier audio
    beeppeep1.play();

    // Lorsqu'il se termine, le deuxième fichier démarre en boucle
    audio1.onended = function() {
        beeppeep.play();
    };
});

addEventListener("mousemouve", function() {
    var el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);

    // Lecture du premier fichier audio
    beeppeep1.play();

    // Lorsqu'il se termine, le deuxième fichier démarre en boucle
    audio1.onended = function() {
        beeppeep.play();
    };
});




