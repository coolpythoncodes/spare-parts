import { useState,useEffect } from 'react';
import styled, { css } from 'styled-components';
import Button from '../Button/Button';

const InsuranceCard = ({ insurancePackage,amount,children,active,handleClick }) => {
    
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const breakpoint = 600;

    useEffect(() => {
        const handleWindowResize = () => setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);

    const InsuranceCard = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        min-height: 550px;
        left: 223px;
        top: 2296px;
        background: ${active ? ' #0091B2' : '#FFFFFF'};
        box-shadow: 0px 16px 40px 20px rgba(112, 144, 176, 0.2);
        border-radius: 10px;
        cursor: pointer;
        user-select: none;
        color: ${active ? ' #fff' : '#000'};
        ${
            deviceWidth <= breakpoint && 'margin-bottom: 3rem;'
        }
    `

    const PackageName = styled.h4`
        margin-top:86px;
        font-family: Mulish;
        font-size: 36px;
        line-height: 157%;
    `

    const Amount = styled.h2`
        font-family: Mulish;
        font-weight: 800;
        font-size: 48px;
        line-height: 157%;
    `

    const Text = styled.p`
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        padding: 0 48px;
        margin-top: 50px;
        margin-bottom: 60px;
    `
    const buttonCss = css`
        box-shadow: 0px 16px 40px 20px #000;
    `
    // rgba(112, 144, 176, 0.2)
    return (
        <InsuranceCard onClick={handleClick}>
            <PackageName>{ insurancePackage }</PackageName>
            <Amount>{ `N ${amount }`}</Amount>
            <Text>{children}</Text>
            <div 
                className="select-btn" 
                style={{
                    paddingBottom:48,
                }}
            >
                <Button
                    backgroundColor='#fff'
                    color='#0091B2'
                    width='133'
                    border
                    borderColor='#fff'
                    addCss={buttonCss}
                >
                    Select
                </Button>
            </div>            
        </InsuranceCard>
    );
}

export default InsuranceCard;
