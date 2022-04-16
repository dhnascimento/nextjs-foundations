import { useState } from "react"

function Header(props) {
    return <h1>{props.title ?? "Default Title"}</h1>
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    )
}