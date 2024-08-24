import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const SharedLayout = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* <Header /> */}
      <main>
        <Suspense>
          <Outlet />
          {/* <ScrollToTop /> */}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
