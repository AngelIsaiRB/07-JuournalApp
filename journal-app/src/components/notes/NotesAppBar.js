import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StartSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)

    const handleSave =()=>{
        dispatch(StartSaveNote(active));
    }

    return (
        <div className="notes__appbar"> 
            <span>28 de algo del alfo</span>
            <div>
                <button className="btn">
                    picture
                </button>
                <button 
                    onClick={handleSave}
                    className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}
