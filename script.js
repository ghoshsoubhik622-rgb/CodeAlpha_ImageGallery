/* =========================================================
   FRAMEFLOW
   FINAL IMAGE GALLERY
   60 PHOTOS
========================================================= */

const gallery = document.getElementById("gallery");

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

const resultCount = document.getElementById("resultCount");
const currentCategory = document.getElementById("currentCategory");

const empty = document.getElementById("empty");
const resetBtn = document.getElementById("resetBtn");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxCounter = document.getElementById("lightboxCounter");

const lightboxFavorite =
    document.getElementById("lightboxFavorite");

const closeLightbox =
    document.getElementById("closeLightbox");

const previous =
    document.getElementById("previous");

const next =
    document.getElementById("next");

const randomBtn =
    document.getElementById("randomBtn");

const themeBtn =
    document.getElementById("themeBtn");


/* =========================================================
   PHOTO DATA
========================================================= */

const photos = [

    /* =========================
       NATURE
    ========================= */

    {
        id: 1,
        title: "Forest Light",
        category: "Nature",
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 2,
        title: "Green Wilderness",
        category: "Nature",
        image:
            "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 3,
        title: "Mountain Landscape",
        category: "Nature",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 4,
        title: "Forest Path",
        category: "Nature",
        image:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 5,
        title: "Rocky Wilderness",
        category: "Nature",
        image:
            "https://images.unsplash.com/photo-1445308124430-8357b98a6f71?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 6,
        title: "Peaceful Landscape",
        category: "Nature",
        image:
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
    },


    /* =========================
       TRAVEL
    ========================= */

    {
        id: 7,
        title: "Tropical Escape",
        category: "Travel",
        image:
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 8,
        title: "Venice Canal",
        category: "Travel",
        image:
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 9,
        title: "Paris Streets",
        category: "Travel",
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 10,
        title: "Italian Journey",
        category: "Travel",
        image:
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 11,
        title: "Coastal Adventure",
        category: "Travel",
        image:
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 12,
        title: "Island Getaway",
        category: "Travel",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
    },


    /* =========================
       CITY
    ========================= */

    {
        id: 13,
        title: "Urban Architecture",
        category: "City",
        image:
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 14,
        title: "City Lights",
        category: "City",
        image:
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 15,
        title: "Modern Skyline",
        category: "City",
        image:
            "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 16,
        title: "City Streets",
        category: "City",
        image:
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 17,
        title: "Downtown View",
        category: "City",
        image:
            "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 18,
        title: "Urban Life",
        category: "City",
        image:
            "https://images.unsplash.com/photo-1599927438208-ddd6f9764ae6?auto=format&fit=crop&w=1200&q=85"
    },


    /* =========================
       ANIMALS
    ========================= */

    {
        id: 19,
        title: "Golden Retriever",
        category: "Animals",
        image:
            "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 20,
        title: "Lion",
        category: "Animals",
        image:
            "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 21,
        title: "Colorful Parrot",
        category: "Animals",
        image:
            "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 22,
        title: "Wildlife",
        category: "Animals",
        image:
            "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 23,
        title: "Wild Fox",
        category: "Animals",
        image:
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 24,
        title: "Bird in Nature",
        category: "Animals",
        image:
            "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=85"
    },


    /* =========================
       OCEAN
    ========================= */

    {
        id: 25,
        title: "Blue Ocean",
        category: "Ocean",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 26,
        title: "Clear Blue Water",
        category: "Ocean",
        image:
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 27,
        title: "Ocean Waves",
        category: "Ocean",
        image:
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 28,
        title: "Coastal Horizon",
        category: "Ocean",
        image:
            "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 29,
        title: "Sailing Waters",
        category: "Ocean",
        image:
            "https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 30,
        title: "Ocean View",
        category: "Ocean",
        image:
            "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=85"
    },


    /* =========================
       SUNSET
    ========================= */

    {
        id: 31,
        title: "Colorful Sunset",
        category: "Sunset",
        image:
            "https://images.unsplash.com/photo-1433492753406-04e6d7ed995c?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 32,
        title: "Golden Horizon",
        category: "Sunset",
        image:
            "https://images.unsplash.com/photo-1446834898093-264bbb1bdcc9?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 33,
        title: "Sunset Reflection",
        category: "Sunset",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 34,
        title: "Beach Sunset",
        category: "Sunset",
        image:
            "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 35,
        title: "Warm Evening",
        category: "Sunset",
        image:
            "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 36,
        title: "Sunset Landscape",
        category: "Sunset",
        image:
            "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1200&q=85"
    },


    /* =========================
       MOUNTAINS
    ========================= */

    {
        id: 37,
        title: "Snowy Peaks",
        category: "Mountains",
        image:
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 38,
        title: "Mountain Lake",
        category: "Mountains",
        image:
            "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 39,
        title: "Alpine Landscape",
        category: "Mountains",
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 40,
        title: "Rocky Peaks",
        category: "Mountains",
        image:
            "https://images.unsplash.com/photo-1551678553-8ce91956dac1?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 41,
        title: "Mountain Trail",
        category: "Mountains",
        image:
            "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 42,
        title: "Mountain Valley",
        category: "Mountains",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85"
    },


    /* =========================
       FLOWERS
    ========================= */

    {
        id: 43,
        title: "White Flower",
        category: "Flowers",
        image:
            "https://images.unsplash.com/photo-1554929082-a38082b4bd14?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 44,
        title: "Flower Garden",
        category: "Flowers",
        image:
            "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 45,
        title: "Wild Flowers",
        category: "Flowers",
        image:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 46,
        title: "Colorful Garden",
        category: "Flowers",
        image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 47,
        title: "Spring Flowers",
        category: "Flowers",
        image:
            "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 48,
        title: "Garden Bloom",
        category: "Flowers",
        image:
            "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85"
    },


    /* =========================
       FOOD
    ========================= */

    {
        id: 49,
        title: "Fresh Pizza",
        category: "Food",
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 50,
        title: "Gourmet Food",
        category: "Food",
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 51,
        title: "Classic Burger",
        category: "Food",
        image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 52,
        title: "Fresh Salad",
        category: "Food",
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 53,
        title: "Healthy Meal",
        category: "Food",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 54,
        title: "Coffee & Dessert",
        category: "Food",
        image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
    },


    /* =========================
       CARS
    ========================= */

    {
        id: 55,
        title: "Sports Car",
        category: "Cars",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 56,
        title: "Luxury Automobile",
        category: "Cars",
        image:
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 57,
        title: "Classic Automobile",
        category: "Cars",
        image:
            "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 58,
        title: "Automotive Design",
        category: "Cars",
        image:
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 59,
        title: "Performance Car",
        category: "Cars",
        image:
            "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 60,
        title: "Modern Car",
        category: "Cars",
        image:
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=85"
    }

];


