import '../App.css'
import { useState } from 'react'

function Top100Request() {
    const [userNumber, setUserNumber] = useState(1)
    const [billboardRanking, setBillboardRanking] = useState('The album will appear here!')

    const sendRankingRequest = async () => {
        const response = await fetch('/billboard', {
            method: 'POST',
            body: JSON.stringify({number: userNumber}),
            headers: {'Content-Type':'application/json'}
        })
        const responseContent = JSON.parse(await new Response(response.body).text())
        if (response.status === 201) 
        {
            setBillboardRanking(responseContent)
        }
        else 
        {
            setBillboardRanking("Error getting ranking.")
        } 
    }
    
    return(
    <div>
        <div><h1>Billboard Top 100 Albums of The 21st Century</h1></div>
        <div><h3>Enter a position on the top 100 (1 to 100) and recieve the album at that position on the leader boards!</h3>
        <h3> Enter a request in the form below, submit the request, and recieve the album at that ranking position. </h3></div>
        <div>
            <form>
                <fieldset className="form">
                    <legend>Billboard Ranking Form</legend>
                    <label>Enter a number between 1 and 100: 
                        <input type="text" value={userNumber} onChange={e => setUserNumber(e.target.value)}/>
                    </label>
                </fieldset>
            </form>
        </div>
        <div>
        <button onClick={sendRankingRequest}>Get The Album At This Ranking</button>
        </div>
        <div>
            <h5>#{userNumber} on the Billboard Top 100 Albums Of The 21st Century is:</h5>
            <p>{billboardRanking}</p>
        </div>
    </div>
    )
}

export default Top100Request