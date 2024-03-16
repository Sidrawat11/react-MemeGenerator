import {useState, useEffect} from 'react';

export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    });

    function getNewMeme(){
        const randImage = Math.floor(Math.random() * allMemes.length);
        const rand_url = allMemes[randImage].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            url: rand_url
        }));
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input type='text' 
                    className="input--form" 
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input type='text' 
                    className="input--form" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getNewMeme}
                >Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.url} alt='' className='meme--image' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}