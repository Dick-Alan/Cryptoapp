import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);


export const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  

  
  
 
  let isUp = true
  if (coinHistory?.data?.change < 0) {
      isUp = false
  } else {
      isUp = true
  }

    
    
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.unshift(coinHistory.data.history[i].price);
    coinTimestamp.unshift(new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString());

   
  };
    let bColor
    let color
    if (isUp === true) {
        color = 'green';
        bColor = 'rgba(0, 255, 0, 0.1)'
    } else {
        color = 'red';
        bColor = 'rgba(255, 0, 0, 0.1)'
    }


  

  const data = {
 
    
    labels: coinTimestamp,
    datasets: [
      
      {
        fill: true,
        label: 'Price in USD',
        data: coinPrice,
        backgroundColor: bColor,
        borderColor: color,
        color: 'white',
        tension: 0.1,
        
        borderWidth: 3,

        
      },
      
      
    ],
  };

  const options = {
        
        scales: {

            lineWidth: 5,  
            borderColor: 'green',
            borderWidth: 10,
            
        // remove the [ & ] here
            yAxes: {


                scale: {

                    display: true,
                    fontColor: 'white',
                    fontSize: 25,
                    labelString: 'Faction Points',


                },

                ticks: {
                    beginAtZero: true,
                    color:  'rgba(255, 255, 100, 0.5)',
 

                },
              },
              y: {
                ticks: {
                  display: false

                },
                grid: {
                  
                  color: "rgba(255, 255, 255, 0.1)"
                  
                }
              },
              x: {
                ticks: {
                  color: 'rgba(255, 255, 100, 0.5)'

                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)"
                }
              }
        },
    };
    
    console.log(data)
    console.log(currentPrice)

    

    
  return (
    <>
      <Row className="chart-header">
        <Typography.Title style={{color:"greenyellow"}} level={2} className="chart-Typography.Title">
          {coinName} Price Chart
        </Typography.Title>
        <Col className="chart-container">
          <Typography.Title  style={{color:"greenyellow"}} level={3} className="chart-Typography.Title">
           Change: {coinHistory?.data?.change}%
          </Typography.Title>
          {/* <Typography.Title style={{color:"greenyellow"}} level={5} className="chart-Typography.Title">
            Current {coinName} Price: $ {}
          </Typography.Title> */}
        </Col>
      </Row>
      <Line style={{background:"black", border: "solid 1px greenyellow"}}  data={data} options={options} />
    </>
  );
};

export default LineChart