/* =========================================================
   STATE
========================================================= */

let selectedCategory = "All";
let searchTerm = "";
let currentIndex = 0;

let favorites =
    JSON.parse(
        localStorage.getItem("frameflowFavorites")
    ) || [];


/* =========================================================
   FALLBACK IMAGE
========================================================= */

/*
   If an external image fails, use a known working
   photography image instead of displaying a broken icon.
*/

const fallbackImage =
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85";


/* =========================================================
   FAVORITE FUNCTIONS
========================================================= */

function isFavorite(id) {

    return favorites.includes(id);

}


function toggleFavorite(id) {

    if (isFavorite(id)) {

        favorites =
            favorites.filter(
                favoriteId =>
                    favoriteId !== id
            );

    } else {

        favorites.push(id);

    }

    localStorage.setItem(
        "frameflowFavorites",
        JSON.stringify(favorites)
    );

    render();

    updateLightboxFavorite();

}


/* =========================================================
   FILTER
========================================================= */

function getFilteredPhotos() {

    return photos.filter(photo => {

        let categoryMatch;


        if (selectedCategory === "All") {

            categoryMatch = true;

        }

        else if (
            selectedCategory === "Favorites"
        ) {

            categoryMatch =
                isFavorite(photo.id);

        }

        else {

            categoryMatch =
                photo.category ===
                selectedCategory;

        }


        const searchableText =
            (
                photo.title +
                " " +
                photo.category
            ).toLowerCase();


        const searchMatch =
            searchableText.includes(
                searchTerm
            );


        return (
            categoryMatch &&
            searchMatch
        );

    });

}


/* =========================================================
   RENDER GALLERY
========================================================= */

