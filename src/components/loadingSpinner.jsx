import React from 'react';
import Lottie from 'lottie-react';
import SpinningLoader from '../assets/loader/loading.json';

const LoadingSpinner = () => {
  return (
    <div className='h-5 mr-2.5'>
        <Lottie animationData={SpinningLoader} loop={true} height={20} />
    </div>
  )
}

export default LoadingSpinner;