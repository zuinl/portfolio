import { TRANSLATE } from '../Actions/ActionTypes'

const initialState = {
    language: "EN"
}

export default (state = initialState, action) => {
    switch(action.type) {
        case TRANSLATE:
            return { ...state, language: action.payload }
        default:
            return { ...state }
    }
}