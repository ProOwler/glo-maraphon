//const main = document.getElementById('main');
const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescriptions = document.querySelectorAll(
  ".design-text .design__descr"
);
const tabImages = document.querySelectorAll(".design-images");
const tabHomeworkImage = document.querySelectorAll("img.feature__img");
const tabHomeworkTitle = document.querySelectorAll("h2.design__title");

function refreshTitle() {
  document.title = document.querySelector(
    "h2.design__title:not(.hidden)"
  ).innerText;
}

refreshTitle();

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", (event) => {
    //tabButton.dataset.active = '123';

    // 1 - проверка на совпадение с нажатой кнопкой
    tabButtons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
    // 2 - просто переключение (средняя надёжность:
    // работает, если только 2 элемента и нужно "менять их местами")
    /*
        tabDescriptions.forEach((descr) => {
            descr.classList.toggle('hidden');
        });
        */
    // 3 - переключение с проверкой на индекс (не особо надёжно)
    /*
        tabImages.forEach((imagesBlock, indexImagesBlocks) => {
            if (index === indexImagesBlocks) {
                imagesBlock.classList.remove('hidden');
            } else {
                imagesBlock.classList.add('hidden');
            }
        });
        */
    // 4 - переключение с проверкой на дата-атрибут
    //const dataValue = tabButton.dataset.tabsHandler;
    /*
        tabImages.forEach((imagesBlock) => {
            if (imagesBlock.dataset.tabsField === dataValue) {
                imagesBlock.classList.remove('hidden');
            } else {
                imagesBlock.classList.add('hidden');
            }
        });
        tabDescriptions.forEach((descr) => {
            if (descr.dataset.tabsField === dataValue) {
                descr.classList.remove('hidden');
            } else {
                descr.classList.add('hidden');
            }
        });
        */
    // 4.1 - переключение с проверкой на дата-атрибут, с функцией
    function changeContent(array, tabToggler, styleName) {
      array.forEach((elem) => {
        if (elem.dataset.tabsField === tabToggler.dataset.tabsHandler) {
          elem.classList.remove(styleName);
        } else {
          elem.classList.add(styleName);
        }
      });
    }
    changeContent(tabImages, tabButton, "hidden");
    changeContent(tabDescriptions, tabButton, "hidden");
    changeContent(tabHomeworkImage, tabButton, "hidden");

    tabHomeworkTitle.forEach((ttl) => {
      ttl.classList.toggle("hidden");
    });
    refreshTitle();
  });
});
