// drop down menu script

// hide the drop-down-menu__body when the page loads
document.addEventListener("DOMContentLoaded", function () {
    document
        .querySelector(".drop-down-menu__body")
        .classList.add("drop-down-menu__body--hidden");
    }
);

// show the drop-down-menu__body when the drop-down-menu__button is clicked
document
    .querySelector(".drop-down-menu__header")
    .addEventListener("click", function () {
        document
            .querySelector(".drop-down-menu__body")
            .classList.toggle("drop-down-menu__body--hidden");
    }
);

// add event listener to the menu items to hide the drop-down-menu__body when clicked
document.querySelectorAll(".menu__body__item").forEach(function (item) {
    item.addEventListener("click", function () {
        document
            .querySelector(".drop-down-menu__body")
            .classList.toggle("drop-down-menu__body--hidden");
        // add the selected item to the drop-down-menu__header
        document.querySelector(".drop-down-menu__header__title").innerHTML = item.innerHTML;
    });
});