/* ==========================================================
   EAGLE KREATIVES DESIGN
   INTERACTIVE JAVASCRIPT
========================================================== */


/* ==========================================================
   SERVICES
========================================================== */

const services = [

    {
        title: "Brand Identity & Logo Design",
        description:
            "Strategic logos, visual identities, colour systems and brand guidelines that give businesses a recognisable personality."
    },

    {
        title: "Graphic Design",
        description:
            "Professional visual communication for campaigns, businesses, organisations and personal brands."
    },

    {
        title: "Social Media Design",
        description:
            "Scroll-stopping social media graphics, campaign visuals and content systems designed for consistency."
    },

    {
        title: "Website Design",
        description:
            "Modern, responsive and conversion-focused website interfaces for businesses and creative brands."
    },

    {
        title: "UI / UX Design",
        description:
            "Clean, intuitive digital experiences designed around users, usability and strong visual hierarchy."
    },

    {
        title: "Flyer & Poster Design",
        description:
            "Promotional designs that communicate important information quickly while maintaining a strong visual identity."
    },

    {
        title: "Packaging Design",
        description:
            "Product packaging and label designs that help products stand out and communicate value."
    },

    {
        title: "Motion Graphics",
        description:
            "Animated graphics and promotional visuals for social media, campaigns, presentations and advertising."
    },

    {
        title: "Print & Production Design",
        description:
            "Professional artwork for banners, brochures, business cards, apparel, signage and other print applications."
    },

    {
        title: "Creative Direction",
        description:
            "Creative guidance that connects strategy, visual identity, content and execution into one coherent brand."
    }

];


const servicesList =
    document.getElementById("servicesList");


function renderServices() {

    if (!servicesList) return;


    servicesList.innerHTML = "";


    services.forEach((service, index) => {

        const row =
            document.createElement("article");


        row.className =
            "service-row reveal";


        row.innerHTML = `

            <span class="service-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>
                ${service.title}
            </h3>

            <p>
                ${service.description}
            </p>

            <span class="service-arrow">
                ↗
            </span>

        `;


        servicesList.appendChild(row);

    });

}



/* ==========================================================
   PORTFOLIO
========================================================== */

const projects = [

    {
        title: "Apex Identity",
        category: "Branding",
        filter: "branding",
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=90",
        description:
            "A bold visual identity created around clarity, confidence and modern business."
    },

    {
        title: "Northline Digital",
        category: "Digital",
        filter: "digital",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90",
        description:
            "A clean digital experience focused on modern presentation and usability."
    },

    {
        title: "Vibe Campaign",
        category: "Social Media",
        filter: "social",
        image:
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1400&q=90",
        description:
            "A social campaign system designed for consistent and engaging online communication."
    },

    {
        title: "Sable Print",
        category: "Print",
        filter: "print",
        image:
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=90",
        description:
            "Editorial-inspired print artwork with a refined visual direction."
    },

    {
        title: "Kora Brand System",
        category: "Branding",
        filter: "branding",
        image:
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=90",
        description:
            "A complete brand system combining typography, colour and visual language."
    },

    {
        title: "Studio Interface",
        category: "Digital",
        filter: "digital",
        image:
            "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=90",
        description:
            "A modern interface concept designed to make information easier to explore."
    },

    {
        title: "Urban Launch",
        category: "Social Campaign",
        filter: "social",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90",
        description:
            "A campaign visual language created to support a major product launch."
    },

    {
        title: "Mono Stationery",
        category: "Print",
        filter: "print",
        image:
            "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1400&q=90",
        description:
            "Minimal business stationery built around a strong and professional identity."
    },

    {
        title: "Aerial Coffee",
        category: "Branding",
        filter: "branding",
        image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=90",
        description:
            "A lifestyle-focused brand concept designed around warmth and personality."
    },

    {
        title: "Creative Dashboard",
        category: "Digital Product",
        filter: "digital",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90",
        description:
            "A dashboard interface designed to make complex information easier to understand."
    },

    {
        title: "Pulse Content",
        category: "Social Media",
        filter: "social",
        image:
            "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1400&q=90",
        description:
            "Dynamic social content developed around a modern visual system."
    },

    {
        title: "Bold Poster Series",
        category: "Print",
        filter: "print",
        image:
            "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=90",
        description:
            "A poster series combining expressive typography with strong visual composition."
    },

    {
        title: "Orbit Finance",
        category: "Brand Identity",
        filter: "branding",
        image:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=90",
        description:
            "A professional visual identity designed for a modern financial company."
    },

    {
        title: "Mobile Experience",
        category: "UI / UX",
        filter: "digital",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=90",
        description:
            "A mobile-first interface concept focused on simple and intuitive interactions."
    },

    {
        title: "Festival Promo",
        category: "Social Campaign",
        filter: "social",
        image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=90",
        description:
            "Promotional campaign artwork designed for a high-energy event."
    },

    {
        title: "Editorial Lookbook",
        category: "Print",
        filter: "print",
        image:
            "https://images.unsplash.com/photo-1543002588-bfa74002ed7?auto=format&fit=crop&w=1400&q=90",
        description:
            "A premium editorial layout with a clean fashion-inspired visual direction."
    },

    {
        title: "Nova Packaging",
        category: "Branding",
        filter: "branding",
        image:
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1400&q=90",
        description:
            "A packaging concept developed to create a distinctive shelf presence."
    },

    {
        title: "Agency Web System",
        category: "Digital",
        filter: "digital",
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=90",
        description:
            "A digital design system created for a contemporary creative agency."
    },

    {
        title: "Brand Story",
        category: "Social",
        filter: "social",
        image:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=90",
        description:
            "A visual storytelling system developed for digital communication."
    },

    {
        title: "Premium Brochure",
        category: "Print",
        filter: "print",
        image:
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1400&q=90",
        description:
            "A polished brochure design focused on clear information and premium presentation."
    }

];


