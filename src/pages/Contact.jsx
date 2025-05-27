import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components';

const Contact = () => {
  return (
    <div className='flex flex-col items-center'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form>
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
            <button className='btn btn-neutral mt-4'>Send</button>
          </fieldset>
        </form>
      </ErrorBoundary>
      <div className='mockup-code mt-5'>
        <pre data-prefix='1'>
          <code>- Import sendContactForm from 'src/api/index.js';</code>
        </pre>
        <pre data-prefix='2'>
          <code>- Create an action for the form</code>
        </pre>
        <pre data-prefix='3'>
          <code>- Within the action, pass the form fields to sendContactForm</code>
        </pre>
        <pre data-prefix='4'>
          <code>- Disable the button and show "Sending" while the action is being executed</code>
        </pre>
      </div>
    </div>
  );
};

export default Contact;
