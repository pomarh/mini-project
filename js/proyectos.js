/*  -------   Menu con toggle   ---------  */

let buttomMenu = document.querySelector("#buttomMenu")
let menu = document.querySelector("#menu")

buttomMenu.addEventListener("click", ()=> {
  menu.classList.toggle("scale-y-0")
  menu.classList.toggle("opacity-0")
})

const projectsInfo = [
    { 
    nombre: "Summary", 
    photo: "../img/card 1.jpg", 
    description: "Results summary component" 
    },
    { 
    nombre: "Blog", 
    photo: "../img/card 2.jpg", 
    description: "Blog preview card" 
    },
    { 
    nombre: "QR", 
    photo: "../img/card 3.jpg", 
    description: "QR code component" 
    },{ 
    nombre: "Great", 
    photo: "../img/card 5.jpeg", 
    description: "3-column preview card component" 
    },
    { 
    nombre: "Result", 
    photo: "../img/card 4.jpeg", 
    description: "Tip calculator app" 
    },
]

let projectInfoElement = document.querySelector("#myPorject")

function callProjects() {
    for (let i = 0; i < projectsInfo.length; i++) {
        projectInfoElement.innerHTML += `
        <div class="bg-white/15 rounded-2xl px-5 pb-5 
        duration-500 hover:bg-white/30 hover:shadow-2xl hover:-translate-y-2">
        <h3 class="text-2xl text-center py-5 uppercase">${projectsInfo[i].nombre}</h3>
        <img class="w-11/12 h-50 m-auto rounded-2xl" src="${projectsInfo[i].photo}" alt="">
        <p class="text-[16px] py-5">${projectsInfo[i].description}</p>
        <div class="">
            <a href="" class="px-5 py-1 text-[14px] text-dark font-semibold rounded-xl bg-highlight capitalize" alt="${projectsInfo[i].nombre}">link to git</a>
        </div>
        </div>
        `
        
    }
}

callProjects()
