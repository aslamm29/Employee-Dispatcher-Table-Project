import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducers from './Reducers'
import DispatcherForm from './components/DispatcherForm'
import AvailableForm from './components/AvailableForm'
import UnavailableForm from './components/UnavailableForm'

class App extends Component {
render(){
return(
<div>
    <Home />
</div>
)
}
}

ReactDOM.render(<Provider store={(createStore(reducers))}>
<BrowserRouter>
<div>
    <Switch>
        
        <Route path="/available/new" component={AvailableForm} />
        <Route path="/unavailable/new" component={UnavailableForm} />
        <Route path="/dispatch/new" component={DispatcherForm} />
        <Route path="/" component={App} />
        
    </Switch>
</div>
</BrowserRouter>
</Provider>, document.getElementById('root'))