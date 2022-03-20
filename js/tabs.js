//const main = document.getElementById('main');
/*
tabButton.onclick = () => {
    console.log('click');
}
*/
const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design-text .design__descr');
const tabImages = document.querySelectorAll('.design-images');

tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (event) => {
        tabButtons.forEach((btn) => {
            btn.classList.toggle('design-list__item_active');
        });
        tabDescriptions.forEach((descr) => {
            descr.classList.toggle('hidden');
        });
        tabImages.forEach((imagesBlock, indexImagesBlocks) => {
            if (index === indexImagesBlocks) {
                imagesBlock.classList.remove('hidden');
            } else {
                imagesBlock.classList.add('hidden');
            }
        });
    });
});
