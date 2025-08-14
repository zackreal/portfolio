document.addEventListener('DOMContentLoaded', () => {

    // KODE UNTUK THEME TOGGLE
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = themeToggleButton.querySelector('i');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('bx-moon');
            themeIcon.classList.add('bx-sun');
        } else {
            body.classList.remove('dark-mode');
            themeIcon.classList.remove('bx-sun');
            themeIcon.classList.add('bx-moon');
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        applyTheme(newTheme);

        localStorage.setItem('theme', newTheme);
    });

    // KODE UNTUK MENGAKTIFKAN SWIPER JS
    const swiper = new Swiper('.services-slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

    // KODE UNTUK MENGAKTIFKAN AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // KODE UNTUK PREVIEW SERTIFIKAT
    const sertifikatLinks = document.querySelectorAll('.sertifikat-link');
    const sertifikatImagePreview = document.getElementById('sertifikat-image-preview');
    const sertifikatPlaceholder = document.getElementById('sertifikat-placeholder');
    const sertifikatCards = document.querySelectorAll('.sertifikat-card');

    if (sertifikatLinks.length > 0 && sertifikatImagePreview) {
        // Tampilkan gambar pertama secara default saat halaman dimuat
        const firstImage = sertifikatLinks[0].getAttribute('data-image');
        sertifikatImagePreview.src = firstImage;
        sertifikatImagePreview.classList.add('active');
        sertifikatPlaceholder.style.display = 'none';
        sertifikatCards[0].classList.add('active');

        sertifikatLinks.forEach((link, index) => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); 

                sertifikatCards.forEach(card => card.classList.remove('active'));

                link.closest('.sertifikat-card').classList.add('active');
                
                const imagePath = link.getAttribute('data-image');
                sertifikatImagePreview.src = imagePath;

                sertifikatImagePreview.classList.add('active');
                if(sertifikatPlaceholder) sertifikatPlaceholder.style.display = 'none';
            });
        });
    }

});
