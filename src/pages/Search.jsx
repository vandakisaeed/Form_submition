// import { Instructions, SearchForm, SearchResults } from '../components';
// import { searchProducts } from '../api/index.js';
// import {use, useActionState } from 'react';

// const productsPromise = searchProducts();
// const Search = () => {
  
//   const data=use (productsPromise)
//   const products=(data.products)
//   console.log(products)

//   const handelsubmition =(prevState,formData)=>{
//     const Category= formData.get('Category')
//     const minPrice = formData.get('minPrice')
//     const maxPrice = formData.get('maxPrice')
//     const Description= formData.get('Description')
//     console.log(Category)
//     console.log(minPrice)
//     console.log(maxPrice)
//     console.log(Description)

//       const result = products.map((el)=>{
//       if ((el.Category===Category) && (el.Description===Description) && (el.price<= maxPrice && el.price >=minPrice))
//         return     {product:el.Category,dicribe: el.Description,price: el.price}    })
//     return result
//   }

//   const resultdata=()=>(handelsubmition())

//   const [state,actionform,isPending]= useActionState(handelsubmition,{
//     products: products,error: null,})
  
//   return (
//     <div className='flex flex-col items-center'>
//       <SearchForm action={actionform}/>
//       <SearchResults productsPromise={resultdata} />
//       <Instructions path='/search.md' />
//     </div>
//   );
// };

// export default Search;



import { ErrorFallback, Instructions, SearchForm, SearchResults } from '../components';
import { searchProducts } from '../api/index.js';
import { use, useActionState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const productsPromise = searchProducts();

const Search = () => {
  // initial load of products

    const data = use(productsPromise)
    const products = data.products
  useEffect(()=>{

  },[])


  const handleSubmission = async (prevState, formData) => {
    try {
      const category = formData.get('category');
      const minPrice = Number(formData.get('minPrice'));
      const maxPrice = Number(formData.get('maxPrice'));
      const description = formData.get('query');

      // filter products
      const filtered = products.filter((el) => {
        return (
          (!category || el.category.toLowerCase().includes(category.toLowerCase())) &&
          (!description || el.description.toLowerCase().includes(description.toLowerCase())) &&
          (!minPrice || el.price >= minPrice) &&
          (!maxPrice || el.price <= maxPrice)
        );
      });
      
      return { products: filtered, error: null };
    } catch (e) {
      return { products: [], error: 'Something went wrong' };
    }
  };


  const [state, actionForm, isPending] = useActionState(handleSubmission, {
    products,
    error: null,
  });
  console.log(state)

  return (
    <div className="flex flex-col items-center">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SearchForm action={actionForm} />

      {isPending && <p>Loading...</p>}
      {state.error && <p className="text-red-500">{state.error}</p>}

      {/* ✅ now pass plain array */}
      <SearchResults products={state.products} />

      <Instructions path="/search.md" />
      </ErrorBoundary>
    </div>
  );
};

export default Search;
