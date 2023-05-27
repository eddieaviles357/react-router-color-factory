import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/colors'>
                
            </Route>
            <Route exact path='/colors/:color'>

            </Route>
            <Redirect to='/colors' />
        </Switch>
    )
}