const portfolioGrid =
    document.getElementById("portfolioGrid");


function renderPortfolio(filter = "all") {

    if (!portfolioGrid) return;


    portfolioGrid.innerHTML = "";


    const visibleProjects =
        filter === "all"
            ? projects
            : projects.filter(
                project =>
                    project.filter === filter
            );


    visibleProjects.forEach(
        (project, index) => {

            const card =
                document.createElement("article");


            card.className =
                "project reveal";


            card.dataset.index =
                projects.indexOf(project);


            card.setAttribute(
                "tabindex",
                "0"
            );


            card.innerHTML = `

                <img
                    class="project-image"
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy"
                >

                <div class="project-overlay">

                    <div class="project-info">

                        <span>
                            ${project.category}
                        </span>

                        <h3>
                            ${project.title}
                        </h3>

                    </div>

                </div>

                <span class="project-number">
                    ${String(
                        projects.indexOf(project) + 1
                    ).padStart(2, "0")}
                </span>

            `;


            portfolioGrid.appendChild(card);

        }
    );


    observeReveal();

}


/* ==========================================================
   FILTERS
========================================================== */

const filterButtons =
    document.querySelectorAll(
        ".portfolio-filter"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );


            button.classList.add("active");


            renderPortfolio(
                button.dataset.filter
            );

        }
    );

});


/* ==========================================================
   MODAL
========================================================== */

const portfolioModal =
    document.getElementById(
        "portfolioModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalCategory =
    document.getElementById(
        "modalCategory"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


function openProject(index) {

    const project =
        projects[index];


    if (!project) return;


    modalImage.src =
        project.image;


    modalImage.alt =
        project.title;


    modalTitle.textContent =
        project.title;


    modalCategory.textContent =
        project.category;


    modalDescription.textContent =
        project.description;


    portfolioModal.classList.add(
        "open"
    );


    portfolioModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function closeProject() {

    portfolioModal.classList.remove(
        "open"
    );


    portfolioModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


portfolioGrid.addEventListener(
    "click",
    event => {

        const project =
            event.target.closest(
                ".project"
            );


        if (!project) return;


        openProject(
            Number(project.dataset.index)
        );

    }
);


portfolioGrid.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Enter" &&
            event.key !== " "
        ) return;


        const project =
            event.target.closest(
                ".project"
            );


        if (!project) return;


        event.preventDefault();


        openProject(
            Number(project.dataset.index)
        );

    }
);


modalClose.addEventListener(
    "click",
    closeProject
);


document.querySelector(
    ".modal-overlay"
).addEventListener(
    "click",
    closeProject
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            portfolioModal.classList.contains(
                "open"
            )
        ) {

            closeProject();

        }

    }
);


/* ==========================================================
   MOBILE NAVIGATION
========================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const mobileNavigation =
    document.getElementById(
        "mobileNavigation"
    );


menuButton.addEventListener(
    "click",
    () => {

        const open =
            mobileNavigation.classList.toggle(
                "open"
            );


        menuButton.setAttribute(
            "aria-expanded",
            open
        );

    }
);


mobileNavigation
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileNavigation.classList.remove(
                    "open"
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


/* ==========================================================
   SCROLL REVEAL
========================================================== */

let revealObserver;


function createRevealObserver() {

    if (
        !("IntersectionObserver" in window)
    ) {

        document
            .querySelectorAll(".reveal")
            .forEach(element => {

                element.classList.add(
                    "visible"
                );

            });

        return;

    }


    revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .08,

                rootMargin:
                    "0px 0px -30px 0px"
            }
        );

}


function observeReveal() {

    if (!revealObserver) {

        createRevealObserver();

    }


    if (!revealObserver) return;


    document
        .querySelectorAll(
            ".reveal:not(.visible)"
        )
        .forEach(element => {

            revealObserver.observe(
                element
            );

        });

}


/* ==========================================================
   CONTACT FORM
========================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formStatus =
    document.getElementById(
        "formStatus"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const formData =
            new FormData(
                contactForm
            );


        const name =
            formData.get("name");


        const email =
            formData.get("email");


        const service =
            formData.get("service");


        const message =
            formData.get("message");


        if (
            !name ||
            !email ||
            !service ||
            !message
        ) {

            formStatus.textContent =
                "Please complete all required fields.";

            return;

        }


        const subject =
            encodeURIComponent(
                `New Eagle Kreatives Project — ${service}`
            );


        const body =
            encodeURIComponent(

                `Hello Eagle Kreatives Design,

I would like to discuss a project.

Name:
${name}

Email:
${email}

Service:
${service}

Project Details:
${message}

Thank you.`

            );


        const mailto =
            `mailto:eaglekreativesdesign@gmail.com?subject=${subject}&body=${body}`;


        formStatus.textContent =
            "Opening your email application...";


        window.location.href =
            mailto;

    }
);


/* ==========================================================
   PAGE LOADER
========================================================== */

window.addEventListener(
    "load",
    () => {

        const loader =
            document.getElementById(
                "pageLoader"
            );


        setTimeout(
            () => {

                loader.classList.add(
                    "hidden"
                );

            },
            700
        );

    }
);


/* ==========================================================
   CURRENT YEAR
========================================================== */

const year =
    document.getElementById(
        "year"
    );


year.textContent =
    new Date().getFullYear();


/* ==========================================================
   INITIALIZE
========================================================== */

renderServices();

renderPortfolio();

observeReveal();