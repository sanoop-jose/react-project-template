
export default function globalData(state = [], action) {
  switch (action.type) {
    case 'SET_GLOBAL_DATA':
      return Object.assign({}, state, {
        path: action.path,
        homePage: action.homePage
      });

    default:
      return state;
  }
}
