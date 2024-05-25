'use client'
import CountUp from 'react-countup'
const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div>
        <CountUp 
         duration={0.50}
         decimals={2}
         decimal="."
         prefix="₹"
        end={amount}/>
    </div>
  )
}

export default AnimatedCounter