
const pricingTable = document.querySelector('.panel__pricing-table');
pricingTable.addEventListener('mouseover', () => {
    pricingTable.style.backgroundColor = '#f9e298';
});
pricingTable.addEventListener('mouseout', () => {
    pricingTable.style.backgroundColor = '#dad7cd';
});


const imgs = document.querySelectorAll('.pricing-img');

imgs.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = '1';
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = '0.6';
    });
});

const titles = document.querySelectorAll('.pricing-header');
titles.forEach(title => {
    title.addEventListener('mouseover', () => {
        title.style.color = 'black';
    });
    title.addEventListener('mouseout', () => {
        title.style.color = '#3a5a40aa';
    });
});

const prices = document.querySelectorAll('.pricing-fiture-item');
prices.forEach(price => {
    price.addEventListener('mouseover', () => {
        price.style.border = '1px solid #3a5a40aa';
        price.style.borderRadius = '10px';
    });
    price.addEventListener('mouseout', () => {
        price.style.border = 'none';
    });
    price.addEventListener('click', () => {
        price.classList.toggle('background');
    });
});