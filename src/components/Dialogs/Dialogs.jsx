import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Dialogs.module.css'

const Dialog = (props) => {
  return <div>
    <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
  </div>
}

const Message = (props) => {
  return <div className={c.message}>
    {props.content}
  </div>

}


const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <Dialog name="Arthur" id="2" />
        <Dialog name="Игорь" id="3" />
        <Dialog name="Вероника" id="4" />
        <Dialog name="Рулсан" id="5" />
      </div>
      <div className={c.messages}>
        <Message content="привет, как дела"/>
        <Message content="Что делаешь"/>
        <Message content="Ты где"/>
        <Message content="как там"/>
      </div>
    </div>
  )
}

export default Dialogs;