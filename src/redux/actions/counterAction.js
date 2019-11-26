export const COUNTER = {
    GET: 'COUNTER/GET',
    SET: 'COUNTER/SET',
    ERROR: 'COUNTER/ERROR',
};


export const getCounterAction = () => {
    return ({
        type: COUNTER.GET,
    })
}
export const setCounterAction = (data) => {
    console.log('data:', data);
    return ({
        type: COUNTER.SET,
        data
    })
}
export const errorCounterAction = (error) => {
    return ({
        type: COUNTER.ERROR,
        error
    })
}


