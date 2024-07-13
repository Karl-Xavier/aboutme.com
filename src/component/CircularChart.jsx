import React, { useEffect, useState } from 'react'
import './comptStyle/CircularChart.css'

export default function CircularChart({ percentage, value }) {
    const [currentPercentage, setCurrentPercentage] = useState(0)
    useEffect(()=>{
        if(currentPercentage < percentage){
            const timer = setTimeout(()=>{
                setCurrentPercentage(currentPercentage + 1)
            }, 2000)

            return ()=> clearTimeout(timer)
        }
    }, [currentPercentage, percentage])
  return (
    <div className='chart flex items-center gap-3'>
        <div className='circular-chart'>
        <div className="circle" style={{
            background: `conic-gradient(#4caf50 ${currentPercentage}, #ddd 0deg)`
        }}>
            <span className="percentage">
                {percentage}%
            </span>
        </div>
        </div>
        <h3>{value}</h3>
    </div>
  )
}