import React from 'react';
import c from './Diaglogs.module.css'


const Diaglogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <div className={c.dialog}>Илья</div>
        <div className={c.dialog}>Игорь</div>
        <div className={c.dialog}>Вероника</div>
        <div className={c.dialog}>Руслан</div>
      </div>
      <div className={c.messages}>
        <div className={c.message}>привет</div>
        <div className={c.message}>ой все</div>
        <div className={c.message}>ничего</div>
      </div>
    </div>
  )
}
export default Diaglogs;