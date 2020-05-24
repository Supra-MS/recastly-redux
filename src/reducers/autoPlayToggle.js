import Redux from 'redux';

const autoPlayReducer = (state, action) => {
  console.log('action', action)
  state = state || 0;
  switch(action.type) {
    case 'AUTO_PLAY':
      console.log('auto play hit', state)
      return !state ? 1 : 0
      // return action.payload ? !action.payload : action.payload
    default:
      console.log('default', state, 'action.type', action.type, action.payload)
      return state
  }
}


export default autoPlayReducer;