class TracalorieController {
    constructor(model, view) {
        this._model = model;
        this._view = view;

        this._view.addEventListener('addfoodformsubmit', (item) => {
            this._model.addItem(item);
        });

        this._model.addEventListener('itemadd', (item) => {
            this._view.addItem(item);
        });

        this._model.addEventListener('totalcalorieschange', (totalCalories) => {
            this._view.totalCalories = totalCalories;
        });
    }
}


export default TracalorieController;
