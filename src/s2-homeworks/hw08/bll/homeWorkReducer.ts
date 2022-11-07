import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


export const homeWorkReducer = (people: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            switch (action.payload) {
                case "up": {
                    return people.sort((a, b) => a.name.localeCompare(b.name))
                }
                case "down": {
                    return people.sort((a, b) => b.name.localeCompare(a.name))
                }
                default:
                    return people
            }
            // need to fix
        }
        case 'check': {
            return people.sort((a,b) => a._id - b._id).filter((el) => el.age >= action.payload)}
            // need to fix

        default:
            return people
        }
    }
