// Theme toggle script
const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
})();

if (theme === 'dark') {
    document.documentElement.classList.remove('light');
} else {
    document.documentElement.classList.add('light');
}

window.localStorage.setItem('theme', theme);

const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("light");

    const isLight = element.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
}

document.getElementById("themeToggle").addEventListener("click", handleToggleClick);

// Footer year script
const year = new Date().getFullYear();
document.getElementById("footer-year").textContent = year;

// Fetch projects and populate the list
const allProjects = [
    {
        url: "https://github.com/mafinzyx/King-Donkey-Project",
        image: "images/stock-1.jpg",
        title: "King Donkey",
        body: "King Donkey Project with SDL2 library (2.0.3)"
    },
    {
        url: "https://github.com/mafinzyx/HEX",
        image: "images/stock-4.jpg",
        title: "Hex Game",
        body: "The classic variant of the game Hex is played on an 11 x 11 hexagonal board"
    },
];

const projectsList = document.querySelector(".link-card-grid");

allProjects.forEach(project => {
    const li = document.createElement("li");
    li.classList.add("card");
    li.innerHTML = `
        <a class="card__link" href="${project.url}" target="_blank" rel="noopener noreferrer">
            <div class="center">
                <img class="card__img" width="226" height="127" src="${project.image}" alt="Project Image">
            </div>
            <h3 class="card__title">${project.title}</h3>
            <p class="card__txt">${project.body}</p>
        </a>
    `;
    projectsList.appendChild(li);
});
