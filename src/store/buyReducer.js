const initialState = []

export const buyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_PRODUCT":
      return [...state, action.payload]
    case "REFUSE_PRODUCT":
      return state.filter((item, index) => index != action.payload)
    default:
      return state
  }
}