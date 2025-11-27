// NAVBAR ACTIVE STATE
const navbarLinks = document.querySelectorAll('.navbar a');

// add click event to each link
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {

        // remove 'active' class from all links
        navbarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // FIX BUTTONS WHEN NAVBAR IS CLICKED
        const targetID = link.getAttribute("href").replace("#", "");
        const index = sections.indexOf(targetID);

        if (index !== -1) {
            currentIndex = index;
            updateButtons();
        }
    });
});


// RESUME PART (NO CHANGE)
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

// resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});


// SECTION ORDER — FIXED ID (NO SPACES)
const sections = ["home", "qualification", "section resume", "family"];
let currentIndex = 0;

// BUTTONS
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateButtons() {
    prevBtn.classList.toggle("hidden", currentIndex === 0);
    nextBtn.classList.toggle("hidden", currentIndex === sections.length - 1);
}

function goToSection(index) {
    const id = sections[index];
    const el = document.getElementById(id);

    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }

    updateButtons();
}

// BUTTON LISTENERS
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        goToSection(currentIndex);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < sections.length - 1) {
        currentIndex++;
        goToSection(currentIndex);
    }
});

// INITIAL
updateButtons();