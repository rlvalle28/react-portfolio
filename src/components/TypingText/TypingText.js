import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function TypeWriter() {
    const [text] = useTypewriter({
        words: ['Frontend Developer', 'Wordpress Developer'],
        loop: {},
    });

    return (
        <h4 style={{margin: '10px'}}>
            I'm a {' '}
            <span style={{fontWeight: 'bold', color: '#00308F'}}>
            {text}
        </span>
        <Cursor />
        </h4> 
    );
}

export default TypeWriter;