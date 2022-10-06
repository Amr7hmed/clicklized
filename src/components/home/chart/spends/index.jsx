import React from 'react'
import ApexChart from './data'

function Spends() {
    const dataspends = [5000, 2500, 1800, 4000, 2000, 1700, 2000,1500, 5000, 2200, 1500, 5000];
    const labels = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    const BackgroundArray=[];
    let i;
    for(i=0;i<dataspends.length ; i++){
        if(dataspends[i] > 2500){
            BackgroundArray.push("#3ba500");
        }else if(dataspends[i] < 1900){
            BackgroundArray.push("#f14c4c");
        }else{
            BackgroundArray.push("#ff9500");
        }
    }
  return (
    <div className='spends'>
        
        <ApexChart Dataspends={dataspends} BackgroundArray={BackgroundArray} labels={labels}/>
    </div>
  )
}

export default Spends