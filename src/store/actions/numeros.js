
//action creator 
export function alterarNumeroMinimo(novoNumeroMin) {
    return {
        type: 'num__min_alterado',
        payload: novoNumeroMin
    }
}

export function alterarNumeroMaximo(novoNumeroMax) {
    return {
        type: 'num__max_alterado',
        payload: novoNumeroMax
    }
}