import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Main} from "./peges/Main";
import Options from "./peges/Options";
import Catalog from "./peges/Catalog";
import {Contacts} from "./peges/Contacts";

function App() {
    return (
                <Switch>
                    <Route path={'/main'} component={Main}/>
                    <Route path={'/catalog'} exact component={Catalog}/>
                    <Route path={'/catalog/:id'} render={(props) => (<Options {...props}/>)}/>
                    <Route path={'/contacts'} exact component={Contacts}/>
                    <Route path={''} component={Main}/>
                </Switch>
    );
}

export default App

