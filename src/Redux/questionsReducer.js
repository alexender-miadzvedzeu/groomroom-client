
let initialState = {
    questionsData:[
        {question: "Что такое грумниг?", answer: 'Груминг - это деятельность по комплексному  уходу за домашними животными '},
        {question: "Что включает в себя полный комплекс?", answer: 'Полный комплекс включает в себя стрижку Вашего питомца, мытьё шампунем и бальзамом, сушку,подрезание когтей ,чистку ушек,чистку зубов и парфюм'},
        {question: "Как часто нужно стричь когти собаке?", answer: 'Это нужно делать не менее одного раза в месяц, иначе Ваш питомец будет чувствовать дискомфорт и  боли, что в последствии может привести к более серьёзным проблемам'},
        {question: "Используете ли Вы наркоз?", answer: 'Нет,в нем нет необходимости. Наш мастер Виктория прекрасно комуницирует с животными и может их успокоить. Также требуется,чтобы питомец стоял для ровной симметричной стрижки '},
        
    ],
    bgIconsData: [
        {src: '/images/questions/vector_01.png'},
        {src: '/images/questions/vector_02.png'},
        {src: '/images/questions/vector_03.png'},
        {src: '/images/questions/vector_04.png'},
        {src: '/images/questions/vector_05.png'},
        {src: '/images/questions/vector_06.png'},
        {src: '/images/questions/vector_07.png'},
        {src: '/images/questions/vector_01.png'},
        {src: '/images/questions/vector_02.png'},
        {src: '/images/questions/vector_03.png'},
        {src: '/images/questions/vector_04.png'},
        {src: '/images/questions/vector_05.png'},
        {src: '/images/questions/vector_06.png'},
        {src: '/images/questions/vector_07.png'},
        {src: '/images/questions/vector_01.png'},
        {src: '/images/questions/vector_02.png'},
        {src: '/images/questions/vector_03.png'},
        {src: '/images/questions/vector_04.png'},
        {src: '/images/questions/vector_05.png'},
        {src: '/images/questions/vector_06.png'},
        {src: '/images/questions/vector_07.png'},
        {src: '/images/questions/vector_01.png'},
        {src: '/images/questions/vector_02.png'},
        {src: '/images/questions/vector_03.png'},
        {src: '/images/questions/vector_04.png'},
        {src: '/images/questions/vector_05.png'},
        {src: '/images/questions/vector_06.png'},
        {src: '/images/questions/vector_07.png'},
        {src: '/images/questions/vector_01.png'},
        {src: '/images/questions/vector_02.png'},
        {src: '/images/questions/vector_03.png'},
        {src: '/images/questions/vector_04.png'},
        {src: '/images/questions/vector_05.png'},
        {src: '/images/questions/vector_06.png'},
        {src: '/images/questions/vector_07.png'},
        {src: '/images/questions/vector_01.png'},
        {src: '/images/questions/vector_02.png'},
        {src: '/images/questions/vector_03.png'},
        {src: '/images/questions/vector_04.png'},
        {src: '/images/questions/vector_05.png'},
        {src: '/images/questions/vector_06.png'},
        {src: '/images/questions/vector_07.png'},
        {src: '/images/questions/vector_01.png'},
        {src: '/images/questions/vector_02.png'},
        {src: '/images/questions/vector_03.png'},
        {src: '/images/questions/vector_04.png'},
        {src: '/images/questions/vector_05.png'},
        {src: '/images/questions/vector_06.png'},
        {src: '/images/questions/vector_07.png'},
        {src: '/images/questions/vector_01.png'},
        {src: '/images/questions/vector_02.png'},
        {src: '/images/questions/vector_03.png'},
        {src: '/images/questions/vector_04.png'},
        {src: '/images/questions/vector_05.png'},
        {src: '/images/questions/vector_06.png'},
        {src: '/images/questions/vector_07.png'},
        {src: '/images/questions/vector_01.png'},
        {src: '/images/questions/vector_02.png'},
        {src: '/images/questions/vector_03.png'},
        {src: '/images/questions/vector_04.png'},
        {src: '/images/questions/vector_05.png'},
        {src: '/images/questions/vector_06.png'},
        {src: '/images/questions/vector_07.png'},
        {src: '/images/questions/vector_01.png'},
        {src: '/images/questions/vector_02.png'},
        {src: '/images/questions/vector_03.png'},
        {src: '/images/questions/vector_04.png'},
        {src: '/images/questions/vector_05.png'},
        {src: '/images/questions/vector_06.png'},
        {src: '/images/questions/vector_07.png'}
    ]
}


const questionsDataReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'VALUE':
            
            return state;    
        default:
            return state;
    }
}

export default questionsDataReducer;