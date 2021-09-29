import './chat.css'
import send from '../assets/images/send.png'
function Chat (){

    return(
      <>
 <div>
        <div className="container">
          <div className="chat">
            <div className="chat-header">
              <div className="profile">
                <div className="left">
             
                  <h2>Mama</h2>
                  <span>last seen 2:45 am</span>
                </div>
                <div className="right">
               
                </div>
              </div>
            </div>
            <div className="chat-box">
              <div className="chat-r">
                <div className="sp" />
                <div className="mess mess-r">
                 <p>
                    Hi, Maaam
                  </p>
                  <div className="check">
                    <span>4:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="chat-l">
                <div className="mess">
                  <p>
                    Lorem, ipsum dolor.
                  </p>
                  <div className="check">
                    <span>4:02 PM</span>
                  </div>
                </div>
                <div className="sp" />
              </div>
              <div className="chat-r">
                <div className="sp" />
                <div className="mess mess-r">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio!
                  </p>
                  <div className="check">
                    <span>4:04 PM</span>
                  </div>
                </div>
              </div>
              <div className="chat-l">
                <div className="mess">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <div className="check">
                    <span>4:06 PM</span>
                  </div>
                </div>
                <div className="sp" />
              </div>
              <div className="chat-r">
                <div className="sp" />
                <div className="mess mess-r">
                  <p>
                 Lorem, ipsum dolor.
                  </p>
                  <div className="check">
                    <span>4:10 PM</span>
                  </div>
                </div>
              </div>
              <div className="chat-l">
                <div className="mess">
                  <p>
                    Lorem ipsum dolor, doloribus facilis necessitatibus eaque aliquid.
                  </p>
                  <div className="check">
                    <span>4:15 PM</span>
                  </div>
                </div>
                <div className="sp" />
              </div>
              <div className="chat-r">
                <div className="sp" />
               
              </div>
              <div className="chat-l">
                <div className="sp" />
              </div>
              <div className="chat-r">
                <div className="sp" />
              
              </div>
            </div>
            <div className="chat-footer">
              {/* <img src="img/emo.png" className="emo" /> */}
              <textarea placeholder="Type a message" defaultValue={""} />
              <div className="icons">
                {/* <img src="img/attach file.png" /> */}
                {/* <img src="img/camera.png" /> */}
              </div>
              <img src={send} className="mic" />
            </div>
          </div>
        </div>
      </div>


      </>  
    );

}

export default Chat;