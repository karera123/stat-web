import Home from "../pages/Home";
import Hw1 from "../pages/Hw1";

export const routes = [
  { name: 'Home', href: '/', current: true, element: <Home /> },
  { name: 'Homework 1', href: '/hw1', current: true, element: <Hw1 /> },
]