import React from 'react'

function ChartHeadr(props) {
    const {Title , Line}=props;
  return (
    <div className="chart__headr">
        <h5>{Title}</h5>
        <span>{Line}</span>
    </div>
  )
}

export default ChartHeadr;