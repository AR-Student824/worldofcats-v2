import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import cards from './cards.json'

export default function Home() {
  useEffect(() =>{
    const Typed = require('typed.js')
    var i = new Typed(".blue", {
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      strings: [
          "Cute",
          "Cute",
          "Adorable",
          "Sweet",
          "Cool"
      ],
      loop: true
  })
  },[])
  return (
    <div>

<Head>
    <title>World Of Cats</title>
    <meta charset="UTF-8" />
    <meta property="og:type" content="website" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:site_name" content="World Of Cats" />
    <meta property="og:title" content="Cat Themed NFTs" />
    <meta name="title" content="Cat Themed NFTs" />
    <meta property="twitter:title" content="Cat Themed NFTs" />
    <meta property="og:description" content="Check out our cat-themed NFT series." />
    <meta property="twitter:description" content="Check out our cat-themed NFT series." />
    <meta name="description" content="Check out our cat-themed NFT series." />
</Head>
    <h1><span className="blue"><noscript>Cute</noscript></span> 😺 themed NFTs.</h1>
    <h2>EXPLORE ALL NFTS</h2>
    <div className="grid">
        {cards.nfts.map((i, b) => {
            <a href={i.href}
            className="card" target="_blank" rel="noreferrer">
                <img src={i.image} width="200px" />
                <h2>{i.title}</h2>
            </a>
        })}
    </div>
    </div>
  )
}
