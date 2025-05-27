import { SearchForm, SearchResults } from '../components';
import { searchProducts } from '../api/index.js';

const productsPromise = searchProducts();

const Search = () => {
  return (
    <div className='flex flex-col items-center'>
      <SearchForm />
      <SearchResults productsPromise={productsPromise} />
      <div className='mockup-code mt-5'>
        <pre>
          <code>
            Right now, the promise returned by searchProducts is being passed down to the
            SearchResults component as a prop to show some initial data.
          </code>
        </pre>
        <pre>
          <code>In this component (Search):</code>
        </pre>
        <pre data-prefix='1'>
          <code>- Create an action that will take the formData</code>
        </pre>
        <pre data-prefix='2'>
          <code>- Pass that action to useActionState to compose it</code>
        </pre>
        <pre data-prefix='3'>
          <code>
            - Pass the productsPromise result as the initial state value for useActionState (you
            might need the use hook to read the value of the promise)
          </code>
        </pre>
        <pre data-prefix='4'>
          <code>
            - Connect your form to the action returned by useActionState, remember that when
            composing actions with this hooks, your action now takes two parameters!
          </code>
        </pre>
        <pre data-prefix='5'>
          <code>
            - Modify your action so it returns and object, the state, with a key of produdcts with
            the array of products found, or a key or errors if any
          </code>
        </pre>
        <pre data-prefix='6'>
          <code>- Use the errors from the action state to show feedback to the user.</code>
        </pre>
        <pre data-prefix='7'>
          <code>- Modify SearchResults to receive the products as prop directly</code>
        </pre>
      </div>
    </div>
  );
};

export default Search;
