import React, { useContext } from 'react'
import { Authcontext } from '../../../../store/context.js';
import QuestionsDataList from './list.jsx'

function ShowQuestionsData() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className='showrequestbottom'>
      <div className="showquestionsdata">
        <div className="title">
          <h6>
            {language === "Ar" ? "الأسئلة" : "Questions"}
          </h6>
        </div>
        <div className="questionsdatalistcontener">

          <QuestionsDataList />
          <QuestionsDataList />
          <QuestionsDataList />
        </div>
      </div>
    </div>
  )
}

export default ShowQuestionsData