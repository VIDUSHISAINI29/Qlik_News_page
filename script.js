const page1 = document.querySelector('.left_item1');
const page2 = document.querySelector('.left_item2');
const page3 = document.querySelector('.left_item3');
const page4 = document.querySelector('.left_item4');
const page5 = document.querySelector('.left_item5');
const page6 = document.querySelector('.left_item6');
const page7 = document.querySelector('.left_item7');
const page8 = document.querySelector('.left_item8');
const page9 = document.querySelector('.left_item9');
const page10 = document.querySelector('.left_item10');
const page11 = document.querySelector('.left_item11');
const hamburger = document.querySelector('.cross_icon');
const left_elem = document.querySelector('.left_bar')

const page_array = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11]

function clickGreen(page) {
    page.addEventListener('click', () => {
        page_array.forEach((item) => {
            item.classList.remove('active');
        });
        // Add 'active' class to the clicked item
        page.classList.add('active');
    });
}

page_array.forEach(page => {
    clickGreen(page);

});
hamburger.addEventListener('click', () =>{
    if(left_elem.style.display === 'none'){
        left_elem.style.display = 'block'
    }else{
        left_elem.style.display = 'none'
    }
    
})