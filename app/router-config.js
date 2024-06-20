import { CarsController } from "./controllers/CarsController.js";
import { HousesController } from "./controllers/HousesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '', //http://localhost:8080
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/about',  //http://localhost:8080/#/about
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/cars',  //http://localhost:8080/#/cars
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/Houses', //http://localhost:8080/#/Houses
    controllers: [HousesController],
    view: 'app/views/HouseView.html'
  }
])