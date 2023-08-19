$(document).ready(function () {
    $('.slider__slides').slick({
        arrows: false,
        slidesToShow: 1.67,
        slidesToScroll: 1,
        dots: true,

        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
});

let showFormModal = document.querySelector(".show-modal-form");
let closeFormModal = document.querySelector(".modal__close");
let body = document.body;
let modal = document.querySelector(".modal")
let modalContainer = document.querySelector(".modal__container")

function openModal() {
    body.classList.add("modal-open");
}

function closeModal() {
    body.classList.remove('modal-open');
}

showFormModal.addEventListener("click", openModal);
closeFormModal.addEventListener("click", closeModal);
modal.addEventListener("click", function (e) {
    if (e.target == modal) {
        closeModal();
    }
});

window.addEventListener("load", body.classList.remove("preload"));

const animItems = document.querySelectorAll('.anim');
console.log(animItems);
if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
        for (let animItem of animItems) {
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerheight - window.innerHeight / animStart;
            }
            if ((scrollY > animItemOffset - animItemPoint) && (scrollY < (animItemOffset + animItemHeight))) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('anim-no-repeat')) {
                    animItem.classList.remove('active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 500);

}