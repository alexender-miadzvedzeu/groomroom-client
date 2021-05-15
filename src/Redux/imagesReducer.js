const SET_PHOTOS = 'SET_PHOTOS';

let initialState = {
    photoData: []
}

const imagesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_PHOTOS:
            let stateCopy = {...state};
            stateCopy.photoData = [...state.photoData];
            action.photoData.map(elem => stateCopy.photoData.push(elem))
            return stateCopy;
        default:
            break;
    }
    return state;
}

export const setPhotosAC = photoData => {
    return {
        type: SET_PHOTOS,
        photoData: photoData
    }
}

export default imagesReducer;