import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components';

const Register = () => {
  return (
    <div className='flex flex-col items-center'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
            <legend className='fieldset-legend'>Register to our newsletter</legend>
            <label className='label'>Email</label>
            <input className='input w-full' name='email' placeholder='Email' />
            <button className='btn btn-neutral mt-4'>Register!</button>
          </fieldset>
        </form>
      </ErrorBoundary>
      <div className='mockup-code mt-5'>
        <pre data-prefix='1'>
          <code>- Import registerNewsletter from 'src/api/index.js';</code>
        </pre>
        <pre data-prefix='2'>
          <code>- Create an action for the form</code>
        </pre>
        <pre data-prefix='3'>
          <code>- Within the action, pass the email to registerNewsletter</code>
        </pre>
        <pre data-prefix='4'>
          <code>- Make the submit button show the status of the action with useFormStatus</code>
        </pre>
      </div>
    </div>
  );
};

export default Register;
