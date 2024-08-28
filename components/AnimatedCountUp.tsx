'use client';
import CountUp from 'react-countup';

const AnimatedCountUp = ({amount}:{amount:number}) => {
  return (
    <div>
        <CountUp decimal=','
        prefix='INR'
        decimals={2}
        
         end={amount}
            />
    </div>
  )
}

export default AnimatedCountUp