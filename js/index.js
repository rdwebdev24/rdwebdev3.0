let skillcards = document.querySelector('.skillcards');
let projectcard = document.querySelector('.projectcard');
let skillArray = [
     "HTML",
     "CSS",
     "JAVASCRIPT",
     "TAILWIND",
     "SCSS",
     "NODE/EXPRESS",
     "MONGODB",
     "C/C++",
     "DSA",
     "ML"
]
let ProjectArray = [
     {
          name:"E-commerce websites",
          tools:"HTML/CSS/JS",
          link:"https://e-commerce-omega-ten.vercel.app/"
     },
     {
          name:"clone website",
          tools:"REACT",
          link:"https://vecros.vercel.app/"
     },
     {
          name:"JS Games",
          tools:"HTML/CSS/JS",
          link:"https://github.com/rdwebdev24"
     },
     {
          name:"chrome extension",
          tools:"HTML/CSS/JS",
          link:"https://github.com/rdwebdev24/chrome_extension"
     },
     {
          name:"SARTHI website",
          tools:"REACT",
          link:"https://sarthi-three.vercel.app/"
     },
     {
          name:"todo app",
          tools:"REACT/NODE/MONGODB",
          link:"https://github.com/rdwebdev24"
     },
]
skillArray.map((item)=>{
     skillcards.innerHTML += `<div class="skillcard">
                                   <p>${item}</p>
                                </div>`
})
ProjectArray.map((item)=>{
     const {name,link,tools} = item;
     projectcard.innerHTML += `<div class="projectcard">
                                   <p>${name}</p>
                                   <p>${tools}</p>
                                   <a href="${link}">view</a>
                                  </div>`
})