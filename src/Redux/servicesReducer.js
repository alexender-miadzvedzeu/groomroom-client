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
        {src: '/images/services/icons/vector_30.png'}
    ],
    tablesData: {
        prices_1_deco: {
            tableHead: '(Стрижка, мытьё с шампунем и бальзамом, сушка, подрезание когтей, чистка ушек, парфюм)',
            table: [
                {service_id: '3', service_name: 'Стрижка', service_price: '100'},
                {service_id: '3', service_name: 'Стрижка', service_price: '150'},
                {service_id: '3', service_name: 'Стрижка', service_price: '200'},
                {service_id: '3', service_name: 'Стрижка', service_price: '250'},
                {service_id: '3', service_name: 'Стрижка', service_price: '300'}
            ]
        },
        prices_2_lite: {
            tableHead: '(Мытьё с шампунем и бальзамом, сушка, вычёсывание, подрезание когтей, чистка ушек, окантовка лапок, “открыть глазки”)',
            table: [
                {service_id: '3', service_name: 'Стрижка', service_price: '100'}
            ]
        },
        prices_3_trim: {
            tableHead: '(Мытьё с шампунем и бальзамом, сушка, тримминг, чистка ушек, подрезание когтей, парфюм)',
            table: [
                {service_id: '3', service_name: 'Стрижка', service_price: '100'}
            ]
        },
        prices_4_express: {
            tableHead: '(Мытьё с шампунем и бальзамом, сушка, чистка ушек, подрезание когтей, вычёсывание специнструментом, парфюм)',
            table: [
                {service_id: '3', service_name: 'Стрижка', service_price: '100'}
            ]
        },
        prices_5_cats: {
            tableHead: 'Услуги по уходу за котом',
            table: [
                {service_id: '3', service_name: 'Стрижка', service_price: '100'}
            ]
        },
        prices_6_complementary: {
            tableHead: 'Дополнительные услуги',
            table: [
                {service_id: '3', service_name: 'Стрижка', service_price: '100'}
            ]
        }
    },
    currentTable: 'prices_1_deco'
}

const servicesDataReducer = (state = initialState, action) => {
    return state;
}

export default servicesDataReducer;