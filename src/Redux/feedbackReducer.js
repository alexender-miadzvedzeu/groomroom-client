const SET_FEED_BACK_DATA = 'SET_FEED_BACK_DATA'; 

let initialState = {
    feedbackData:[]
}

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FEED_BACK_DATA':
            return {...state, feedbackData: [...state.feedbackData] = action.data};
        default:
            return state;
    }
}

export const setFeedBackDataAC  = data => {
    return {type: SET_FEED_BACK_DATA, data: data};
}

export default feedbackReducer;