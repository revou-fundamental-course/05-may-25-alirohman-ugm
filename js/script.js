document.addEventListener('DOMContentLoaded', function() {

    // Objek Terjemahan
    const translations = {
        id: {
            pageTitle: "Lokatrip",
            logoText: "LokaTrip",
            navHome: "Beranda",
            navPackages: "Paket Kami",
            navContact: "Hubungi Kami",
            navToggle: "toggle navigasi",
            mainHeadline: "Agen Perjalanan Terpercaya",
            subHeadline: "Kebahagiaan Anda adalah kebahagiaan kami",
            testimonialImgAlt1: "Gambar Testimoni 1: Liburan Keluarga",
            testimonialImgText1: "Liburan Keluarga Seru",
            testimonialText1: "\"Perjalanan yang luar biasa! Semuanya diatur dengan sempurna, dari akomodasi hingga itinerary. Anak-anak sangat senang. Terima kasih!\"",
            avatarAlt1: "Avatar Pelanggan 1",
            avatarText1: "AD",
            customerName1: "Andi Dharmawan",
            customerDetails1: "Wiraswasta, 38 tahun",
            testimonialImgAlt2: "Gambar Testimoni 2: Petualangan",
            testimonialImgText2: "Petualangan Tak Terlupakan",
            testimonialText2: "\"Pengalaman solo traveling pertama yang mengesankan. Destinasi yang direkomendasikan sangat cocok dengan minat saya. Pasti akan menggunakan jasa agen ini lagi!\"",
            avatarAlt2: "Avatar Pelanggan 2",
            avatarText2: "SR",
            customerName2: "Siti Rahayu",
            customerDetails2: "Desainer Grafis, 29 tahun",
            testimonialImgAlt3: "Gambar Testimoni 3: Bulan Madu",
            testimonialImgText3: "Bulan Madu Romantis",
            testimonialText3: "\"Bulan madu kami menjadi sangat spesial berkat agen perjalanan ini. Semua detail kecil diperhatikan, membuat kami merasa sangat dimanjakan. Sangat direkomendasikan!\"",
            avatarAlt3: "Avatar Pelanggan 3",
            avatarText3: "RB",
            customerName3: "Rizky & Bella",
            customerDetails3: "Pasangan Baru Menikah, 27 & 25 tahun",
            contactUs: "Hubungi Kami",
            formNameLabel: "Nama Anda:",
            formNamePlaceholder: "Masukkan nama lengkap Anda",
            formEmailLabel: "Alamat Email:",
            formEmailPlaceholder: "Masukkan alamat email Anda",
            formInterestLabel: "Apa yang Anda minati?",
            formSelectOption: "Pilih opsi",
            formOptionBali: "Bali",
            formOptionJapan: "Jepang",
            formOptionSingapore: "Singapura",
            formOptionBandung: "Bandung",
            formOptionSurabaya: "Surabaya",
            formOptionOtherPackage: "Paket Lain",
            formOptionGeneralInquiry: "Pertanyaan Umum",
            formSubmitButton: "KIRIM",
            ourPackagesTitle: "Paket Kami",
            baliPackageTitle: "Bali",
            baliPackageDesc: "Temukan pesona Pulau Dewata, dari pantai yang memukau hingga sawah yang hijau subur.",
            japanPackageTitle: "Jepang",
            japanPackageDesc: "Rasakan perpaduan unik tradisi kuno dan inovasi futuristik di Negeri Sakura.",
            singaporePackageTitle: "Singapura",
            singaporePackageDesc: "Jelajahi negara kota yang semarak, tempat peleburan budaya dan keajaiban modern.",
            bandungPackageTitle: "Bandung",
            bandungPackageDesc: "Nikmati iklim sejuk, kelezatan kuliner, dan surga belanja di Paris van Java.",
            surabayaPackageTitle: "Surabaya",
            surabayaPackageDesc: "Selami kekayaan sejarah dan hiruk pikuk kehidupan kota metropolitan Jawa Timur.",
            thirdFeatureTitle: "Fitur Ketiga",
            thirdFeatureDesc: "Paket spesial yang dikurasi untuk menawarkan pengalaman unik dan tak terlupakan.",
            closingArgumentHeadline: "Wujudkan Liburan Impian Anda, Tanpa Ribet!",
            closingArgumentText: "Percayakan perencanaan perjalanan Anda kepada kami. Dengan pengalaman dan jaringan luas, kami siap membantu Anda menciptakan kenangan indah di destinasi terbaik. Hubungi kami sekarang dan dapatkan penawaran eksklusif!",
            ctaButton: "PESAN SEKARANG",
            footerLogoText: "Logo Anda",
            footerAboutText1: "Mitra terpercaya Anda untuk pengalaman perjalanan yang tak terlupakan.",
            footerAboutText2: "Kantor Pusat:<br>Jalan Wisata No. 123, Kota Pelancong, 75001",
            footerQuickLinks: "Tautan Cepat",
            footerNavHome: "Beranda",
            footerNavPackages: "Paket Kami",
            footerNavContact: "Hubungi Kami",
            footerPrivacyPolicy: "Kebijakan Privasi",
            footerTerms: "Syarat & Ketentuan",
            footerFollowUs: "Ikuti Kami",
            footerCopyright: `© ${new Date().getFullYear()} Lokatrip. Hak Cipta Dilindungi.`,
            errorName: "Nama tidak boleh kosong.",
            errorEmailEmpty: "Email tidak boleh kosong.",
            errorEmailInvalid: "Format email tidak valid.",
            errorDestination: "Silakan pilih salah satu opsi."
        },
        en: {
            pageTitle: "Lokatrip",
            logoText: "LokaTrip",
            navHome: "Home",
            navPackages: "Our Packages",
            navContact: "Contact Us",
            navToggle: "toggle navigation",
            mainHeadline: "Your Trusted Travel Agent",
            subHeadline: "Your happiness is our happiness",
            testimonialImgAlt1: "Testimonial Image 1: Family Fun Holiday",
            testimonialImgText1: "Fun Family Holiday",
            testimonialText1: "\"An amazing journey! Everything was perfectly arranged, from accommodation to itinerary. The kids were so happy. Thank you!\"",
            avatarAlt1: "Customer Avatar 1",
            avatarText1: "AD",
            customerName1: "Andi Dharmawan",
            customerDetails1: "Entrepreneur, 38 years old",
            testimonialImgAlt2: "Testimonial Image 2: Unforgettable Adventure",
            testimonialImgText2: "Unforgettable Adventure",
            testimonialText2: "\"My first solo traveling experience was impressive. The recommended destinations perfectly matched my interests. Will definitely use this agent again!\"",
            avatarAlt2: "Customer Avatar 2",
            avatarText2: "SR",
            customerName2: "Siti Rahayu",
            customerDetails2: "Graphic Designer, 29 years old",
            testimonialImgAlt3: "Testimonial Image 3: Romantic Honeymoon",
            testimonialImgText3: "Romantic Honeymoon",
            testimonialText3: "\"Our honeymoon was made very special thanks to this travel agent. All small details were taken care of, making us feel very pampered. Highly recommended!\"",
            avatarAlt3: "Customer Avatar 3",
            avatarText3: "RB",
            customerName3: "Rizky & Bella",
            customerDetails3: "Newly Married Couple, 27 & 25 years old",
            contactUs: "Contact Us",
            formNameLabel: "Your Name:",
            formNamePlaceholder: "Enter your full name",
            formEmailLabel: "Email Address:",
            formEmailPlaceholder: "Enter your email address",
            formInterestLabel: "What are you interested in?",
            formSelectOption: "Select option",
            formOptionBali: "Bali",
            formOptionJapan: "Japan",
            formOptionSingapore: "Singapore",
            formOptionBandung: "Bandung",
            formOptionSurabaya: "Surabaya",
            formOptionOtherPackage: "Other Package",
            formOptionGeneralInquiry: "General Inquiry",
            formSubmitButton: "SEND",
            ourPackagesTitle: "Our Packages",
            baliPackageTitle: "Bali",
            baliPackageDesc: "Discover the charm of the Island of Gods, from stunning beaches to lush green rice paddies.",
            japanPackageTitle: "Japan",
            japanPackageDesc: "Experience the unique blend of ancient tradition and futuristic innovation in the Land of the Rising Sun.",
            singaporePackageTitle: "Singapore",
            singaporePackageDesc: "Explore the vibrant city-state, a melting pot of cultures and modern marvels.",
            bandungPackageTitle: "Bandung",
            bandungPackageDesc: "Enjoy the cool climate, culinary delights, and shopping paradise of the Paris of Java.",
            surabayaPackageTitle: "Surabaya",
            surabayaPackageDesc: "Delve into the historical richness and bustling city life of East Java's metropolitan city.",
            thirdFeatureTitle: "Third Feature",
            thirdFeatureDesc: "A specially curated package offering a unique and unforgettable experience.",
            closingArgumentHeadline: "Make Your Dream Holiday Happen, Hassle-Free!",
            closingArgumentText: "Entrust your travel planning to us. With extensive experience and a wide network, we are ready to help you create beautiful memories in the best destinations. Contact us now and get exclusive offers!",
            ctaButton: "BOOK NOW",
            footerLogoText: "Your Logo",
            footerAboutText1: "Your trusted partner for unforgettable travel experiences.",
            footerAboutText2: "Head Office:<br>Jalan Wisata No. 123, Kota Pelancong, 75001",
            footerQuickLinks: "Quick Links",
            footerNavHome: "Home",
            footerNavPackages: "Our Packages",
            footerNavContact: "Contact Us",
            footerPrivacyPolicy: "Privacy Policy",
            footerTerms: "Terms & Conditions",
            footerFollowUs: "Follow Us",
            footerCopyright: `© ${new Date().getFullYear()} Lokatrip. All Rights Reserved`,
            errorName: "Name cannot be empty.",
            errorEmailEmpty: "Email cannot be empty.",
            errorEmailInvalid: "Email format is invalid.",
            errorDestination: "Please select an option."
        }
    };

    // Fungsi untuk mengatur bahasa
    function setLanguage(lang) {
        document.documentElement.lang = lang; // Set atribut lang pada <html>
        document.title = translations[lang].pageTitle; // Set judul halaman

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                // Untuk elemen yang mungkin berisi HTML (seperti footerAboutText2 dengan <br>)
                if (key === "footerAboutText2" || key === "footerCopyright") {
                     element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('[data-placeholder-key]').forEach(element => {
            const key = element.getAttribute('data-placeholder-key');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-alt-key]').forEach(element => {
            const key = element.getAttribute('data-alt-key');
            if (translations[lang][key]) {
                element.alt = translations[lang][key];
            }
        });
        
        // Khusus untuk teks pada gambar placeholder (jika ingin diubah juga)
        document.querySelectorAll('[data-img-text-key]').forEach(imgElement => {
            const key = imgElement.getAttribute('data-img-text-key');
            if (translations[lang][key] && imgElement.src.includes('placehold.co')) {
                // Ekstrak URL dasar dan parameter lain dari src
                let currentSrc = imgElement.src;
                let newText = encodeURIComponent(translations[lang][key]);
                // Ganti parameter teks di URL placeholder
                imgElement.src = currentSrc.replace(/text=[^&]+/, `text=${newText}`);
            }
        });
         document.querySelectorAll('[data-avatar-text-key]').forEach(imgElement => {
            const key = imgElement.getAttribute('data-avatar-text-key');
            if (translations[lang][key] && imgElement.src.includes('placehold.co')) {
                let currentSrc = imgElement.src;
                let newText = encodeURIComponent(translations[lang][key]);
                imgElement.src = currentSrc.replace(/text=[^&]+/, `text=${newText}`);
            }
        });


        // Perbarui aria-label untuk tombol navigasi
        const navToggleButton = document.querySelector('.nav-toggle');
        if (navToggleButton && translations[lang].navToggle) {
            navToggleButton.setAttribute('aria-label', translations[lang].navToggle);
        }


        // Perbarui kelas aktif pada pilihan bahasa
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active-lang');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active-lang');
            }
        });

        localStorage.setItem('preferredLang', lang); // Simpan preferensi
    }

    // Event listener untuk pilihan bahasa
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            setLanguage(selectedLang);
            // Jika validasi form sedang aktif, perbarui pesan error juga
            if (contactForm && typeof updateFormErrorMessages === 'function') {
                updateFormErrorMessages(selectedLang);
            }
        });
    });

    // Muat bahasa yang disimpan atau default ke 'id'
    const preferredLang = localStorage.getItem('preferredLang') || 'id';
    setLanguage(preferredLang);


    // Smooth Scrolling
    const navLinks = document.querySelectorAll('header nav ul li a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
            const mainNav = document.querySelector('header nav');
            const navToggle = document.querySelector('.nav-toggle');
            if (mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
                navToggle.classList.remove('nav-open');
            }
        });
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('header nav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
            navToggle.classList.toggle('nav-open');
        });
    }

    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDotsContainer = document.querySelector('.testimonial-slider-dots');
    let currentTestimonialSlide = 0;
    const testimonialSlideIntervalTime = 7000;
    let autoTestimonialSlideInterval;

    if (testimonialSlides.length > 0) {
        testimonialSlides.forEach((slide, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToTestimonialSlide(index);
                resetTestimonialInterval();
            });
            testimonialDotsContainer.appendChild(dot);
        });

        const testimonialDots = testimonialDotsContainer.querySelectorAll('.dot');

        function goToTestimonialSlide(n) {
            if (!testimonialSlides[currentTestimonialSlide] || !testimonialDots[currentTestimonialSlide]) return;
            testimonialSlides[currentTestimonialSlide].classList.remove('active');
            testimonialDots[currentTestimonialSlide].classList.remove('active');
            currentTestimonialSlide = (n + testimonialSlides.length) % testimonialSlides.length;
            testimonialSlides[currentTestimonialSlide].classList.add('active');
            testimonialDots[currentTestimonialSlide].classList.add('active');
        }

        function nextTestimonialSlide() {
            goToTestimonialSlide(currentTestimonialSlide + 1);
        }

        function startTestimonialInterval() {
             autoTestimonialSlideInterval = setInterval(nextTestimonialSlide, testimonialSlideIntervalTime);
        }

        function resetTestimonialInterval() {
            clearInterval(autoTestimonialSlideInterval);
            startTestimonialInterval();
        }
        
        if(testimonialSlides[0]) testimonialSlides[0].classList.add('active');
        startTestimonialInterval();
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    let currentLangForValidation = preferredLang; // Untuk pesan error

    function updateFormErrorMessages(lang) { // Fungsi untuk update pesan error saat bahasa berubah
        currentLangForValidation = lang;
        // Jika ada error yang sedang tampil, panggil ulang validasi untuk update pesan
        // Ini bisa lebih kompleks, untuk sekarang kita set saja bahasanya
        // Jika form sudah disubmit dan ada error, idealnya pesan error di-render ulang
    }


    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const destinationInput = document.getElementById('destination');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            const lang = localStorage.getItem('preferredLang') || 'id'; // Dapatkan bahasa saat ini

            if (nameInput.value.trim() === '') {
                setErrorFor(nameInput, translations[lang].errorName);
                isValid = false;
            } else {
                setSuccessFor(nameInput);
            }

            if (emailInput.value.trim() === '') {
                setErrorFor(emailInput, translations[lang].errorEmailEmpty);
                isValid = false;
            } else if (!isEmailValid(emailInput.value.trim())) {
                setErrorFor(emailInput, translations[lang].errorEmailInvalid);
                isValid = false;
            } else {
                setSuccessFor(emailInput);
            }

            if (destinationInput.value === '') {
                setErrorFor(destinationInput, translations[lang].errorDestination);
                isValid = false;
            } else {
                setSuccessFor(destinationInput);
            }

            if (isValid) {
                const successMessage = lang === 'id' ? 
                    'Formulir berhasil dikirim!\nNama: ' + nameInput.value + '\nEmail: ' + emailInput.value + '\nMinat: ' + destinationInput.value + '\n (Ini adalah demo, data tidak benar-benar terkirim)' :
                    'Form submitted successfully!\nName: ' + nameInput.value + '\nEmail: ' + emailInput.value + '\nInterested In: ' + destinationInput.value + '\n (This is a demo, data not actually sent)';
                alert(successMessage);
                contactForm.reset();
                clearAllValidationStates(contactForm);
            }
        });

        function setErrorFor(input, message) {
            const formGroup = input.parentElement;
            const errorMessage = formGroup.querySelector('.error-message');
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorMessage.textContent = message;
        }

        function setSuccessFor(input) {
            const formGroup = input.parentElement;
            const errorMessage = formGroup.querySelector('.error-message');
            input.classList.add('valid');
            input.classList.remove('invalid');
            errorMessage.textContent = '';
        }
        
        function clearAllValidationStates(form) {
            form.querySelectorAll('input, select').forEach(input => {
                input.classList.remove('valid');
                input.classList.remove('invalid');
                const formGroup = input.parentElement;
                const errorMessage = formGroup.querySelector('.error-message');
                if(errorMessage) {
                    errorMessage.textContent = '';
                }
            });
        }

        function isEmailValid(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }

    // Update Footer Year (sudah ada di translations.footerCopyright)
    // const currentYearSpan = document.getElementById('currentYear');
    // if (currentYearSpan) {
    //     currentYearSpan.textContent = new Date().getFullYear();
    // }
    // Pemanggilan awal untuk set bahasa sudah dilakukan di atas
    if (typeof updateFormErrorMessages === 'function') { // Panggil untuk inisialisasi bahasa validasi
        updateFormErrorMessages(preferredLang);
    }

});