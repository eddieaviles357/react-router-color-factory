import React from 'react';

export default function NewColor() {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for='color'>Color</label>
                <input type='color' name='color' />
                <button></button>
            </form>
        </>
    )
}