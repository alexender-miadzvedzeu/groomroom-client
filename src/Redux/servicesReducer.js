const SET_TABLE = 'SET_TABLE';

let initialState = {
    servicesData:[
        {text: "Подстригание когтей", src: '/images/services/claws.png'},
        {text: "Сушка", src: '/images/services/drying.png'},
        {text: "Чистка глаз и ушей", src: '/images/services/ears.png'},
        {text: "Стрижка", src: '/images/services/haircut.png'},
        {text: "Парфюм", src: '/images/services/perfume.png'},
        {text: "Мытье", src: '/images/services/washing.png'}
    ],
    bgIconsData: [
        {src: '/images/services/icons/vector_01.png'},
        {src: '/images/services/icons/vector_02.png'},
        {src: '/images/services/icons/vector_03.png'},
        {src: '/images/services/icons/vector_04.png'},
        {src: '/images/services/icons/vector_05.png'},
        {src: '/images/services/icons/vector_06.png'},
        {src: '/images/services/icons/vector_07.png'},
        {src: '/images/services/icons/vector_08.png'},
        {src: '/images/services/icons/vector_09.png'},
        {src: '/images/services/icons/vector_10.png'},
        {src: '/images/services/icons/vector_11.png'},
        {src: '/images/services/icons/vector_12.png'},
        {src: '/images/services/icons/vector_13.png'},
        {src: '/images/services/icons/vector_14.png'},
        {src: '/images/services/icons/vector_15.png'},
        {src: '/images/services/icons/vector_16.png'},
        {src: '/images/services/icons/vector_17.png'},
        {src: '/images/services/icons/vector_18.png'},
        {src: '/images/services/icons/vector_19.png'},
        {src: '/images/services/icons/vector_20.png'},
        {src: '/images/services/icons/vector_21.png'},
        {src: '/images/services/icons/vector_22.png'},
        {src: '/images/services/icons/vector_23.png'},
        {src: '/images/services/icons/vector_24.png'},
        {src: '/images/services/icons/vector_25.png'},
        {src: '/images/services/icons/vector_26.png'},
        {src: '/images/services/icons/vector_27.png'},
        {src: '/images/services/icons/vector_28.png'},
        {src: '/images/services/icons/vector_29.png'},
        {src: '/images/services/icons/vector_30.png'},
        {src: '/images/services/icons/vector_01.png'},
        {src: '/images/services/icons/vector_02.png'},
        {src: '/images/services/icons/vector_03.png'},
        {src: '/images/services/icons/vector_04.png'},
        {src: '/images/services/icons/vector_05.png'},
        {src: '/images/services/icons/vector_06.png'},
        {src: '/images/services/icons/vector_07.png'},
        {src: '/images/services/icons/vector_08.png'},
        {src: '/images/services/icons/vector_09.png'},
        {src: '/images/services/icons/vector_10.png'},
        {src: '/images/services/icons/vector_11.png'},
        {src: '/images/services/icons/vector_12.png'},
        {src: '/images/services/icons/vector_13.png'},
        {src: '/images/services/icons/vector_14.png'},
        {src: '/images/services/icons/vector_15.png'},
        {src: '/images/services/icons/vector_16.png'},
        {src: '/images/services/icons/vector_17.png'},
        {src: '/images/services/icons/vector_18.png'},
        {src: '/images/services/icons/vector_19.png'},
        {src: '/images/services/icons/vector_20.png'},
        {src: '/images/services/icons/vector_21.png'},
        {src: '/images/services/icons/vector_22.png'},
        {src: '/images/services/icons/vector_23.png'},
        {src: '/images/services/icons/vector_24.png'},
        {src: '/images/services/icons/vector_25.png'},
        {src: '/images/services/icons/vector_26.png'},
        {src: '/images/services/icons/vector_27.png'},
        {src: '/images/services/icons/vector_28.png'},
        {src: '/images/services/icons/vector_29.png'},
        {src: '/images/services/icons/vector_30.png'},
        {src: '/images/services/icons/vector_20.png'},
        {src: '/images/services/icons/vector_21.png'},
        {src: '/images/services/icons/vector_22.png'},
        {src: '/images/services/icons/vector_23.png'},
        {src: '/images/services/icons/vector_24.png'},
        {src: '/images/services/icons/vector_25.png'},
        {src: '/images/services/icons/vector_26.png'},
        {src: '/images/services/icons/vector_27.png'},
        {src: '/images/services/icons/vector_28.png'},
        {src: '/images/services/icons/vector_29.png'},
        {src: '/images/services/icons/vector_20.png'},
        {src: '/images/services/icons/vector_21.png'},
        {src: '/images/services/icons/vector_22.png'},
        {src: '/images/services/icons/vector_23.png'},
        {src: '/images/services/icons/vector_24.png'},
        {src: '/images/services/icons/vector_25.png'}
    ],
    currentTable: []
}

const servicesDataReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_TABLE:
            return {...state, currentTable: action.currentTable};
    }
    return state;
}


export const setTableAC = currentTable => {
    return {
        type: SET_TABLE,
        currentTable: currentTable
    }
}

export default servicesDataReducer;