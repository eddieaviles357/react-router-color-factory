import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewColor from './NewColor';
import Colors from './Colors';
import Color from './Color';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/colors/new/'><NewColor /></Route>
            <Route exact path='/colors/:color/'><Color /></Route>
            <Route exact path='/colors/'><Colors /></Route>
            <Redirect to='/colors/' />
        </Switch>
    )
}