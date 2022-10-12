import React from 'react'

function List() {
  return (
    <ul className='list'>
            <li>
                <span className='icon editedata'>
                    <span>1</span>
                </span>
                <span className="text editedata">Request details</span>
            </li>
            <span className='line'></span>
            <li>
                <span className='icon'>
                    <span>2</span>
                </span>
                <span className="text">Choose suppliers</span>
            </li>
            <span className='line'></span>
            <li>
                <span className='icon'>
                    <span>3</span>
                </span>
                <span className="text">Review request</span>
            </li>
    </ul>
  )
}

export default List