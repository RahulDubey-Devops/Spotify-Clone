
import { Icon } from '@iconify/react';
import TextInput from '../Component/shared/TextInput';
function Login() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className='logo p-5 border-b border-solid border-gray-300 w-full flex justify-center'>
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                { /* Email and pass with button */}
                <div className='font-bold mb-10 '>To continue Login to Spotify.</div>
                <TextInput label="Email address or username" placeholder="Email address or username"/>
            </div>
        </div>
    )
}
export default Login;