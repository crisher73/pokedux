export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};


export const nameUpperCase = (store) => (next) => (actionInfo) => {

    const featured = [
         ...actionInfo.action.payload.map(
            pokemon => ({
                ...pokemon,
                 name: pokemon.name.charAt(0).toUpperCase() + 
                        pokemon.name.slice(1)
            })
        )
    ]

    const updateActionInfo = {
        ...actionInfo,
        action: {
            ...actionInfo.action,
            payload: featured
        }
    }
    next(updateActionInfo)
}
