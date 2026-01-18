const hedef = document.querySelector('.urunler');

const secenekler = {
    threshold: 0.2
};

const gozlemci = new IntersectionObserver(function(entries, gozlemci) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            gozlemci.unobserve(entry.target);
        }
    });
}, secenekler);


gozlemci.observe(hedef);