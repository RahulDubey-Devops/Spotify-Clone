

import { Icon } from '@iconify/react';
import TextInput from '../Component/shared/TextInput';
import Password from '../Component/Password';
import { Link } from 'react-router-dom';
function Signup() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className='logo p-5 border-b border-solid border-gray-300 w-full flex justify-center'>
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                { /* Email and pass with button */}
                <div className='font-bold mb-4 text-2xl'>Sign up for free to start listening.</div>
                <TextInput label="Email address" placeholder="Enter you email" className="my-6" />
                <TextInput label="Confirm Email address" placeholder="Enter you email again." className="mb-6" />
                <Password label="Create Password" placeholder="Enter a strong password here" />
                <TextInput label="What sould we call you?" placeholder="Enter a profile name" className="my-6" />
                <div className='w-full flex items-center justify-center my-8'>
                    <button className='bg-green-400 font-semibold p-3 px-10 rounded-full '>
                       Sign up
                    </button>
                </div>
                <div className='w-full border border-solid border-gray-300'></div>

                <div className='font-semibold my-6 text-lg '>Already have an account?</div>
                <div className='border border-gray-500 text-gray-500 font-bold w-full flex items-center justify-center rounded-full py-4'>
                  <Link to="/login">  LOG IN INSTEAD</Link>
                </div>
            </div>
        </div>
    )
}
export default Signup;