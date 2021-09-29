import './style.css'
import Card from '@mui/material/Card';

function MyCard(props) {
    return (
        <Card className='card'>
            {props.children}
        </Card>
    )
}

export default MyCard;