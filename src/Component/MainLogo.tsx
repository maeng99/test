import {Link} from 'react-router-dom';
import '../App.css';

export default function MainLogo() {
    return (
        <div style={{backgroundColor: 'rgb(0,0,0)',
            width: '100%',
            color: 'rgb(255,255,255)', 
            padding: '5px',
            fontFamily: 'sans-serif',
            position:'sticky',
            top: '0'}}
        >
            <Link to='/' className='link'><h2>Maeng</h2></Link>
        </div>
    )
}