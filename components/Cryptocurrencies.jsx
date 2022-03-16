import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { BorderRightOutlined } from '@ant-design/icons';


export const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
      

      const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

      setCryptos(filteredData);

  }, [cryptosList, searchTerm]);

  if (isFetching) return 'Loading...';
  return (
    <>
    {!simplified && (
          <div className='search-crypto'>
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
      </div>


    )}

    <Row style={{ background: "black", borderColor: "greenyellow" }} gutter={[ 46, 46 ]} className="crypto-card-container">
    
      {cryptos?.map((currency) => (
        
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
          <div id="bigbox">
            <Link to={`/crypto/${currency.uuid}`}>

            
              
              <Card style={{ background: "black", border: "solid 10px black"}}
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img height="50"  className="crypto-image" src={currency.iconUrl} />}
                  hoverable
              >
                
                  <p> Price: {millify(currency.price)}</p>
                  <p> Market Cap: {millify(currency.marketCap)}</p>
                  <p> Daily Change: {millify(currency.change)}%</p>
                  
                


              </Card>
           

            </Link>
          
            <div id="cut"></div>

          </div>
          

          
        
        </Col>
        
      ))}
      


    </Row>
    
    </>
  )
}


export default Cryptocurrencies