import React from 'react'
import { JournalEntry } from './JournalEntry';

export const JurnalEntries = () => {

    const entries =[1,2,3,4,5,6,78,9];

    return (
        <div className="journal__entries">
            {
                entries.map(value=>(
                    <JournalEntry key={value}/>
                ))
            }
        </div>
    )
}
