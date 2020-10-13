// Action
export const increment = (incNumber = 1) => {
    return {
        type: 'INCREMENT',
        payload: incNumber
    }
}

export const decrement = (decNumber = 1) => {
    return {
        type: 'DECREMENT',
        payload: decNumber
    }
}

