/* ============================================================
   DOM
============================================================ */

const $ = selector =>
    document.querySelector(selector);

const $$ = selector =>
    document.querySelectorAll(selector);

    const introMadeleine =
    document.querySelector("#introMadeleine");


/* ============================================================
   LOADER
============================================================ */

window.addEventListener("load", () => {

    setTimeout(() => {

        $("#loader").classList.add("hide");

        document.body.classList.add("loaded");

    }, 1800);

});


/* ============================================================
   ELEMENTS
============================================================ */

const nav = $("#nav");

const hero = $("#hero");

const heroTitleTop =
    $("#heroTitleTop");

const heroTitleBottom =
    $("#heroTitleBottom");

const heroMadeleine =
    $("#heroMadeleine");

const intro =
    document.querySelector(".intro");

const introTitle =
    $("#introTitle");

const introCopy =
    $("#introCopy");

const introOrbit =
    document.querySelector(".intro-orbit");

const ingredients =
    document.querySelector(".ingredients");

const ingredientMadeleine =
    $("#ingredientMadeleine");

const ingredientTitle =
    $("#ingredientTitle");

const ingredient1 =
    $("#ingredient1");

const ingredient2 =
    $("#ingredient2");

const ingredient3 =
    $("#ingredient3");

const ingredient4 =
    $("#ingredient4");

const collection =
    document.querySelector(".collection");

    const products = [
        $("#product1"),
        $("#product2"),
        $("#product3"),
        $("#product4"),
        $("#product5")
    ];

const productName =
    $("#productName");

const productDescription =
    $("#productDescription");

const productPrice =
    $("#productPrice");

const productNumber =
    $("#productNumber");

const productCount =
    $("#productCount");

const collectionWord =
    $("#collectionWord");

const story =
    document.querySelector(".story");

const storyBg =
    $("#storyBg");

const storyCircle =
    $("#storyCircle");

const storyContent =
    $("#storyContent");

const storyWord =
    $("#storyWord");

const final =
    document.querySelector(".final");

const finalTitle =
    $("#finalTitle");

const finalMadeleine =
    $("#finalMadeleine");

const counter =
    $("#counter");


/* ============================================================
   UTILS
============================================================ */

function clamp(value, min, max) {

    return Math.max(
        min,
        Math.min(max, value)
    );

}


function lerp(a, b, amount) {

    return a + (b - a) * amount;

}


function sectionProgress(element) {

    const rect =
        element.getBoundingClientRect();

    const distance =
        window.innerHeight - rect.height;

    const progress =
        (window.innerHeight - rect.top) /
        (window.innerHeight + rect.height);

    return clamp(progress, 0, 1);

}


/* ============================================================
   HERO PARALLAX
============================================================ */

function animateHero() {

    const scroll =
        window.scrollY;

    const progress =
        clamp(
            scroll / window.innerHeight,
            0,
            1
        );


    /*
        TITRE
    */

    heroTitleTop.style.transform =
        `translate3d(
            ${-progress * 220}px,
            ${-progress * 180}px,
            0
        )`;

    heroTitleBottom.style.transform =
        `translate3d(
            ${progress * 220}px,
            ${-progress * 100}px,
            0
        )`;


    /*
        MADELEINE
    */

    const scale =
        1 + progress * 1.15;

    const rotation =
        progress * 12;

    const y =
        progress * 260;

    heroMadeleine.style.transform =
        `translate3d(
            0,
            ${y}px,
            0
        )
        scale(${scale})
        rotate(${rotation}deg)`;


    /*
        FADE
    */

    heroTitleTop.style.opacity =
        1 - progress * 1.5;

    heroTitleBottom.style.opacity =
        1 - progress * 1.5;

    heroMadeleine.style.opacity =
        1 - progress * .25;

}


/* ============================================================
   INTRO
============================================================ */

function animateIntro() {

    const rect =
        intro.getBoundingClientRect();

    const total =
        intro.offsetHeight -
        window.innerHeight;

    const progress =
        clamp(
            -rect.top / total,
            0,
            1
        );


    /*
        TITRE
    */

    const scale =
        1 - progress * .35;

    const y =
        progress * -180;

    introTitle.style.transform =
        `translate3d(
            0,
            ${y}px,
            0
        )
        scale(${scale})`;


    /*
        ORBITE
    */

    const rotation =
        progress * 180;

    introOrbit.style.transform =
        `rotate(${rotation}deg)
         scale(${1 + progress * .4})`;


    /*
        COPY
    */

    introCopy.style.transform =
        `translate3d(
            ${progress * -100}px,
            ${progress * 80}px,
            0
        )`;

    introCopy.style.opacity =
        clamp(
            1 - progress * 2,
            0,
            1
        );

        if (introMadeleine) {

    introMadeleine.style.transform =
        `translate3d(
            0,
            ${progress * 180}px,
            0
        )
        scale(${1 + progress * .5})
        rotate(${progress * 15}deg)`;

    introMadeleine.style.opacity =
        1 - progress * .5;

}

}


