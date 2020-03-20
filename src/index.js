import { createStore } from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        case 'RND':
            return state + action.payload;

        default:
            return state;
    };
};

const store = createStore(reducer);

// action creators
const inc = () => ({ type: 'INC' })
const dec = () => ({ type: 'DEC' })
const rnd = (payload) => ({ type: 'RND', payload })

// increment 
document.getElementById('inc')
    .addEventListener('click', () => {
        store.dispatch(inc());
    });


// decrement
document.getElementById('dec')
    .addEventListener('click', () => {
        store.dispatch(dec());
    });

// increment randomly
document.getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 10);
        store.dispatch(rnd(payload));
    });

// update function
const update = () => {
    document.getElementById('counter')
        .innerHTML = store.getState();
};

store.subscribe(update);