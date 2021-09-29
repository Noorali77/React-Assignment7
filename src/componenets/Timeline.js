import './style.css'
import first from '../assets/images/1.jpg'
import second from '../assets/images/2.jpg'

function Timeline(){
    return(
   <>

<div className="container-fluid mt-5 mb-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="d-flex justify-content-between p-2 px-3">
                <div className="d-flex flex-row align-items-center"> <img src={first} width={50} className="rounded-circle" />
                  <div className="d-flex flex-column ml-2"> <span className="font-weight-bold">Mama</span> <small className="text-primary">Singulane,Lyari</small> </div>
                </div>
                <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">40 mins</small> <i className="fa fa-ellipsis-h" /> </div>
              </div> <img src={first} className="img-fluid" />
              <div className="p-2">
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row icons d-flex align-items-center"> <i className="fa fa-heart" /> <i className="fa fa-smile-o ml-2" /> </div>
                  <div className="d-flex flex-row muted-color"> <span>2 comments</span> <span className="ml-2">Share</span> </div>
                </div>
                <hr />
                <div className="comments">
                  <div className="d-flex flex-row mb-2"> <img src={second} width={40} className="rounded-image" />
                    <div className="d-flex flex-column ml-2"> <span className="name">Mama2</span> <small className="comment-text">Behtereen</small>
                      <div className="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>10 mins</small> </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row mb-2"> <img src={second} width={40} className="rounded-image" />
                    <div className="d-flex flex-column ml-2"> <span className="name">Mama3</span> <small className="comment-text">Baaz vsh</small>
                      <div className="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>5 mins</small> </div>
                    </div>
                  </div>
                  <div className="comment-input"> <input type="text" className="form-control" />
                    <div className="fonts"> <i className="fa fa-camera" /> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   </>
    );
}

export default Timeline;