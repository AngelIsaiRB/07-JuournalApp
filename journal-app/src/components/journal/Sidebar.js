import React from 'react'
import { JurnalEntries } from './JurnalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="fa fa-moon"></i>
                    <span> Isai</span>
                </h3>
                <button className="btn">
                    Logut
                </button>
            </div>
            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">new entry</p>
            </div>
            <JurnalEntries/>
        </aside>
    )
}
