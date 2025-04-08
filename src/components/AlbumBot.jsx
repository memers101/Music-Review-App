import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function albumBot() {
    const [userMessage, setUserMessage] = useState('Replace this line with your request!')
    const [chatResponse, setChatResponse] = useState('Chat response will replace this line!')
    
    const sendChatRequest = async () => {
        const response = await fetch('/albumbot', {
            method: 'POST',
            body: JSON.stringify({message: userMessage}),
            headers: {'Content-Type':'application/json'}
        })
        const responseContent = JSON.parse(await new Response(response.body).text())
        if (response.status === 201) 
        {
            setChatResponse(responseContent)
        }
        else 
        {
            setChatResponse("Error completing chat request")
        } 
    }
    
    return(
    <div>
        <div><h1>AlbumBot</h1></div>
        <div><h3>Ask AlbumBot questions about your favorite albums, artists, etc. and he will respond with answers!</h3>
        <h3> Enter a request in the form below, submit the request, and recieve a response from AlbumBot! </h3></div>
        <div>
            <form>
                <fieldset className="form">
                    <legend>AlbumBot Chat</legend>
                    <label>Enter your chat request: 
                        <input className="albumBot" type="text" value={userMessage} onChange={e => setUserMessage(e.target.value)}/>
                    </label>
                </fieldset>
            </form>
        </div>
        <div>
        <button onClick={sendChatRequest}>Send Chat Request</button>
        </div>
        <div>
            <h5>Response from AlbumBot:</h5>
            <p>{chatResponse}</p>
        </div>
    </div>
    )
}

export default albumBot