/* ============================================================
   INGREDIENTS
============================================================ */

function animateIngredients() {

    const rect =
        ingredients.getBoundingClientRect();

    const total =
        ingredients.offsetHeight -
        window.innerHeight;

    const progress =
        clamp(
            -rect.top / total,
            0,
            1
        );


    /*
        TITRE
    */

    ingredientTitle.style.transform =
        `translate3d(
            0,
            ${-progress * 160}px,
            0
        )`;

    ingredientTitle.style.opacity =
        1 - progress * 1.2;


    /*
        MADELEINE
    */

    const scale =
        .6 + progress * 1.1;

    const rotate =
        -12 + progress * 25;

    ingredientMadeleine.style.transform =
        `scale(${scale})
         rotate(${rotate}deg)`;


    /*
        INGREDIENTS
    */

    ingredient1.style.transform =
        `translate3d(
            ${progress * -220}px,
            ${progress * 120}px,
            0
        )`;

    ingredient2.style.transform =
        `translate3d(
            ${progress * 220}px,
            ${progress * 80}px,
            0
        )`;

    ingredient3.style.transform =
        `translate3d(
            ${progress * -180}px,
            ${progress * -100}px,
            0
        )`;

    ingredient4.style.transform =
        `translate3d(
            ${progress * 180}px,
            ${progress * -120}px,
            0
        )`;


    /*
        FADING
    */

    const fade =
        clamp(
            1 - Math.abs(progress - .7) * 4,
            0,
            1
        );

    ingredient1.style.opacity = fade;
    ingredient2.style.opacity = fade;
    ingredient3.style.opacity = fade;
    ingredient4.style.opacity = fade;

}


/* ============================================================
   COLLECTION
============================================================ */

const productData = [

    {
        name: "L'Originale",

        description:
            "Notre madeleine signature. Une texture moelleuse et un parfum délicatement vanillé.",

        price: "-- €"
    },

    {
        name: "L'Ébène",

        description:
            "Une madeleine intense au chocolat noir, profonde et généreuse.",

        price: "-- €"
    },

    {
        name: "L'ivoire",

        description:
            "La douceur du chocolat blanc",

        price: "-- €"
    },
    {
        name: "La Moka",

        description:
            "La délicatesse de la madeleine au café... Idéale pour accompagner l'autre café!",

        price: "-- €"
    },
    {
        name: "La Matcha",

        description:
            "Un peu de Japon avec votre madeleine?",

        price: "-- €"
    }


];

function animateCollection() {

    const rect =
        collection.getBoundingClientRect();

    const total =
        collection.offsetHeight -
        window.innerHeight;

    const progress =
        clamp(
            -rect.top / total,
            0,
            1
        );


    /*
        ========================================================
        5 PRODUITS

        progress :
        0.00 → produit 1
        0.20 → produit 2
        0.40 → produit 3
        0.60 → produit 4
        0.80 → produit 5
        1.00 → fin
        ========================================================
    */

    const productTotal = products.length;

    const raw =
        progress * productTotal;

    let index =
        Math.floor(raw);

    index =
        clamp(
            index,
            0,
            productTotal - 1
        );

    const local =
        raw - index;


    /*
        ========================================================
        PRODUITS
        ========================================================
    */

    products.forEach(
        (product, i) => {

            let opacity = 0;
            let scale = .6;
            let y = 120;
            let rotation = 0;


            /*
                PRODUIT ACTUEL
            */

            if (i === index) {

                opacity = 1;

                scale =
                    .72 +
                    Math.sin(local * Math.PI) * .3;

                y =
                    80 -
                    Math.sin(local * Math.PI) * 80;

                rotation =
                    Math.sin(local * Math.PI) * 8;

            }


            /*
                PRODUIT SUIVANT
            */

            else if (
                i === index + 1
            ) {

                opacity =
                    clamp(
                        local * 1.5,
                        0,
                        1
                    );

                scale =
                    .55 +
                    local * .2;

                y =
                    120 -
                    local * 100;

                rotation =
                    local * -8;

            }


            /*
                POSITION
            */

            product.style.opacity =
                opacity;

            product.style.transform =
                `translate3d(
                    0,
                    ${y}px,
                    0
                )
                scale(${scale})
                rotate(${rotation}deg)`;

        }
    );


    /*
        ========================================================
        TEXTE DU PRODUIT
        ========================================================
    */

    const data =
        productData[index];


    if (data) {

        productName.textContent =
            data.name;

        productDescription.textContent =
            data.description;

        productPrice.textContent =
            data.price;

        productNumber.textContent =
            `0${index + 1}`;

        productCount.textContent =
            `0${index + 1} / 05`;

    }


    /*
        ========================================================
        GRAND TEXTE "MADELEINE"
        ========================================================
    */

    collectionWord.style.transform =
        `translate3d(
            ${-progress * 1000}px,
            0,
            0
        )`;

}




