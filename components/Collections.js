import React from 'react'
import s from "../styles/Collections.module.css"
import Card from "./Card"

//simulating api response
const cards = [
    {
        user: "/users/user1.png",
        img: "/nft/nft1.jpg"
    },
    {
        user: "/users/user2.png",
        img: "/nft/nft2.jpg"
    },
    {
        user: "/users/user3.png",
        img: "/nft/nft3.jpg"
    },
    {
        user: "/users/user1.png",
        img: "/nft/nft4.jpg"
    },
    {
        user: "/users/user2.png",
        img: "/nft/nft5.jpg"
    },
    {
        user: "/users/user3.png",
        img: "/nft/nft6.jpg"
    }
]

function Collections() {
    return (
        <div className={s.container}>
            <h2 className={s.collections}>Collections</h2>
            <p className={s.p}>
            With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
            </p>
            <div className={s.cardsContainer}>
                {cards.map(element => (
                    <Card user={element.user} img={element.img} key={element.user}/>
                ))}
            </div>
        </div>
    )
}

export default Collections
