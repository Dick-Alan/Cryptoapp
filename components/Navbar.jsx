import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.gif'
const Navbar = () => {
    const [ activeMenu, setActiveMenu ] = useState(true);
    const [ screenSize, setScreenSize ] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);


        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []); 

    useEffect(() => {
        if(screenSize < 768 ) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }

    }, [screenSize])
  return (
    <div style={{ background: "black", borderColor: "greenyellow" }} className="nav-container">
        <div style={{ background: "black", borderColor: "greenyellow" }} className="logo-container">
            <Avatar style={{ background: "black", borderColor: "greenyellow" }} src={icon} size="large"/>
            <Typography.Title level={2} className="logo"> 
                <Link style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}} theme="dark" to="/">[Crypto_Data]</Link>
            
            
            </Typography.Title>
            <Button style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}}  className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined style={{background: "black", borderColor: "greenyellow", color:"greenyellow"}} />

            </Button>
                

            </div>
            {activeMenu && (
                            <Menu style={{ textColor:"greenyellow", background: "black", borderColor: "greenyellow", highlightColor:"purple", color:"greenyellow"}}>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link style={{color: "greenyellow"}} to="/">HOME</Link>
                    </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link style={{color: "greenyellow"}} to="/cryptocurrencies">CRYPTOCURRENCIES</Link>
                    </Menu.Item>
 
                <Menu.Item icon={<BulbOutlined />}>
                    <Link style={{color: "greenyellow"}} to="/news">NEWS</Link>
                    </Menu.Item>


            </Menu>



            )}

        </div>
  )
}

export default Navbar