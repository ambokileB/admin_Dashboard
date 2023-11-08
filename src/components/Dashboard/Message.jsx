import React from 'react'
import './Message.css'

export function Message(){
    return(
        <div className="message_container">
            <div className="description">
                Message Descriptions
             </div>
                <form className="textField">
                 <textarea placeholder='Leave a message here' className='text-message'>
                    </textarea>   
                <input type="submit" value="Submit"/>
                </form>
        </div>
    )
}