/* ============================================================
   STORY
============================================================ */

function animateStory() {

    const rect =
        story.getBoundingClientRect();

    const total =
        story.offsetHeight -
        window.innerHeight;

    const progress =
        clamp(
            -rect.top / total,
            0,
            1
        );


    /*
        BACKGROUND
    */

    storyBg.style.transform =
        `scale(${1.15 + progress * .25})
         translate3d(
            0,
            ${progress * -100}px,
            0
         )`;


    /*
        CIRCLE
    */

  /*  storyCircle.style.transform =
        `translate(-50%, -50%)
         scale(${.8 + progress * .5})
         rotate(${progress * 25}deg)`;  */


    /*
        CONTENT
    */

    storyContent.style.transform =
        `translate3d(
            ${-progress * 130}px,
            ${-50 + progress * -20}%,
            0
        )`;

    storyContent.style.opacity =
        clamp(
            1 - progress * .7,
            0,
            1
        );


    /*
        BIG WORD
    */

    storyWord.style.transform =
        `translate3d(
            ${-progress * 600}px,
            0,
            0
        )`;

}


/* ============================================================
   FINAL
============================================================ */

function animateFinal() {

    const rect =
        final.getBoundingClientRect();

    const total =
        final.offsetHeight -
        window.innerHeight;

    const progress =
        clamp(
            -rect.top / total,
            0,
            1
        );


    /*
        TITRE
    */

    finalTitle.style.transform =
        `translate3d(
            0,
            ${-progress * 160}px,
            0
        )
        scale(${1 + progress * .3})`;


    /*
        MADELEINE
    */

    finalMadeleine.style.transform =
        `translate3d(
            0,
            ${progress * 180}px,
            0
        )
        scale(${1 + progress * 1.2})
        rotate(${progress * -15}deg)`;


    finalMadeleine.style.opacity =
        1 - progress * .7;

}


/* ============================================================
   NAV COLOR
============================================================ */

function updateNavigation() {

    const storyRect =
        story.getBoundingClientRect();

    const ingredientsRect =
        ingredients.getBoundingClientRect();

    const inDarkSection =
        ingredientsRect.top < 100 &&
        ingredientsRect.bottom > 100;

    const inStory =
        storyRect.top < 100 &&
        storyRect.bottom > 100;

    if (
        inDarkSection ||
        inStory
    ) {

        nav.classList.add("dark");

    } else {

        nav.classList.remove("dark");

    }


    if (window.scrollY > 80) {

        nav.classList.add("scrolled");

    } else {

        nav.classList.remove("scrolled");

    }

}


/* ============================================================
   SCROLL COUNTER
============================================================ */

function updateCounter() {

    const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        clamp(
            (window.scrollY / max) * 100,
            0,
            100
        );

    counter.textContent =
        `${Math.round(percentage)
            .toString()
            .padStart(2, "0")}%`;

}


/* ============================================================
   MASTER ANIMATION LOOP
============================================================ */

let ticking = false;

function update() {

    animateHero();

    animateIntro();

    animateIngredients();

    animateCollection();

    animateStory();

    animateFinal();

    updateNavigation();

    updateCounter();

    ticking = false;

}


window.addEventListener(
    "scroll",
    () => {

        if (!ticking) {

            window.requestAnimationFrame(
                update
            );

            ticking = true;

        }

    },
    {
        passive: true
    }
);


/* ============================================================
   MOUSE PARALLAX
============================================================ */

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;


window.addEventListener(
    "mousemove",
    event => {

        mouseX =
            (event.clientX /
            window.innerWidth - .5);

        mouseY =
            (event.clientY /
            window.innerHeight - .5);

    }
);


function mouseAnimation() {

    currentX =
        lerp(
            currentX,
            mouseX,
            .04
        );

    currentY =
        lerp(
            currentY,
            mouseY,
            .04
        );


    /*
        Madeleine Hero
    */

    if (heroMadeleine) {

        const rect =
            hero.getBoundingClientRect();

        if (
            rect.bottom > 0 &&
            rect.top < window.innerHeight
        ) {

            const offsetX =
                currentX * 25;

            const offsetY =
                currentY * 18;

            heroMadeleine.style.marginLeft =
                `${offsetX}px`;

            heroMadeleine.style.marginTop =
                `${offsetY}px`;

        }

    }


    requestAnimationFrame(
        mouseAnimation
    );

}

mouseAnimation();


/* ============================================================
   RESIZE
============================================================ */

window.addEventListener(
    "resize",
    () => {

        update();

    }
);


/* ============================================================
   INITIAL
============================================================ */

update();
