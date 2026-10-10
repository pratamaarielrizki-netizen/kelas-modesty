/* =========================================
   HEADER SCROLL
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileNavigation =
    document.getElementById("mobileNavigation");

menuToggle.addEventListener("click", () => {

    mobileNavigation.classList.toggle("show");

});


/* CLOSE MOBILE MENU */

document
    .querySelectorAll(".mobile-navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove("show");

        });

    });


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".navigation a");


const navObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                });

                const current =
                    document.querySelector(
                        `.navigation a[href="#${entry.target.id}"]`
                    );

                if (current) {

                    current.classList.add("active");

                }

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(section => {

    navObserver.observe(section);

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".section");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.08
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   SCHOOL BELL
========================================= */

const schoolBell =
    document.getElementById("schoolBell");


let bellShown = false;


window.addEventListener("scroll", () => {

    if (
        window.scrollY > 250 &&
        !bellShown
    ) {

        schoolBell.classList.add("show");

        bellShown = true;


        setTimeout(() => {

            schoolBell.classList.remove("show");

        }, 3000);

    }

});


/* =========================================
   FACILITY HOVER
========================================= */

const facilities =
    document.querySelectorAll(".facility");


facilities.forEach(facility => {

    facility.addEventListener(
        "mousemove",
        event => {

            const rect =
                facility.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -2;

            const rotateY =
                ((x / rect.width) - 0.5) * 2;


            facility.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;

        }
    );


    facility.addEventListener(
        "mouseleave",
        () => {

            facility.style.transform = "";

        }
    );

});


/* =========================================
   LOCKER INTERACTION
========================================= */

const lockers =
    document.querySelectorAll(".locker");


lockers.forEach(locker => {

    locker.addEventListener("click", () => {

        locker.classList.toggle("highlight");

    });

});


/* =========================================
   SCHOOL BUTTON
========================================= */

const schoolButton =
    document.querySelector(".school-button");


schoolButton.addEventListener("click", () => {

    document
        .querySelector("#school")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================================
   ESCAPE
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        mobileNavigation.classList.remove("show");

    }

});