import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
//import du store
import { store } from './app/store.js'
//import du provider
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Provider est un fournisseur de donnée, et ce qu'on va fournir aux composants est le store 
    // le store réuni toutes les slices
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
document.getElementById("root")
);

