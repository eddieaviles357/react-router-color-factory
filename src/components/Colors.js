import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Colors({colors}) {

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
        <ul className='Nav-colors'>
        { colors.map( (c, idx) => ( <li key={idx}><NavLink exact to={`/colors/${c}`}>{c}</NavLink></li>) ) }
        </ul>
        </>
    )
}