import { Link, Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <nav className='navbar bg-base-100 shadow-sm'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>Form Submission</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <Link to='/' className='btn btn-ghost'>
              Contact
            </Link>
            <Link to='/register' className='btn btn-ghost'>
              Register
            </Link>
            <Link to='/search' className='btn btn-ghost'>
              Search
            </Link>
          </ul>
        </div>
      </nav>
      <main>
        <div className='container mx-auto p-4'>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
