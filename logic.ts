////store
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import  {reducers}  from '../src/reducers';

// add the middlewares
let middleWares = [ReduxThunk];

// apply the middleware
let middleware = applyMiddleware(...middleWares);



// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    middleware = compose(
        middleware,
        window.devToolsExtension()
    );
}
// create the store
const store = createStore(reducers, middleware);



export { store };



util.js
////////////////////////
const errors = {
  emailErrors: [],
  passwordErrors: []
};
export  function validate(email, password) {
  debugger
  errors.emailErrors = [];
  errors.passwordErrors = [];
    if (password === "") {
      errors.passwordErrors.push(" * Please provide Password");
    }
    if (email === "") {
      errors.emailErrors.push("* Please provide Email");
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      errors.emailErrors.push("* Email should contain a @");
    }
    if ((email.indexOf(".") === -1)) {
      errors.emailErrors.push("* Email should contain at least one dot");
    }
    debugger
  return errors;
}
export  function validateUser(data) {
  errors.emailErrors = [];
  if (data.status.statusId === 402) {
    errors.emailErrors.push("* Entered Email ID is invalid, kindly check and confirm")
  }
  return errors;
}

