import styled, { css } from 'styled-components';
import Button from '../Button/Button';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0.3;
    min-height: 550px;
    background: ${props => (props.active ? ' #0091B2' : '#FFFFFF') };
    color: ${props => (props.active ? ' #fff' : '#000' ) };
    box-shadow: 0px 16px 40px 20px rgba(112, 144, 176, 0.2);
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  
    @media screen and (max-width: 300px){
        min-height: 450px ;
    }

    @media screen and (max-width: 767px){
        margin-bottom: 3rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){

        min-height: 490px;
    }
    
`

const PackageName = styled.h4`
        margin-top:86px;
        font-family: Mulish;
        font-size: 36px;
        line-height: 157%;

        @media screen and (max-width: 300px){
            font-size: 1.8rem;
            margin-top: 35px;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px){
            font-size: 2rem;
            margin-top: 70px;
        }
    `

    const Amount = styled.h2`
        font-family: Mulish;
        font-weight: 800;
        font-size: 48px;
        line-height: 157%;

        @media screen and (max-width: 300px){
            font-size: 1.8rem;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px){
            font-size: 2rem;
        }
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

        @media screen and (max-width: 300px){
            padding: 0 20px;
            margin-top: 30px;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px){
            padding: 0 20px;
            margin-top: 40px;
        }
    `
    const buttonCss = css`
        box-shadow: 0px 16px 40px 20px #000;
    `

const InsuranceCard = ({ insurancePackage,amount,children,active,handleClick }) => {
    
    return (
        <Card onClick={handleClick} active={active}>
            <PackageName>{ insurancePackage }</PackageName>
            <Amount>{ `N ${amount }`}</Amount>
            <Text>{children}</Text>
            <div 
                className="select-btn" 
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
        </Card>
    );
}

export default InsuranceCard;
