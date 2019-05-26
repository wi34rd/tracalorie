import TracalorieModel from './tracalorie-model.js';
import TracalorieView from './tracalorie-view.js';
import TracalorieController from './tracalorie-controller.js';


const model = new TracalorieModel();
const view = new TracalorieView();
const controller = new TracalorieController(model, view);
