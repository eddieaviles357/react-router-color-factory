import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';

export default function Color({colors}) {
    const {slug} = useParams();
    const history = useHistory();

    useEffect(() => {
        const validSlug = colors.includes(slug);
        // is slug in the colors array is it valid
        if(!validSlug) { // redirect to home /colors
            history.push('/colors');
        };

    }, [slug, history, colors])
    return (
        <div className='Color Flex-column' style={{backgroundColor: `#${slug}`}}>
            <h1>Beautiful color</h1>
            <h3>color: {slug}</h3>
            <NavLink to='/colors'>Go Back</NavLink>
        </div>
    )
}