export default function Meme(){
    return (
        <main>
            <form className="form">
                <input type='text' className="input--form" placeholder="Top Text"/>
                <input type='text' className="input--form" placeholder="Bottom Text"/>
                <button className="form--button">Get a new meme image  🖼</button>
            </form>
        </main>
    )
}