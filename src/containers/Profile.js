import PrimarySearchAppBar from "../componenets/mui-components/PrimarySearchAppBar";
import { getAuth, signOut } from "firebase/auth";
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Timeline from "../componenets/Timeline";


function Profile(){
    let auth = getAuth();
    let history = useHistory();
    let signout =()=>{

    signOut(auth).then((res) => {
        history.push('/')
      console.log(res)
    }).catch((error) => {
    console.log(error)
    alert(error)
    });
}

    return(
        <>
          <PrimarySearchAppBar signout={signout}/>


          <Timeline/>

        </>
    )
}

export default Profile;