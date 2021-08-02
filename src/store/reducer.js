import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import userReducer from './userReducer';
import followersReducer from './followersReducer';
import friendReducer from './friendReducer';
//-----------------------|| COMBINE REDUCER ||-----------------------//

const reducer = combineReducers({
    customization: customizationReducer,
    postState: userReducer,
    followerState: followersReducer,
    friendState: friendReducer
});

export default reducer;
