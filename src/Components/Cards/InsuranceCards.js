import InsuranceCard from './InsuranceCard';
import '../../Sass/insurancecards.scss';

const InsuranceCards = () => {
    return (
        <div className='insurance-cards'>
            <InsuranceCard 
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
            </InsuranceCard>
        </div>
    );
}

export default InsuranceCards;
