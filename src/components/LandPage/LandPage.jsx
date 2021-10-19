import React from 'react'
import Hero from './Hero/Hero'
import ShowCase from './ShowCase/ShowCase'
import ATK from '../../assets/MKATK.png'
import DEF from '../../assets/MKSTAR.jpg'
import SPE from '../../assets/MKSPEED.jpg'

const Section = [
    { title: '攻擊，就是你最好的防禦', description: '你有討厭的對手嗎? 不要猶豫，砸過去就對了!',image: ATK },
    { title: '無敵，是多麼寂寞', description: '身上發著金光?開掛了吧!',image: DEF },
    { title: '速度，突破一切障礙', description: '天下武功，無監不破，為快不破!',image: SPE }
]

function LandPage() {
    return (
        <>
            <Hero />
            { Section.map((content) => (<ShowCase content={content} />))}
        </>
    )
}

export default LandPage
