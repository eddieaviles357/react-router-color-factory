import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Colors() {
    return (
        <>
        <nav className='Nav'>
        <h1>Welcome to the color factory</h1>
        <NavLink exact to='/colors/new'>Add a color</NavLink>
        </nav>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>Please select a color</h3>
        {}
        </>
    )
}