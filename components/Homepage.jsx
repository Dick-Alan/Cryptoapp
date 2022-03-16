import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import PieChart from './Piechart'

import { Cryptocurrencies, News } from '../components';

const { Title } = Typography;



export const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  const cryptoList = data?.data.coins;
  
  

  if(isFetching) return 'Loading... ';
  console.log(globalStats)
  return (
    
    <>
    
    <div className="appRoot ant-dark">
        
        <Title style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}} class="global-crypto-stats">
            Global Crypto Stats
          </Title>


        <Row>
            <Col span={12}>Total Cryptocurrencies<Statistic  value={globalStats.total}/></Col>
            <Col span={12}>Total Exchanges<Statistic   value={millify(globalStats.totalExchanges)}/></Col>
            <Col span={12}>Total Market Cap<Statistic  value={millify(globalStats.totalMarketCap)}/></Col>

            <Col span={12}>Total 24h Volume<Statistic  value={millify(globalStats.total24hVolume)}/></Col>
            <Col span={12}>Total Markets<Statistic  value={millify(globalStats.totalMarkets)}/></Col>
    
        </Row>
        <div id="spacer"></div>
        <Title level={2} style={{color: 'greenyellow'}}>Market Dominance %:</Title>
        <Row style={{border: "solid 1px greenyellow"}} >
          
          <PieChart id="pie" cryptoList={cryptoList} globalStats={globalStats}/>
          
        </Row>
          
          <div id="spacer"></div>
        <div className='home-heading-container'>
            <Title style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}} level={2} className="home-title">Top 10 Cryptocurrencies</Title>
            <Title level={2} className="show-more"><Link style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}} to ="/cryptocurrencies"> Show More...</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className='home-heading-container'>
            <Title level={2} className="home-title">Latest News</Title>
            <Title level={2} className="show-more"><Link style={{color: "greenyellow"}}to ="/news"> Show More...</Link></Title>
        </div>
        <News simplified/>
    </div>
    </>
  )
}


export default Homepage