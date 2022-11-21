import React from 'react'
import QuestionsDataList from './list.jsx'

function ShowQuestionsData() {
  return (
    <div className='showrequestbottom'>
        <div className="showquestionsdata">
            <div className="title">
                <h6>Questions</h6>
            </div>
            <div className="questionsdatalistcontener">

            <QuestionsDataList/>
            <QuestionsDataList/>
            <QuestionsDataList/>
            </div>
        </div>
    </div>
  )
}

export default ShowQuestionsData