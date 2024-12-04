
import { Icon } from '@iconify/react';
import TextInput from '../Component/shared/TextInput';
import Password from '../Component/shared/Password';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper';
import { useCookies } from 'react-cookie';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    const [cookie,setCookie]=useCookies("");
    const login = async () => {
        const data = { email, password };
        // console.log(data)
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
        if (response && !response.err) {
            console.log(response);
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {
                path: '/', expires: date
            });
            alert("Sucess");
            navigate("/home")
        } else {
            alert("Failure")
            navigate("/login")
        }
    };


    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className='logo p-5 border-b border-solid border-gray-300 w-full flex justify-center'>
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                { /* Email and pass with button */}
                <div className='font-bold mb-4 '>To continue Login to Spotify.</div>
                <TextInput label="Email address or username" placeholder="Email address or username" className="my-6"
                    value={email}
                    setValue={setEmail}
                />
                <Password label="Password" placeholder="Password"  value={password}
                    setValue={setPassword} />
                <div className='w-full flex items-center justify-end my-8
                '
                >
                    <button className='bg-green-400 font-semibold p-3 px-10 rounded-full '
                        onClick={e => {
                            e.preventDefault();
                            login();
                        }}
                    >
                        LOG IN
                    </button>
                </div>
                <div className='w-full border border-solid border-gray-300'></div>

                <div className='font-semibold my-6 text-lg '>Don't have a account?</div>
                <div className='border border-gray-500 text-gray-500 font-bold w-full flex items-center justify-center rounded-full py-4'>
                    <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
                </div>
            </div>
        </div>
    )
}
export default Login;