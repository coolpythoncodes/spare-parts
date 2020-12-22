import styled from 'styled-components';
import SettingsIcon from '@material-ui/icons/Settings';

const WorkCard = ({ children }) => {

    const Card = styled.div`
        width: 287px;
        height: 278px;
        background: #ECECEC;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const Text = styled.p`
        font-family: Mulish;
        font-size: 14px;
        line-height: 22px;
        padding: 0 41px;
        
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
