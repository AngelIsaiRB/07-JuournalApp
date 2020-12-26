import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StartSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)

    const handleSave =()=>{
        dispatch(StartSaveNote(active));
    }
    const handlePictureClick =()=>{
        document.querySelector("#fileSelector").click();
    }

    const handlefileChange=(e)=>{
        const file = e.target.files[0];
        if(file){
            dispatch(startUploading(file));
        }
    }
    return (
        <div className="notes__appbar"> 
            <span>28 de algo del alfo</span>
            <input type="file"
                id="fileSelector"
                name="file"
                style={{display:"none"}}
                onChange={handlefileChange}
            ></input>
            <div>
                <button 
                className="btn"
                onClick={handlePictureClick}
                >
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
