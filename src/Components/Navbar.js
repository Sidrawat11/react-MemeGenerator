import trollFace from '../Images/Troll Face.png';

export default function Navbar(){
    return (
        <header className="nav--container">
            <img src={trollFace} alt=''/>
            <h2 className='title'>MEME GENERATOR</h2>            
            <h4>React Project 3</h4>            
        </header>
    );
}