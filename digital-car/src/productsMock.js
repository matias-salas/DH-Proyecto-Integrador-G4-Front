import dayjs from 'dayjs';

const generateRandomDates = () => {
  let dates = [];
  for (let i = 0; i < 10; i++) {
    // Genera fechas aleatorias dentro de un rango de 30 días desde hoy
    let randomDate = dayjs().add(Math.floor(Math.random() * 30), 'day');
    let string_date = randomDate.format('YYYY-MM-DD');
    dates.push(string_date);
  }
  return dates;
}

export const products = [
  {
    id: 1,
    title: "Jeep Compass 2.4 SPORT MT 4X2 Suv 2020",
    marca: "Jeep",
    type: "Suv",
    price: 3000,
    year: 2020,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjg2ODg5L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzAwNTkwOTQ3NTEyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 2,
    title: "Chevrolet Tracker 1.2 T AT 4X2 Suv 2023",
    marca: "Chevrolet",
    type: "Suv",
    price: 2000,
    year: 2023,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjg2NzAwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzAwNjc2MTgwOTc4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 3,
    title: "Volkswagen Taos 1.4T HIGHLINE AT6 Suv 2022",
    marca: "Volkswagen",
    type: "Suv",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 4,
    title: "Honda Hr-v 1.8 EX 2WD CVT Suv 2019",
    marca: "Honda",
    type: "Suv",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 5,
    title: "Ford Ranger 3.2 CD LIMITED TDCI 200CV AT 4X4 Pickup 2022",
    marca: "Ford",
    type: "Pickup",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 6,
    title: "Volkswagen Amarok 2.0 CD TDI 180CV HIGHLINE AT 4X2 Pickup 2020",
    marca: "Volkswagen",
    type: "Pickup",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 7,
    title: "Fiat Strada 1.4 8V ENDURANDE CD Pickup 2022",
    marca: "Fiat",
    type: "Pickup",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 8,
    title: "Toyota Hilux 2.8 CD SRX 177CV 4X4 MT Pickup 2017",
    marca: "Toyota",
    type: "Pickup",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 9,
    title: "Citroen Berlingo 1.6 VTI 115 BUSINESS Van 2022",
    marca: "Citroen",
    type: "Van",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 10,
    title: "Renault Kangoo II EXPRESS CONFORT 1.6 SCE Van 2020",
    marca: "Renault",
    type: "Van",
    price: 3000,
    year: 2020,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjg0MTQ1L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk4NzUzNjUyMzkzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 11,
    title: "Fiat Fiorino 1.4 FIRE EVO 87CV Van 2019",
    marca: "Fiat",
    type: "Van",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),
  },

];
