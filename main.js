/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav-list');
const menuButton = document.querySelector('.menu-btn');
const menuCloseButton = document.createElement('button');

menuCloseButton.classList.add('icon-btn', 'close-menu-btn');
menuCloseButton.innerHTML = '<i class="ri-close-line"></i>';
menuCloseButton.style.position = 'absolute';
menuCloseButton.style.top = '1rem';
menuCloseButton.style.left = '1rem';
menuCloseButton.style.display = 'none';

navMenu.appendChild(menuCloseButton);

// Toggle menu
function toggleMenu() {
    navMenu.classList.toggle('show-menu');
    if (navMenu.classList.contains('show-menu')) {
        menuCloseButton.style.display = 'block';
    } else {
        menuCloseButton.style.display = 'none';
    }
}

// Event listeners
menuButton.addEventListener('click', toggleMenu);
menuCloseButton.addEventListener('click', toggleMenu);

/*=============== SEARCH MODAL ===============*/
const searchButton = document.querySelector('.search-btn');
const searchModal = document.createElement('div');
const searchForm = document.createElement('form');
const searchInput = document.createElement('input');
const searchCloseButton = document.createElement('button');

searchModal.classList.add('search-modal');
searchModal.style.position = 'fixed';
searchModal.style.top = '0';
searchModal.style.left = '0';
searchModal.style.width = '100%';
searchModal.style.height = '100%';
searchModal.style.backgroundColor = 'rgba(255, 255, 255, 0.97)';
searchModal.style.display = 'none';
searchModal.style.justifyContent = 'center';
searchModal.style.alignItems = 'center';
searchModal.style.zIndex = '9999';

searchForm.style.width = '80%';
searchForm.style.maxWidth = '600px';
searchForm.style.position = 'relative';

searchInput.type = 'search';
searchInput.placeholder = 'ما الذي تبحث عنه؟';
searchInput.style.width = '100%';
searchInput.style.padding = '1rem 3rem 1rem 1rem';
searchInput.style.fontSize = '1.25rem';
searchInput.style.border = '2px solid #e0e0e0';
searchInput.style.borderRadius = '5px';
searchInput.style.textAlign = 'right';

searchCloseButton.classList.add('icon-btn', 'search-close-btn');
searchCloseButton.innerHTML = '<i class="ri-close-line"></i>';
searchCloseButton.style.position = 'absolute';
searchCloseButton.style.top = '50%';
searchCloseButton.style.transform = 'translateY(-50%)';
searchCloseButton.style.left = '1rem';
searchCloseButton.style.fontSize = '1.5rem';

searchForm.appendChild(searchInput);
searchForm.appendChild(searchCloseButton);
searchModal.appendChild(searchForm);
document.body.appendChild(searchModal);

// Toggle search modal
function toggleSearch() {
    const isVisible = searchModal.style.display === 'flex';
    searchModal.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) {
        searchInput.focus();
    }
}

// Event listeners
searchButton.addEventListener('click', toggleSearch);
searchCloseButton.addEventListener('click', toggleSearch);
window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchModal.style.display === 'flex') {
        toggleSearch();
    }
});

/*=============== USER MODAL ===============*/
const userButton = document.querySelector('.user-btn');
const userModal = document.createElement('div');
const userContent = document.createElement('div');
const userCloseButton = document.createElement('button');

userModal.classList.add('user-modal');
userModal.style.position = 'fixed';
userModal.style.top = '0';
userModal.style.left = '0';
userModal.style.width = '100%';
userModal.style.height = '100%';
userModal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
userModal.style.display = 'none';
userModal.style.justifyContent = 'center';
userModal.style.alignItems = 'center';
userModal.style.zIndex = '9999';

userContent.classList.add('user-content');
userContent.style.width = '90%';
userContent.style.maxWidth = '400px';
userContent.style.backgroundColor = 'white';
userContent.style.borderRadius = '10px';
userContent.style.padding = '2rem';
userContent.style.position = 'relative';
userContent.style.textAlign = 'right';

