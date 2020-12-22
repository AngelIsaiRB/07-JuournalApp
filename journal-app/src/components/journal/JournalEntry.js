import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: "url(https://img.freepik.com/vector-gratis/fondo-pintura-acuarela-rosa-vibrante_53876-58930.jpg)"
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    un nuevi no se
                </p>
                <p className="journal__entry-content">
                    lorem ipsum dolor sit amet, consectetur, lorem ipsu
                    m dolor sit amet, consecteturEa proident ipsum minim sint commodo sit pariatur.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
