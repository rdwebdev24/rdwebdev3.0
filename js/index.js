let skillcards = document.querySelector('.skillcards');
let projectcard = document.querySelector('.projectcards');
let landingwrapper = document.querySelector('.section1');
let contactWrapper = document.querySelector('.section4');
let skillsWrapper = document.querySelector('.section2');
let projectWrapper = document.querySelector('.section3');
let cssbtn1 = document.querySelector('.landngcssbtn');
let cssbtn2 = document.querySelector('.skillcssbtn');
let cssbtn3 = document.querySelector('.projectcssbtn');
let label = document.querySelectorAll('.form-check-label');
let landingcss = false;
let skillcss = false;
let projectcss = false;

cssbtn1.addEventListener('click',(e)=>{
     if(!landingcss){
          landingwrapper.classList.add("landingwrapper")
          label[0].textContent = "Remove css"
          landingcss=true;
     }else{
          landingwrapper.classList.remove("landingwrapper")
          label[0].textContent = "Apply css"
          landingcss=false;
     }
})
cssbtn2.addEventListener('click',(e)=>{
     if(!skillcss){
          skillsWrapper.classList.add("skillsWrapper")
          label[1].textContent = "Remove css"
          skillcss=true;
     }else{
          skillsWrapper.classList.remove("skillsWrapper")
          label[1].textContent = "Apply css"
          skillcss=false;
     }
})
cssbtn3.addEventListener('click',(e)=>{
     if(!projectcss){
          projectWrapper.classList.add("projectWrapper")
          contactWrapper.classList.add("contactWrapper")
          label[2].textContent = "Remove css"
          projectcss=true;
     }else{
          projectWrapper.classList.remove("projectWrapper")
          contactWrapper.classList.remove("contactWrapper")
          label[2].textContent = "Apply css"
          projectcss=false;
     }
})

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

