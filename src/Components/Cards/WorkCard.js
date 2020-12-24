import styled from 'styled-components';
import SettingsIcon from '@material-ui/icons/Settings';

const WorkCard = ({ children }) => {

    const Card = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 0.3;
        min-height: 278px;
        background: #ECECEC;
        border-radius: 10px;
        margin-top: 2rem;
    `

    const Text = styled.p`
        font-family: Mulish;
        font-size: 1rem;
        line-height: 22px;
        padding: 0 42px 48px 42px;
        overflow: hidden;
        
    `

    return (
        <Card>
            <SettingsIcon 
                style={{ 
                    fontSize: 70, 
                    marginTop: 30,
                    marginBottom: 31,
                }}
            />
            <Text>{ children }</Text>
        </Card>
    );
}

export default WorkCard;
