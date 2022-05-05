const appearRight = document.querySelector('.appearRight');
const appearLeft = document.querySelector('.appearLeft');
const appearUp = document.querySelector('.appearUp');
// const appearUp = document.querySelector('.appearUp');

const cb = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
        }
    })
}

const io = new IntersectionObserver(cb);
io.observe(appearRight);
io.observe(appearLeft);
io.observe(appearUp);
