allState = {
  videos: [],
  currentVideo: null,
  value: ""
}




/* 
// Store: that maintains allState
// It takes fn (reducer) as arg
function createStore(reducer) {
  let state;
  let listeners = [];

  // Returns the current state
  const getState = () => state; // It's a function
  
  // Subscribe takes fn as arg & returns a fn. Listens to all the changes
  const subscribe = (listener) => { // It's a HOF
    listeners.push(listener);

    // Unsubscribe
    return () => {
      listeners = listeners.filter( (l) => l !== listener);
    };
  };

  // Dispatch will update the state. It's function which takes obj as arg
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach( (listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch
  };
}

// App code (reducer): State should be immutable
// 1 arg is initial state
// 2 arg is object
function todos(state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo]);
  }

  return state;
}

let store = createStore(todosFn);
store.getState();
store.subscribe( listFn );
store.dispatch( { action is obj} );

*/