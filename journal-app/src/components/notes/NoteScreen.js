import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content"> 
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    className="notes__title-input"
                    type="text"
                    placeholder="some awesome title"
                    autocomplete="off"
                ></input>
                <textarea
                    className="notes__textarea"
                    placeholder="what happened today?"
                ></textarea>
                <div className="notes__image">
                    <img
                        src="https://miro.medium.com/max/3200/1*qyhua3giJFAx_kOdFoWHzw.jpeg"
                        alt="imagen"
                    >
                    </img>

                </div>


            </div>


        </div>
    )
}
