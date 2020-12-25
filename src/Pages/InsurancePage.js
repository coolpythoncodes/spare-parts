import { useState,useEffect } from 'react';

import Button from '../Components/Button/Button';
import NavBar from '../Components/NavBar';
import NavBarButton from '../Components/Button/NavBarButton';
import NavLinks from '../Components/NavLinks';
import InsuranceCards from '../Components/Cards/InsuranceCards';
import WorkCards from '../Components/Cards/WorkCards';

import '../Sass/insurancepage.scss';

import ArrowRight from '../assests/arrow-right.svg';
import ShowCaseImage from '../assests/showcase.png';
import CarMaintenanceImage from '../assests/car_maintenance.png';


const InsurancePage = () => {

    const [menuToggle, setmenuToggle] = useState(false);
    const onToggle = () => {
        setmenuToggle(!menuToggle);
    } 

    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const breakpoint = 767;

    useEffect(() => {
        const handleWindowResize = () => setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);



    const mobileNavLinksComponent = <>
        <NavLinks navLink='Packages' color='#033C49' />
        <NavLinks navLink='About' color='#033C49' />
        <NavLinks navLink='Contact' color='#033C49' />
        <NavLinks navLink='Register' color='#033C49' />
        <NavLinks navLink='Login' color='#033C49' />
    </>

    const desktopNavLinksComponent = <>
        <NavLinks navLink='Packages' color='#033C49' />
        <NavLinks navLink='About' color='#033C49' />
        <NavLinks navLink='Contact' color='#033C49' />
        <li><NavBarButton text='Register' color='#033C49' backgroundColor='#E5E5E5' border /></li>
        <li><NavBarButton text='Login' color="#fff"  backgroundColor='#f9811e' /></li>
    </>

    return (
        <div>
            <NavBar 
                menuToggle={menuToggle} 
                onToggle={onToggle}
            >
                {
                    deviceWidth <= breakpoint ? mobileNavLinksComponent : desktopNavLinksComponent
                }

            </NavBar>
            <section className="showcase-a">
                <div className="showcase-a-left">
                    <h1>We help insure your vehicle with our best stations.</h1>
                    <div className="showcase-btn-section">
                        <Button 
                            backgroundColor='#0091B3'
                            width='150'
                            height='50'
                            color='#fff'
                        >
                            Get Started 
                            <img className='arrow-right' src={ArrowRight} alt=""/> 
                        </Button> 
                        <span>or</span>  
                        <div className="inquiry-btn">
                            <Button 
                                color='#FE895D' 
                                width='114'
                                borderColor='#FE895D'
                                border
                            >
                                Make Inquiry
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="showcase-a-right">
                    <img className='showcase-image' src={ShowCaseImage} alt=""/>
                </div>
            </section>

            <section className="showcase-b">
                <div className="showcase-b-left">
                    <img className='car-image' src={CarMaintenanceImage} alt=""/>
                </div>
                <div className="showcase-b-right">
                    <h1>Simple, smarter insurance.</h1>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                    <Button 
                        backgroundColor='#0091B3'
                        width='133'
                        color='#fff'
                    >
                        See Packages
                    </Button>
                </div>
            </section>

            <section className="how-it-works">
                <h1>How it works</h1>
                <WorkCards />
                <div className="apply-btn">
                    <Button
                        color='#0091B2'
                        border
                        borderColor='#0091B2'
                        width='169'
                    >
                        Apply here
                    </Button>
                </div>
            </section>

            <section className="insurance-package">
                <h1>Our Insurance Packages</h1>
                <InsuranceCards/>
            </section>
        </div>
    );
}

export default InsurancePage;
