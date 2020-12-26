import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const {active:note} = useSelector(state => state.notes);
    const [values, handleInputChange,reset]= useForm(note);
    const {body, title}= values;

    const activeID = useRef(note.id);

    useEffect(() => {
        if(note.id !== activeID.current){
            reset(note);
            activeID.current=note.id;
        }
    }, [note, reset]);
    

    return (
        <div className="notes__main-content"> 
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    className="notes__title-input"
                    type="text"
                    placeholder="some awesome title"
                    autoComplete="off"
                    onChange={handleInputChange}                    
                    value={title}
                ></input>
                <textarea
                    className="notes__textarea"
                    placeholder="what happened today?"
                    onChange={handleInputChange}
                    value={body}
                ></textarea>
                {
                    note.url &&
                    <div className="notes__image">
                    <img
                        src="https://miro.medium.com/max/3200/1*qyhua3giJFAx_kOdFoWHzw.jpeg"
                        alt="imagen"
                    >
                    </img>
                </div>}
            </div>


        </div>
    )
}
