import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Root from './components/';

const init = <Provider store={ store }>
                <BrowserRouter>
                    <Root />
                </BrowserRouter>
            </Provider>

ReactDOM.render(init, document.getElementById('root'));

registerServiceWorker();
