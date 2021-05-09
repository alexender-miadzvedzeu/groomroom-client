let initialState = {
    servicesData:[
        {text: "Подстригание когтей", src: '/images/services/claws.png'},
        {text: "Сушка", src: '/images/services/drying.png'},
        {text: "Чистка глаз и ушей", src: '/images/services/ears.png'},
        {text: "Стрижка", src: '/images/services/haircut.png'},
        {text: "Парфюм", src: '/images/services/perfume.png'},
        {text: "Мытье", src: '/images/services/washing.png'}
    ]
}

const servicesDataReducer = (state = initialState, action) => {
    return state;
}

export default servicesDataReducer;