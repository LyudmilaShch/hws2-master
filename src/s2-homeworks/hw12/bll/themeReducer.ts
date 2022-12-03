export type ActionType = ReturnType<typeof changeThemeId>

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): { themeId: number } => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', id}) // fix any
