import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import MedicineStore from "./store/MedicineStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        medicine: new MedicineStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

