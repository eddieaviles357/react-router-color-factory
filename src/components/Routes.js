import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewColor from './NewColor';
import Colors from './Colors';
import Color from './Color';

export default function Routes() {
    const [colors, setColors] = useState(['da3e3e', '3b09ae', '49e71d']);

    return (
        <Switch>
            <Route exact path='/colors/'><Colors colors={colors}/></Route>
            <Route exact path='/colors/new/'><NewColor submit={setColors}/></Route>
            <Route exact path='/colors/:slug/'><Color colors={colors}/></Route>
            <Redirect to='/colors/' />
        </Switch>
    )
}