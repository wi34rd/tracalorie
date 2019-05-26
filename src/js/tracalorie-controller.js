class TracalorieController {
    constructor(model, view) {
        this._model = model;
        this._view = view;

        this._view.addEventListener('addfoodformsubmit', (item) => {
            this._model.addItem(item);
            this._view.addItem(item);
        });
    }
}


export default TracalorieController;
