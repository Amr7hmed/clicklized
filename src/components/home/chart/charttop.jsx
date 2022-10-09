import React from 'react'

function TopChart(props) {
    const {Title,Years,Datayear,setDatayear}=props;
  return (
    <div className='topchart'>
        <span className="title">{Title}</span>

        <ul>
            {Years.map((item,inedx)=>
            <li key={inedx} className={item === Datayear?"active":""}
            onClick={()=>setDatayear(item)}>
              {item}
              </li>
            )}
        </ul>
    </div>
  )
}

export default TopChart;