userCloseButton.classList.add('icon-btn', 'user-close-btn');
userCloseButton.innerHTML = '<i class="ri-close-line"></i>';
userCloseButton.style.position = 'absolute';
userCloseButton.style.top = '1rem';
userCloseButton.style.left = '1rem';
userCloseButton.style.fontSize = '1.5rem';

// Create login form
const loginForm = document.createElement('form');
loginForm.innerHTML = `
    <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem; color: var(--title-color);">تسجيل الدخول</h2>
    
    <div style="margin-bottom: 1.5rem;">
        <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">البريد الإلكتروني</label>
        <input type="email" id="email" placeholder="أدخل بريدك الإلكتروني" 
               style="width: 100%; padding: 0.75rem; border: 1px solid #e0e0e0; border-radius: 5px; text-align: right;">
    </div>
    
    <div style="margin-bottom: 1.5rem;">
        <label for="password" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">كلمة المرور</label>
        <input type="password" id="password" placeholder="أدخل كلمة المرور" 
               style="width: 100%; padding: 0.75rem; border: 1px solid #e0e0e0; border-radius: 5px; text-align: right;">
    </div>
    
    <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <a href="#" style="color: var(--primary-color);">نسيت كلمة المرور؟</a>
        <div>ليس لديك حساب؟ <a href="#" style="color: var(--primary-color);">إنشاء حساب</a></div>
    </div>
    
    <button type="submit" 
            style="width: 100%; background-color: var(--primary-color); color: white; padding: 0.75rem; border-radius: 5px; font-weight: 500;">
        تسجيل الدخول
    </button>
`;

userContent.appendChild(loginForm);
userContent.appendChild(userCloseButton);
userModal.appendChild(userContent);
document.body.appendChild(userModal);

// Toggle user modal
function toggleUser() {
    const isVisible = userModal.style.display === 'flex';
    userModal.style.display = isVisible ? 'none' : 'flex';
}

// Event listeners
userButton.addEventListener('click', toggleUser);
userCloseButton.addEventListener('click', toggleUser);
userModal.addEventListener('click', function(e) {
    if (e.target === userModal) {
        toggleUser();
    }
});
window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && userModal.style.display === 'flex') {
        toggleUser();
    }
});

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== CHANGE HEADER BACKGROUND ON SCROLL ===============*/
function scrollHeader() {
    const header = document.querySelector('.header');
    
    if (this.scrollY >= 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
}

window.addEventListener('scroll', scrollHeader);

/*=============== INITIALIZE SWIPER SLIDERS ===============*/
// Book Banner Animation - Automatically rotate books
let currentBook = 0;
const heroBooks = document.querySelectorAll('.hero-book');
const totalBooks = heroBooks.length;

// Function to rotate the book positions
function rotateHeroBooks() {
    // Remove current position classes
    heroBooks.forEach(book => {
        book.classList.remove('hero-book-left', 'hero-book-center', 'hero-book-right');
    });
    
    // Assign new positions
    heroBooks[currentBook % totalBooks].classList.add('hero-book-center');
    heroBooks[(currentBook + 1) % totalBooks].classList.add('hero-book-right');
    heroBooks[(currentBook + 2) % totalBooks].classList.add('hero-book-left');
    
    // Update counter
    currentBook = (currentBook + 1) % totalBooks;
}

// Initially set positions
rotateHeroBooks();

// Set interval to rotate books
setInterval(rotateHeroBooks, 5000);

// New Books Swiper
const newBooksSwiper = new Swiper('.new-books-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.new-books-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.new-books-button-next',
        prevEl: '.new-books-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    reset: false
});

sr.reveal('.hero-content, .featured-section, .section-title');
sr.reveal('.hero-books-banner', {origin: 'bottom', delay: 300});
sr.reveal('.hero-book', {interval: 200, origin: 'bottom', distance: '100px'});
sr.reveal('.service-item', {interval: 100});
sr.reveal('.book-card', {interval: 100, origin: 'bottom'});
sr.reveal('.discount-content', {origin: 'right'});
sr.reveal('.newsletter-content', {origin: 'left'});
sr.reveal('.testimonial-card', {interval: 100});