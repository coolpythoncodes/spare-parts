import NavBar from './NavBar';
import '../Sass/showcase.scss';
import ShowCaseInfo from './ShowCaseInfo';

const ShowCase = () => {
    return (
        <section className='showcase'>
            <NavBar />
            <ShowCaseInfo />
        </section>
    );
}

export default ShowCase;
