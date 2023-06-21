import { AboutController } from "./controllers/AboutController.js";
import { ItemsController } from "./controllers/ItemsController.js";
// import { HomeController } from "./controllers/HomeController.js";
import { MoneysController } from "./controllers/MoneysController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [MoneysController, ItemsController],
    view: ''
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]