import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Color(props) {
    return (
        <div>
            Color
            <NavLink to='/colors'>Go Back</NavLink>
        </div>
    )
}