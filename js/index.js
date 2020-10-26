const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const header = document.querySelector('header');
const topSection = document.querySelector('.cta');
const mainSection = document.querySelector('.main-content');
const contactSection = document.querySelector('.contact');
const footerSection = document.querySelector('footer');

const linksHeader = header.querySelectorAll('a');
linksHeader[0].textContent = siteContent['nav']['nav-item-1'];
linksHeader[1].textContent = siteContent['nav']['nav-item-2'];
linksHeader[2].textContent = siteContent['nav']['nav-item-3'];
linksHeader[3].textContent = siteContent['nav']['nav-item-4'];
linksHeader[4].textContent = siteContent['nav']['nav-item-5'];
linksHeader[5].textContent = siteContent['nav']['nav-item-6'];

const topSectionHeader = topSection.querySelector('h1');
topSectionHeader.textContent = siteContent['cta']['h1'];
const topSectionButton = topSection.querySelector('button');
topSectionButton.textContent = siteContent['cta']['button'];
const topSectionImage = document.getElementById('cta-img');
topSectionImage.setAttribute('src', siteContent['cta']['img-src']);

const titleMain = mainSection.querySelectorAll('h4');
titleMain[0].textContent = siteContent['main-content']['features-h4'];
const textMain = mainSection.querySelectorAll('p');
textMain[0].textContent = siteContent['main-content']['features-content'];
titleMain[1].textContent = siteContent['main-content']['about-h4'];
textMain[1].textContent = siteContent['main-content']['about-content'];
const imageMain = document.getElementById('middle-img');
imageMain.setAttribute('src', siteContent['main-content']['middle-img-src']);
titleMain[2].textContent = siteContent['main-content']['services-h4'];
textMain[2].textContent = siteContent['main-content']['services-content'];
titleMain[3].textContent = siteContent['main-content']['product-h4'];
textMain[3].textContent = siteContent['main-content']['product-content'];
titleMain[4].textContent = siteContent['main-content']['vision-h4'];
textMain[4].textContent = siteContent['main-content']['vision-content'];

const titleContact = contactSection.querySelector('h4');
titleContact.textContent = siteContent['contact']['contact-h4'];
const textContact = contactSection.querySelectorAll('p');
textContact[0].textContent = siteContent['contact']['address'];
textContact[1].textContent = siteContent['contact']['phone'];
textContact[2].textContent = siteContent['contact']['email'];

const textFooter = footerSection.querySelector('p');
textFooter.textContent = siteContent['footer']['copyright'];

linksHeader[0].style.color = 'green';
linksHeader[1].style.color = 'green';
linksHeader[2].style.color = 'green';
linksHeader[3].style.color = 'green';
linksHeader[4].style.color = 'green';
linksHeader[5].style.color = 'green';

const valuesLink = document.createElement("a");
valuesLink.textContent = "Our Values";
valuesLink.href = "#";
valuesLink.style.color = 'green';
document.querySelector("nav").appendChild(valuesLink);

const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
blogLink.style.color = 'green';
document.querySelector("nav").appendChild(blogLink);