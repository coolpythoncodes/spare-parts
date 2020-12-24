import { useState } from 'react';
import InsuranceCard from './InsuranceCard';
import '../../Sass/insurancecards.scss';
import { insuranceDetails } from '../../insuranceInfo';

const InsuranceCards = () => {

    // const [active, setActive] = useState(false);
    // const handleClick = (id) => {
        
    //     setActive(!active);
    // }

    const [insuranceItems, setInsuranceItems] = useState(insuranceDetails);
    const handleClick = (id) => {
        setInsuranceItems(insuranceItems.map((item) => {
            if(item.id === id){
                item.active = !item.active;
            } return item;
        }))
        console.log(insuranceItems)
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
            {/* <InsuranceCard 
                insurancePackage='Silver'
                amount='5,000'
            >
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </InsuranceCard>

            <InsuranceCard 
                insurancePackage='Gold'
                amount='5,000'
            >
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </InsuranceCard>

            <InsuranceCard 
                insurancePackage='Diamond'
                amount='5,000'
            >
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </InsuranceCard> */}
        </div>
    );
}

export default InsuranceCards;
