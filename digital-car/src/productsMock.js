import dayjs from 'dayjs';

const generateRandomDates = () => {
  let dates = [];
  for (let i = 0; i < 10; i++) {
    // Genera fechas aleatorias dentro de un rango de 30 días desde hoy
    let randomDate = dayjs().add(Math.floor(Math.random() * 30), 'day');
    dates.push(randomDate);
  }
  return dates;
}

export const products = [
  {
    id: 1,
    title: "Fiat",
    model: "Cronos",
    type: "Sedan",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),
  },
  {
    id: 2,
    title: "Renault",
    model: "Duster",
    type: "Hatchback",
    price: 2000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjgzMzg4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk4MTU4MTE5NDc2LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY3NSwiaGVpZ2h0IjozODh9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 3,
    title: "Jeep",
    model: "Cronos",
    type: "Minivan",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 4,
    title: "Fiat",
    model: "Cronos",
    type: "Coupe",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 5,
    title: "Fiat",
    model: "Cronos",
    type: "Van",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 6,
    title: "Fiat",
    model: "Cronos",
    type: "Pickup",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 7,
    title: "Fiat",
    model: "Cronos",
    type: "Suv",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 8,
    title: "Fiat",
    model: "Cronos",
    type: "Suv",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 9,
    title: "Fiat",
    model: "Cronos",
    type: "Sedan",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),

  },
  {
    id: 10,
    title: "Fiat",
    model: "Cronos",
    type: "Sedan",
    price: 3000,
    year: 2019,
    img: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc5OTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjk2NDM4NDU0MzEzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=",
    availableDates: generateRandomDates(),
  },

];
