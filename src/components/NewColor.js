import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function NewColor({submit}) {
    const [clr, setClr] = useState('#ffffff')
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // add color but remove the # character
        submit( prev => [...prev, clr.slice(1)]);
        history.push('/colors');
    }

    const handleChange = (evt) => {
        setClr(() => evt.target.value)
    }
    return (
        <>
            <form className='Form' onSubmit={handleSubmit}>
                <label htmlFor='color'>Select Color</label>
                <input type='color' name='color' onChange={handleChange} value={clr}/>
                <button>Submit</button>
            </form>
        </>
    )
}