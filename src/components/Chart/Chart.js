import React from 'react';
import ChartBar from './ChartBar'
import './Chart.css'
const Chart  = (props) => {

   
const valueArr = props.dataPoints.map( (item) =>item.value);
const totalMaximum = Math.max( ...valueArr );

return (
    <div className="chart">
        {
            props.dataPoints.map( (dataPoint) => {
             return(<ChartBar
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label}></ChartBar>);
            })
        }
    </div>
)

}

export default Chart;