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
        <div id="bg" className=" w-screen h-screen flex flex-row  justify-start overflow-hidden text-white">
            <div className='flex m-[7rem] items-start  flex-col gap-2'>
                <div className='w-[75%] hero'>
                    <h1 className="text-5xl mt-0">
                        Campus
                    </h1>
                    <h1 className="text-5xl mt-2">
                        Ambassador
                    </h1>
                </div>
            <p className='text-sm text-gray-300'>Join us for Dhishna 2023</p>
            <div className='mt-3 '>
            <button className="  text-white px-7 text-sm py-3 rounded-full"  style={{
            background: 'linear-gradient(45deg, #E96390, #A34197)',
            }}>
                Sign up
            </button>
            <button className="  text-white px-7 ml-3 text-sm py-3 rounded-full border border-gray-400" >
                Share Referal
            </button>
            </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Hero;
