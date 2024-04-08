const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navlink');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show_left');
        }
        else {
            entry.target.classList.remove('show_left');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden_left');
hiddenElements.forEach((el) => observer.observe(el));



const observerr = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show_up');
        }
        else {
            entry.target.classList.remove('show_up');
        }
    });
});
const hiddenrElements = document.querySelectorAll('.hidden_up');
hiddenrElements.forEach((el) => observerr.observe(el));
