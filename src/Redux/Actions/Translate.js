import { TRANSLATE } from './ActionTypes'

export const translate = language => {
    return {
        type: TRANSLATE,
        payload: language
    }
}