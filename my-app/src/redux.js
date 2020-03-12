const { createStore } = require('redux');
const initialState = {
    user: 'Guest'
};

const myReducer = (state=initialState, action)=>{
    const newState = {...state};
    if(action.type === 'logged') {
        newState.user = action.val;
    }
    return newState;
}
const store = createStore(myReducer);
store.subscribe(()=>{
    console.log('subscribe',store.getState());
})
console.log(store.getState());
store.dispatch({type:'logged', val:'praveen'});
console.log(store.getState());
store.dispatch({type:'logged', val:'praveen11'});
console.log(store.getState());