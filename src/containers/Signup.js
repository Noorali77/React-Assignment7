import MenuAppBar from "../componenets/mui-components/MenuAppBar";
import Card from '../componenets/mui-components/Card'
import FormPropsTextFields from '../componenets/mui-components/FormPropsTextField';
import BasicButtons from '../componenets/mui-components/BasicButtons';
import {useState} from 'react'
import { useHistory } from "react-router";
import {auth, createUserWithEmailAndPassword,onAuthStateChanged} from '../config/Firebase'


function Signup(){
    let history = useHistory();

    let [name,setName] = useState('');
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    let [loading,setLoading] = useState(false)

    const signup =()=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            console.log(res)
            history.push('/')
            setLoading(false)
        }
        ).catch((err)=>{
            console.log(err);
            alert('Error')
            setLoading(false)

        })
    }
    




    return(
        <>
<MenuAppBar title='Sign up' leftSideTitle='/signup' rightSideTitle='/' secondTitle='Log in'  />

<Card>
  <h1 className='login'>Signin Form:</h1>
  <div className='text-field'>
  <FormPropsTextFields value={name} change={(e)=>setName(e.target.value)} label='Name' type='text'/>
  <FormPropsTextFields value={email} change={(e)=>setEmail(e.target.value)} label='Email' type='email'/>
  <FormPropsTextFields value={password} change={(e)=>setPassword(e.target.value)} label='Password' type='password'/> <br/>
  <BasicButtons click={signup} name={loading?'loading...': 'Signin'}/>



  </div>
    </Card>


        </>
    )
}

export default Signup;