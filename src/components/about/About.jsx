import React from 'react';
import meme from '../../assets/icons/meme.png'

const About =() => {
    return (
        <div id='about' className='bg-[#77AD4B] grid grid-cols-1 md:grid-cols-2 px-3 py-1 md:py-24 mt-20 md:mt-0' >
            <div className='flex flex-col justify-start items-center p-20' >
                <h1 style={{fontFamily:'Irish Grover', fontWeight:'bold'}} className='mb-9 text-2xl'>About</h1>
                <p className='text-2xl text-center'>We believe that open source is essential in making our work envirmoments richer and more productive. With this library, we hope a various designers can explore infinite possibilities and find their own remarkable careers </p>
            </div>
            <div className='flex items-center justify-start h-full '>
                <img src={meme} width='350px' height='300px' />
            </div>
            
        </div>
    );
}

export default About;