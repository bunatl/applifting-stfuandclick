type ClickCounterActions =
    | { type: 'INCREMENT' }

interface ICounterState {
    clickCounter: number;
}

const initCounter: ICounterState = {
    clickCounter: 0
}

const counterReducer = (state: ICounterState = initCounter, action: ClickCounterActions) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                clickCounter: state.clickCounter + 1
            };
        default:
            return state;
    }
}

export default counterReducer;