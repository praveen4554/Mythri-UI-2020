const initialState = {
    user: 'Guest'
};

export const myReducer = (state=initialState, action)=>{
    const newState = {...state};
    console.log(action);
    if(action.type === 'logged') {
        newState.user = action.val;
    }
    return newState;
}
