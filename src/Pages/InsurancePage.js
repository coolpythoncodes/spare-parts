import Button from '../Components/Button'
import NavBar from '../Components/NavBar'
import NavLinks from '../Components/NavLinks'
import '../Sass/insurancepage.scss'

const InsurancePage = () => {
    return (
        <div id='insurance-page'>
            <NavBar>
                <NavLinks navLink='Packages' color='#033C49'/>
                <NavLinks navLink='About' color='#033C49'/>
                <NavLinks navLink='Contact' color='#033C49'/>
                <Button text='Register' color='#033C49' backgroundColor='#E5E5E5' border/>
                <Button text='Login' backgroundColor='#f9811e'/>
            </NavBar>
        </div>
    );
}

export default InsurancePage;
