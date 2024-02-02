import React, { useEffect, useState } from 'react'
import CrytpoCard from './CrytpoCard'

const Dashboard = () => {
    const [data, setData] = useState({})
    const API_LINK = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"

    const fetchData = async () => {
      await fetch(API_LINK).then(res => res.json()).then(data => setData(data))
    }
  
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='cdb'>
            <h1 className='cdb__header'>Crypto Dashboard</h1>

            {/* map through the list pf crypto data in card component */}
            { data && data.length ? (
                data.map(cc => {return <CrytpoCard data={{name: cc.name, symbol: cc.symbol, image: cc.image, change: cc.market_cap_change_percentage_24h}}/>})
            ) : (<h4>Data Loading ...</h4>)}
        </div>
    )
}

export default Dashboard
