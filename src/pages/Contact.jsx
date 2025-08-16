import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback, Instructions } from '../components';
import{sendContactForm} from  '../api/index'
import { useActionState } from 'react';
import { success } from 'zod/v4';
const Contact = () => {
  
 const handelsubmitiom = async(prestate, formData)=>{
  try{
    const firstname= formData.get('firstname')
    const lastname= formData.get('lastname')
    const email= formData.get('email')
    const message= formData.get('message')
    console.log(formData)
    await sendContactForm ({firstname,lastname,email,message}) 
    return {success:true,message:"successfull"}
    
  } catch{
    return 
  }

  }
  const [state,actionform,isPending]= useActionState(handelsubmitiom,{ success: false, error: null, message: null })
 
  return (
    <div className='flex flex-col items-center'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form action={actionform}>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
            <legend className='fieldset-legend'>Contact Us</legend>
            <label className='label'>First Name</label>
            <input className='input w-full' name='firstName' placeholder='First Name' />
            <label className='label'>Last Name</label>
            <input className='input w-full' name='lastName' placeholder='Last Name' />
            <label className='label'>Email</label>
            <input className='input w-full' name='email' placeholder='Email' />
            <label className='label'>Message</label>
            <textarea
              className='textarea w-full'
              name='message'
              placeholder='Your message'
              rows={4}
            />
            <button className='btn btn-neutral mt-4' disabled={isPending}>{isPending? 'sending...':'send'}</button>
          </fieldset>
        </form>
      </ErrorBoundary>
      <Instructions path='/contact.md' />
    </div>
  );
};

export default Contact;
