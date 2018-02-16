import merge from 'lodash/merge';

import {
  RECEIVE_LOCATIONS
} from '../actions/locationActions';

const locationsReducer = (state = [], action) => {
  Object.freeze(state)
  let newState = merge([], state);

  switch(action.type) {
    case RECEIVE_LOCATIONS:
      if(!state[0]){
        return action.locations;
    } else if(state[state.length -1]._id !== action.locations[action.locations.length - 1]._id){
        var newLocations = [];
        for(var i = state.length; i < action.locations.length; i++){
          newLocations.push(action.locations[i])
        }
        return newState.concat(newLocations);
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default locationsReducer;
