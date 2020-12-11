import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from './actionTypes'

// action creator
export function alterarNumeroMinimo(novoNumero) {
    return {
        // o type pode ser qualquer número
        type: NUM_MIN_ALTERADO,
        // o nome payload é comumente usado, mas poderia ser BlaBla: novoNumer
        payload: novoNumero
    }
}

// action creator
export function alterarNumeroMaximo(novoNumero) {
    return {
        // o type pode ser qualquer número
        type: NUM_MAX_ALTERADO,
        // o nome payload é comumente usado, mas poderia ser BlaBla: novoNumer
        payload: novoNumero
    }
}