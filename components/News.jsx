import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const { Text, Title } = Typography;
const { Option } = Select;
export const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count:simplified ? 6 : 12});
  const { data } = useGetCryptosQuery(100);
  if(!cryptoNews?.value) return 'Loading...'


  return (
    <Row style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}} gutter={[ 24, 24 ]}>
     {!simplified && (
       <Col span={24}>
         <Select style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}}
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
         
         
         
         >
           <Option style={{ color:"greenyellow"}}value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
         </Select>      
       </Col>
     )} 
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          
          <Card style={{background: "black", border: "solid 5px black", color:"greenyellow"}} hoverable className='news-card'>
            <div id="bigbox2">
            <a href={news.url} target="blank" rel="noreferrer">
              <div className="news-image-container">
                <Title style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}} className='news-title' level={4}>{news.name}</Title>
                <img height="100" width="auto" src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
              </div>
              <p style={{color:"greenyellow"}}>
                {news.description > 100 ? `${news.description.substring(0, 100)}...`
                : news.description
                
                }
              </p>
              <div style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}} className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                  <Text style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}} className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <Text style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}} >{moment(news.datePublished).startOf('ss').fromNow()}</Text>


              </div>
            </a>
            </div>
          </Card>         
        </Col>
      ))}      
      </Row>
  )
}


export default News