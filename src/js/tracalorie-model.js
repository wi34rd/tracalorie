class TracalorieModel {
    constructor() {
        this._listeners = {};

        this._items = [];
        this._totalCalories = 0;
    }

    addEventListener(type, listener) {
        if (this._listeners[type] === undefined) {
            this._listeners[type] = [listener];
        } else {
            this._listeners[type].push(listener);
        }
    }

    dispatchEvent(type, ...rest) {
        if (this._listeners[type] === undefined) {
            return;
        }

        this._listeners[type].forEach((listener) => {
            listener.apply(this, rest);
        });
    }

    addItem(item) {
        this._items.push(item);

        this.dispatchEvent('itemadd', item);
    }
}


export default TracalorieModel;
