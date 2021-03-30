const estadoInicial = {
    min: 1,
    max: 10
}

export default function (state = estadoInicial, action) {

    switch (action.type) {
        case 'num__min_alterado':
            return {
                ...state,
                min: action.payload
            }

        case 'num__max_alterado':
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}