import WorkCard from "./WorkCard";

import WorksArrow from '../../assests/works-arrow.svg';
import '../../Sass/workcards.scss';


const WorkCards = () => {
    return (
        <div className='work-cards'>
            <WorkCard>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </WorkCard>
            
            <img src={WorksArrow} alt=""/>

            <WorkCard>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </WorkCard>

            <img src={WorksArrow} alt=""/>

            <WorkCard>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </WorkCard>
        </div>
    );
}

export default WorkCards;
