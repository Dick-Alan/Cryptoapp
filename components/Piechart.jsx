import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import millify from 'millify'
import Cryptocurrencies from './Cryptocurrencies'

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );
  export const PieChart = ({ globalStats ,cryptoList }) => {
    const remainder = globalStats.totalMarketCap/1000 - (
        cryptoList[0].marketCap/1000 +
        cryptoList[1].marketCap/1000 +
        cryptoList[2].marketCap/1000 +
        cryptoList[3].marketCap/1000 +
        cryptoList[4].marketCap/1000 +
        cryptoList[5].marketCap/1000 +
        cryptoList[6].marketCap/1000 +
        cryptoList[7].marketCap/1000 +
        cryptoList[8].marketCap/1000 +
        cryptoList[9].marketCap/1000 )

    const caps = [
        millify((cryptoList[0].marketCap * 100) / globalStats.totalMarketCap),
        millify((cryptoList[1].marketCap * 100) / globalStats.totalMarketCap),
        millify((cryptoList[2].marketCap * 100) / globalStats.totalMarketCap),
        millify((cryptoList[3].marketCap * 100) / globalStats.totalMarketCap),
        millify((cryptoList[4].marketCap * 100) / globalStats.totalMarketCap),
        millify((cryptoList[5].marketCap * 100) / globalStats.totalMarketCap),
        millify((cryptoList[6].marketCap * 100) / globalStats.totalMarketCap),
        millify((cryptoList[7].marketCap * 100) / globalStats.totalMarketCap),
        millify((cryptoList[8].marketCap * 100) / globalStats.totalMarketCap),
        millify((cryptoList[9].marketCap * 100) / globalStats.totalMarketCap),
        millify((remainder * 100000) / globalStats.totalMarketCap) 



    ];
    const coinNames = [

        cryptoList[0].symbol,
        cryptoList[1].symbol,
        cryptoList[2].symbol,
        cryptoList[3].symbol,
        cryptoList[4].symbol,
        cryptoList[5].symbol,
        cryptoList[6].symbol,
        cryptoList[7].symbol,
        cryptoList[8].symbol,
        cryptoList[9].symbol,
        'All Others'

    ];
    

    const data = {
        labels: coinNames,
        datasets: [{
            fill: true,
            label: "Coin Name",
            data: caps,
            backgroundColor: [ 
                cryptoList[0].color,
                cryptoList[1].color,
                cryptoList[2].color,
                cryptoList[3].color,
                cryptoList[4].color,
                cryptoList[5].color,
                cryptoList[6].color,
                cryptoList[7].color,
                cryptoList[8].color,
                cryptoList[9].color,
                'white'





            ],
        },

        ],
    };
    const options = {
        cutout: '80%',
        rotation: 75,
        
        plugins :{
            legend: {
                position: 'right',
                labels: {
                    color: 'greenyellow'
                }
            },


                

            
        }
    };

    return (
        <>
        <Pie data={data} options={options} />
        
        
        
        </>


    );
    
  }

  export default PieChart