function render() {

    const filtered =
        getFilteredPhotos();


    gallery.innerHTML = "";


    filtered.forEach(
        (photo, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className = "card";


            card.style.animationDelay =
                `${index * 0.035}s`;


            card.innerHTML = `

                <img
                    src="${photo.image}"
                    alt="${photo.title}"
                    loading="lazy"
                >

                <button
                    class="favorite ${
                        isFavorite(photo.id)
                            ? "active"
                            : ""
                    }"
                    aria-label="Favorite photo">

                    <i class="${
                        isFavorite(photo.id)
                            ? "fa-solid"
                            : "fa-regular"
                    } fa-heart"></i>

                </button>


                <div class="card-info">

                    <span class="card-category">
                        ${photo.category}
                    </span>

                    <h2 class="card-title">
                        ${photo.title}
                    </h2>

                </div>

            `;


            const image =
                card.querySelector("img");


            image.addEventListener(
                "error",
                () => {

                    if (
                        image.src !==
                        fallbackImage
                    ) {

                        image.src =
                            fallbackImage;

                    }

                }
            );


            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            ".favorite"
                        )
                    ) {

                        return;

                    }


                    openLightbox(
                        photos.indexOf(
                            photo
                        )
                    );

                }
            );


            card.querySelector(
                ".favorite"
            ).addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavorite(
                        photo.id
                    );

                }
            );


            gallery.appendChild(card);

        }
    );


    resultCount.textContent =
        `${filtered.length} ${
            filtered.length === 1
                ? "photo"
                : "photos"
        }`;


    currentCategory.textContent =
        selectedCategory === "All"
            ? "All Photos"
            : selectedCategory;


    if (filtered.length === 0) {

        gallery.style.display =
            "none";

        empty.style.display =
            "block";

    }

    else {

        gallery.style.display =
            "grid";

        empty.style.display =
            "none";

    }

}


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".filter"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                selectedCategory =
                    button.dataset.category;


                render();

            }
        );

    });


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    () => {

        searchTerm =
            searchInput.value
                .trim()
                .toLowerCase();


        render();

    }
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        searchTerm = "";

        render();

    }
);


/* =========================================================
   RESET
========================================================= */

resetBtn.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        searchTerm = "";

        selectedCategory = "All";


        document
            .querySelectorAll(
                ".filter"
            )
            .forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


        document
            .querySelector(
                '[data-category="All"]'
            )
            .classList.add(
                "active"
            );


        render();

    }
);


/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(index) {

    currentIndex = index;


    const photo =
        photos[currentIndex];


    lightboxImage.src =
        photo.image;


    lightboxImage.alt =
        photo.title;


    lightboxImage.onerror =
        function () {

            this.onerror = null;

            this.src =
                fallbackImage;

        };


    lightboxTitle.textContent =
        photo.title;


    lightboxCategory.textContent =
        photo.category;


    lightboxCounter.textContent =
        `${currentIndex + 1} / ${photos.length}`;


    updateLightboxFavorite();


    lightbox.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


function close() {

    lightbox.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";

}


function showNext() {

    currentIndex =
        (
            currentIndex + 1
        ) % photos.length;


    openLightbox(
        currentIndex
    );

}


function showPrevious() {

    currentIndex =
        (
            currentIndex -
            1 +
            photos.length
        ) % photos.length;


    openLightbox(
        currentIndex
    );

}


/* =========================================================
   LIGHTBOX FAVORITE
========================================================= */

function updateLightboxFavorite() {

    const photo =
        photos[currentIndex];


    const active =
        isFavorite(photo.id);


    lightboxFavorite.classList.toggle(
        "active",
        active
    );


    lightboxFavorite.innerHTML = `

        <i class="${
            active
                ? "fa-solid"
                : "fa-regular"
        } fa-heart"></i>

    `;

}


/* =========================================================
   LIGHTBOX EVENTS
========================================================= */

closeLightbox.addEventListener(
    "click",
    close
);


next.addEventListener(
    "click",
    showNext
);


previous.addEventListener(
    "click",
    showPrevious
);


lightboxFavorite.addEventListener(
    "click",
    () => {

        toggleFavorite(
            photos[currentIndex].id
        );

    }
);


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            lightbox
        ) {

            close();

        }

    }
);


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox.classList.contains(
                "open"
            )
        ) {

            return;

        }


        if (event.key === "Escape") {

            close();

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            showNext();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            showPrevious();

        }

    }
);


/* =========================================================
   RANDOM PHOTO
========================================================= */

randomBtn.addEventListener(
    "click",
    () => {

        const randomIndex =
            Math.floor(
                Math.random() *
                photos.length
            );


        openLightbox(
            randomIndex
        );

    }
);


/* =========================================================
   THEME
========================================================= */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        const isLight =
            document.body.classList.contains(
                "light"
            );


        themeBtn.innerHTML =
            isLight

                ? '<i class="fa-solid fa-sun"></i>'

                : '<i class="fa-solid fa-moon"></i>';

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

render();