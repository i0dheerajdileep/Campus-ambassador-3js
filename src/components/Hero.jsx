import React, { useEffect } from 'react';
import RINGS from 'vanta/dist/vanta.rings.min'; // Use the minified version
import * as THREE from 'three';

function Hero() {
    useEffect(() => {
        RINGS({
            el: '#bg',
            backgroundColor: 0x000000
        });
    }, []);

    return (
        <div id="bg" className="hero w-screen h-screen flex flex-row items-center justify-center overflow-hidden text-white">
            <div className='w-[75%]'>
            <h1 className="text-5xl mt-0">
                Campus<br className="mt-[4em]"/>Ambassador
            </h1>

            </div>
            <div></div>
        </div>
    );
}

export default Hero;
