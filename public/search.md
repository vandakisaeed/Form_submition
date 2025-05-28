Right now, the promise returned by searchProducts is being passed down to the
SearchResults component as a prop to show some initial data.
In this component (`Search`):

1. - Create an `action` that will take the `formData`
2. - Pass that `action` to `useActionState` to compose it
3. - Pass the `productsPromise` result as the initial state value for `useActionState` (you
     might need the `use` hook to read the value of the promise)
4. - Modify `SearchResults` to receive the `products` as prop directly
5. - Connect your form to the action returned by `useActionState`, remember that when
     composing actions with this hook, your action now takes two parameters!
6. - Modify your `action` so it calls `searchProducts` with the right filters and returns an object,
     the state, with a key of `products` with the array of products found, or a key of `error` if any
7. - Use the errors from the action state to show feedback to the user
8. - Control the form inputs with local state to avoid resetting after submission
