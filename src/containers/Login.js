import MenuAppBar from '../componenets/mui-components/MenuAppBar'
import Card from '../componenets/mui-components/Card'
import FormPropsTextFields from '../componenets/mui-components/FormPropsTextField';
import BasicButtons from '../componenets/mui-components/BasicButtons';
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { signInWithEmailAndPassword , auth } from '../config/Firebase';

function Login(){
  let[loading,setLoading] = useState(false)
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
    let history = useHistory();

  const login =()=>{
    setLoading(true)

    signInWithEmailAndPassword(auth,email,password)
    .then((res)=>{
    setLoading(false)

      console.log(res)
      history.push('/profile')
    }).catch((err)=>{
      alert('err')
      console.log(err)
    setLoading(false)

    })

   

    }
    
  
    return(
        <>

<MenuAppBar title='Login' leftSideTitle='/' rightSideTitle='/signup' secondTitle='Sign in'  />
<Card>
  <h1 className='login'>Login Form:</h1>
  <div className='text-field'>
  <FormPropsTextFields value={email} change={(e)=>setEmail(e.target.value)}  label='Email' type='email'/>
  <FormPropsTextFields value={password} change={(e)=>setPassword(e.target.value)} label='Password' type='password'/> <br/>
  <BasicButtons click={login} name={loading?'Loading...':'login'}/>



  </div>
    </Card>



    </>

    );

}

export default Login;