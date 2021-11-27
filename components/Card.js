import React from 'react'
import s from "../styles/Card.module.css"
function Card({user, img}) {
    return (
        <div className={s.container}>
            <div className={s.cardContainer}>
            <div className={s.head}>
                <div className={s.user}>
                    <img src={user} alt=""/>
                    <span>@knight</span>
                </div>
                <div className={s.stars}>
                    <img src="/users/star.png" />
                    <span>213</span>
                </div>
            </div>
            <img src={img} width="90%"/>
            <div className={s.foot}>
                <div className={s.bid}>
                    <h5>Current bid</h5>
                    <h4>0.54 ETH</h4>
                </div>
                <div className={s.ending}>
                    <h5>Ending in</h5>
                    <h4>12h 55m 2s</h4>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card
