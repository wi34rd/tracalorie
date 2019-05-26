class TracalorieView {
    constructor() {
        this._listeners = {};

        this._addFoodForm = document.getElementById('add-food-form');
        this._foodInput = document.getElementById('food-input');
        this._caloriesInput = document.getElementById('calories-input');
        this._itemList = document.getElementById('item-list');

        this._addFoodForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const item = {
                food: this._foodInput.value,
                calories: this._caloriesInput.value
            };

            this.dispatchEvent('addfoodformsubmit', item);

            this._foodInput.value = '';
            this._caloriesInput.value = '';
        });
    }

    addEventListener(type, listener) {
        if (this._listeners[type] === undefined) {
            this._listeners[type] = [listener];
        } else {
            this._listeners[type].push(listener);
        }
    }

    dispatchEvent(type, ...rest) {
        this._listeners[type].forEach((listener) => {
            listener.apply(this, rest);
        });
    }

    addItem({ food, calories }) {
        const itemElt = document.createElement('li');
        itemElt.className = 'collection-item';
        itemElt.innerHTML = `
            <b>${food}:</b>
            <i>${calories} Calories</i>
            <a href="javascript:;" class="right">
                <i class="material-icons">edit</i>
            </a>
        `;

        this._itemList.appendChild(itemElt);
    }
}


export default TracalorieView;
