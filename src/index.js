import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Axios from 'axios'

import Root from './components/';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { appurl } from './helpers/url';

Axios.defaults.baseURL = appurl;
Axios.defaults.headers.post['Content-Type'] = "application/json";

const init = <Provider store={ store }>
                <BrowserRouter>
                    <Root />
                </BrowserRouter>
            </Provider>

ReactDOM.render(init, document.getElementById('root'));

registerServiceWorker();
