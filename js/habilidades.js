const skills = [
    { nombre: "html", photo: "./img/html-icon.png", nivel: "junior" },
    { nombre: "css", photo: "img/css-icon.png", nivel: "junior" },
    { nombre: "javascript", photo: "img/javascript-programming-language-icon.png", nivel: "junior" },
    { nombre: "react", photo: "img/react-js-icon.png", nivel: "junior" },
    { nombre: "tailwindcss", photo: "img/tailwind-css-icon.png", nivel: "junior" },
    { nombre: "vite", photo: "img/vite-dev-icon.png", nivel: "junior" },
    { nombre: "node", photo: "img/node-js-icon.png", nivel: "junior" },
    { nombre: "git", photo: "img/git-icon.png", nivel: "junior" },
  ];

let skillsElement = document.querySelector("#mySkills")

function cargarSkills() {
  for (let i = 0; i < skills.length; i++) {
    skillsElement.innerHTML += `
    <div class="w-12/12 h-12/12 my-10 border border-dark rounded-xl bg-slate-800 flex flex-col justify-center items-center inset-shadow-sm inset-shadow-blue-900/50">
        <img class="w-1/2 h-1/2 mx-4" src="${skills[i].photo}" alt="${skills[i].nombre}">
        <p class="text-[14px] mt-1">${skills[i].nivel}</p>
    </div>` 
  }
}

cargarSkills()

const addSkills = [
  {nombre: "github", photo: "img/github-icon.png", nivel: "junior" },
  {nombre: "responsive", photo: "img/desktop-smartphone-transfer-icon.png", nivel: "junior" },
  {nombre: "npm", photo: "img/npm-icon.png", nivel: "junior" }
];

let addSkillsElement = document.querySelector("#addSkills")

function cargarAddSkills() {
  for (let i = 0; i < addSkills.length; i++) {
    addSkillsElement.innerHTML += `
    <div class="w-12/12 h-12/12 flex justify-center items-center felx flex-col gap-2">
        <img class="w-1/2 h-3/4 md:w-30 md:h-30" src="${addSkills[i].photo}" alt="${addSkills[i].nombre}">
        <p class="text-[14px] mt-1">${addSkills[i].nivel}</p>
    </div>
    `
    
  }
}

cargarAddSkills()

/*  -------   Menu con toggle   ---------  */

let buttomMenu = document.querySelector("#buttomMenu")
let menu = document.querySelector("#menu")

buttomMenu.addEventListener("click", ()=> {
  menu.classList.toggle("scale-y-0")
  menu.classList.toggle("opacity-0")
})