import React from 'react'
import Lottie from 'react-lottie'
import spaceman from '../spaceman.json'

function SpacemanGif() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: spaceman,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
        <div className='LottieContainer'>
            <Lottie options={defaultOptions}/>
        </div>
    );
}

export default SpacemanGif