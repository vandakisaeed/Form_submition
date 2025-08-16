import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback, Instructions } from '../components';
import {registerNewsletter} from '../api/index'
import  {useFormStatus} from 'react-dom'
import { useFormAction } from 'react-router';
import { useActionState, useState, useEffect } from 'react';

const Register = () => {
  
  const {Pending}=useFormStatus()


  async function handleSubmit(prevState, formData) {
    const formObject = Object.fromEntries(formData.entries());
    const email = formObject.email;

    // Call your API function
    try {
      await registerNewsletter({ email });
      return { success: true, message: "Thanks for registering!" };
    } catch (error) {
      return { success: false, message: "Something went wrong." };
    }
  }


  //const [formData , setformData]= useState({});
  // const [{email} , setformData]= useState({
  //   email: '',
  // });

  

const [state ,formAction,isPending]=useActionState(handleSubmit,{
    success: null,
    message: "",
})

  // const handleChange= (e)=>{
    
  //   setformData((prev)=>({
  //   ...prev,
  //   [e.target.name]:e.target.value,
  //   }))
  // }

  // useEffect(() => {
  //   if (state.succes) {
  //     console.log(state);
  //     setformData({
  //       firstName: '',
  //       lastName: '',
  //       email: '',
  //       message: '',
  //     });
  //   }
  // }, [state]);

  return (
    <div className='flex flex-col items-center'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto"
        action={formAction}>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
            <legend className='fieldset-legend'>Register to our newsletter</legend>
            <label className='label'>Email</label>
            <input className='input w-full' name='email' placeholder='Email' />
            <button className='btn btn-neutral mt-4' >{isPending ? 'Submitting...' : 'Submit'}</button>
          </fieldset>
        </form>
        {state.message && (
          <p
            className={`mt-2 ${
              state.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {state.message}
          </p>
        )}
      </ErrorBoundary>
      <Instructions path='/register.md' />
    </div>
  );
};

export default Register;
