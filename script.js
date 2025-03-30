document.addEventListener("DOMContentLoaded", function() {
    let audio = document.querySelector("audio");
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            document.addEventListener("click", function() {
                audio.play();
            }, { once: true });
        });
    }
});