const carousel = document.querySelector('#carouselExample');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carouselInner.querySelectorAll('.carousel-item');
const paginationItems = document.querySelectorAll('.custom-pagination .page-item');
const cardTitle = document.getElementById('card-title');
const cardText = document.getElementById('card-text');
const orderButton = document.querySelector('.btn-warning'); // Button inside the card

const contentData = [
    {
        title: 'Cool, Creamy,Irresistible',
        text: 'Scoop up happiness with our irresistible soft serve cones and strawberry sundaes. Limited time, unlimited temptation--grab yours today!',
        buttonText: 'Visit Now', // Dynamic button text
        cardWidth: '22rem', // Card width
        cardHeight: '20rem', // Card height
    },
    {
        title: 'Unlock Knowledge & Win Treats',
        text: "Level up your skills with Knowledge on the Go! Register now via the McDonald's App and win exciting treats!",
        buttonText: 'Register Now', // Dynamic button text
        cardWidth: '22rem', // Card width
        cardHeight: '20rem', // Card height
    },
    {
        title: 'Your Daily Dose of Deliciousness!',
        text: "Enjoy daily deals on your McDonald's favorities with princes that make every day delicious.",
        buttonText: 'Order Now', // Dynamic button text
        cardWidth: '385.2px', // Card width
        cardHeight: '18rem', // Card height
    },
    {
        title: 'Chick-tastic Offer!',
        text: 'Chick out the savings and enjoy a delicious meal today!',
        buttonText: 'Order Now', // Dynamic button text
        cardWidth: '385.2px', // Card width
        cardHeight: '259.42px', // Card height
    },
    {
        title: 'Loyalty Points Zaroori Hai!',
        text: "Earn points on every Delivery order placed via the McDonald's App",
        buttonText: 'Download Now', // Dynamic button text
        cardWidth: '385.2px', // Card width
        cardHeight: '18rem', // Card height
    },
];

let currentIndex = 0;
let interval;

function updateActiveSlide(index) {
    // Update active carousel item
    carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    // Update active pagination item
    paginationItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    // Update card content
    const currentContent = contentData[index];
    cardTitle.textContent = currentContent.title;
    cardText.textContent = currentContent.text;

    // Update button text
    orderButton.textContent = currentContent.buttonText;

    // Adjust card width and height
    const card = document.querySelector('.card');
    card.style.width = currentContent.cardWidth;
    card.style.height = currentContent.cardHeight;
}

function startAutoSlide() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateActiveSlide(currentIndex);
    }, 2000);
}

paginationItems.forEach((item) => {
    item.addEventListener('click', () => {
        clearInterval(interval);
        currentIndex = parseInt(item.getAttribute('data-index'));
        updateActiveSlide(currentIndex);
        startAutoSlide();
    });
});

startAutoSlide();

