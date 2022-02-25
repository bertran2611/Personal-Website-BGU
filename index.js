scroolanm();

function scroolanm() {
    let about = document.getElementById('about');
    let why = document.getElementById('why');

    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        about.style.top = value * -0.3 + 'px';
        why.style.top = value * -0.3 + 'px';
    });
}
