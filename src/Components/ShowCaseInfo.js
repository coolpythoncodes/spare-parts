import Button from "./Button";
import '../Sass/showcaseinfo.scss';

const ShowCaseInfo = () => {
    return (
        <section className='showcase-info'>
            {/* <div className="vector"></div> */}
            <div className="showcase-details">
                <div className="showcase-left">
                    <h1>Buy spare parts at your ease</h1>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                    <div className="buttons">
                        <Button text='Get it on Playstore'/>
                        <Button text='Download on the Applestore'/>
                    </div>
                </div>
                <div className="showcase-right">
                    
                </div>
            </div>
        </section>
    );
}

export default ShowCaseInfo;
