import React from 'react'
import s from "../styles/GoldenMessagge.module.css"

function GoldenMessagge() {
    return (
        <div className={s.container}>
            <div className={s.contentContainer}>
                <h3>The Golden Guest</h3>
                <p>
                The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have no element in common with the regular collection.
                </p>
                <button>Join us to register for the Presale</button>
            </div>
            <div className={s.imgContainer}>
                <img src="/goldenTicket.png"/>
            </div>
        </div>
    )
}

export default GoldenMessagge
