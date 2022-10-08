import React from 'react';
import DoughnutChart from './data.jsx';

function Requests() {
    const dataspends = [5000, 2500, 1800];
    const labels = ["Accepted","Rejected","Under Process"];
    const BackgroundArray=[];
    let i;
    for(i=0;i<dataspends.length ; i++){
        if(dataspends[i] > 2500){
            BackgroundArray.push("#3ba500");
        }else if(dataspends[i] < 1900){
            BackgroundArray.push("#27beb8");
        }else{
            BackgroundArray.push("#0870e7");
        }
    }
  return (
    <div className='requests'>
        
        <DoughnutChart Dataspends={dataspends} BackgroundArray={BackgroundArray} labels={labels}/>
    </div>
  )
}

export default Requests;