import { useState } from 'react';
import InsuranceCard from './InsuranceCard';
import '../../Sass/insurancecards.scss';
import { insuranceDetails } from '../../insuranceInfo';

const InsuranceCards = () => {


    const [insuranceItems, setInsuranceItems] = useState(insuranceDetails);
    const handleClick = (id) => {
        setInsuranceItems(insuranceItems.map(item => item.active = false))
        setInsuranceItems(insuranceItems.map((item) => {
            if(item.id === id){
                item.active = !item.active;
            } return item;
        }))
    }

    return (
        <div className='insurance-cards'>
            {
                insuranceItems.map(({
                    id,
                    packageName, 
                    amount, 
                    packageDetails,
                    active,
                })  => {
                    return (
                        <InsuranceCard
                            key={id}
                            insurancePackage={packageName}
                            amount={amount}
                            active={active}
                            handleClick={() => handleClick(id)}
                        >
                            {packageDetails}
                        </InsuranceCard>
                    ) 
                
            })}
        </div>
    );
}

export default InsuranceCards;
