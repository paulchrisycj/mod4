import { useState } from "react"

function Assignment(){
    const [name, setName] = useState("")
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")

    const btnClick = () => {
        alert("Thank you " + name + "!")
    }

    return(
        <div>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                <br />
                <input type="number" max={5} min={1} onChange={(e) => setRating(e.target.value)} placeholder="Rating" style={{width: 70}}/>
                <br />
                <input type="textbox"  onChange={(e) => setComment(e.target.value)} placeholder="Comment" style={{height: 200, width: 200}} />
                <br />
                <input type="submit" onClick={btnClick} />
            </form>
        </div>
    )
}

export default Assignment