//header fixed when scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if(window.scrollY > 0) {
    header.classList.add('bg-white');
  } else {
    header.classList.remove('bg-white')
  }
});

//focus current list model
const listVariety = document.querySelector('.list-variety');
listVariety.addEventListener('click', (e) => {
  const currentList = e.target;
  currentList.classList.remove('focus:bg-black');
  currentList.classList.add('focus:bg-black');

  //getDataCar
  fetch('../data/car.json')
  .then(res => res.json())
  .then(data => getDataCar(data.car));

  const getDataCar = (data) => {
    let item = [];
    if(currentList.textContent === `Fortuner`) {
      item = data[0];
    } else if (currentList.textContent === `Yaris Cross`) {
      item = data[1];
    } else if (currentList.textContent === `Innova`) {
      item = data[2];
    } else if (currentList.textContent === `Raize GT Sport`) {
      item = data[3];
    } else if (currentList.textContent === `Honda HR-V`) {
      item = data[4];
    } else {
      item = data[5];
    }

    //append data car to ui
    const carImage = document.querySelector('.selected-car');
    const price = document.querySelector('.price');
    const brand = document.querySelector('.brand');
    const type = document.querySelector('.type');
    const year = document.querySelector('.year');
    const seat = document.querySelector('.seat');
    const ac = document.querySelector('.ac');
    const transmission = document.querySelector('.transmission');

    carImage.setAttribute('src', `../asset/car/${item.img}`)
    price.textContent = item.price;
    brand.textContent = item.brand;
    type.textContent = item.type;
    year.textContent = item.year;
    seat.textContent = item.seat;
    ac.textContent = item.ac;
    transmission.textContent = item.transmission;
  }
});

//data testimoni
const testimonial = [
  {
    name: "Harry Podder",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quibusdam modi enim quisquam inventore vero aut, adipisci tenetur illum, ea velit voluptas architecto sint, consectetur nihil aspernatur excepturi alias facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quibusdam modi enim quisquam inventore vero aut, adipisci tenetur illum, ea velit voluptas architecto sint",
    img: "testi1.jpg"
  },
  {
    name: "Bruno",
    comment: "modi enim quisquam inventore vero aut, adipisci tenetur illum, ea velit voluptas architecto sint, consectetur nihil aspernatur excepturi alias facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quibusdam modi enim quisquam inventore vero aut, adipisci tenetur illum, ea velit voluptas architecto sint",
    img: "testi2.png"
  },
  {
    name: "Riana",
    comment: " sint, consectetur nihil aspernatur excepturi alias facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quibusdam modi enim quisquam inventore vero aut, adipisci tenetur illum, ea velit voluptas architecto sint",
    "img": "testi3.png"
  },
  {
    name: "Southgate",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quibusdam modi enim quisquam inventore vero aut, adipisci tenetur illum, ea velit voluptas architecto sint, consectetur nihil aspernatur excepturi ",
    img: "testi4.png"
  }
]

//carousel testimonial
const testimonialContainer = document.querySelector('.testimoni');
const dot = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//curret slide
let i = 0;
let j = testimonial.length;
let k = i+1;
let h = i-1;

//function show data testomonials to ui
let showTestimoni = () => {
  testimonialContainer.innerHTML =`
  <img class="w-80" src="../asset/testimonial/${testimonial[i].img}" alt="">
  <div class="w-80 flex flex-col justify-around">
    <p>${testimonial[i].comment}</p>
    <h5 class="text-lg font-bold">${testimonial[i].name}</h5>
  </div>
  `;
}

//next slide
next.addEventListener('click', () => {
  dot[i].classList.replace('bg-blue-700', 'bg-slate-300');
  i = (j+i+1) %j;
  dot[i].classList.replace('bg-slate-300', 'bg-blue-700');
  showTestimoni();
})

//prev slide
prev.addEventListener('click', () => {
  dot[i].classList.replace('bg-blue-700', 'bg-slate-300');
  i = (j+i-1) %j;
  dot[i].classList.replace('bg-slate-300', 'bg-blue-700');
  showTestimoni()
})


window.onload = showTestimoni;