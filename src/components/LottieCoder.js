import React from 'react'
import Lottie from 'react-lottie'

function SpacemanGif({animationData}) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
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