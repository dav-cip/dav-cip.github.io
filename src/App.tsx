import { Suspense, type JSX } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './route/appRoutes.tsx';

import Fallback from './components/fallback/Fallback';

export default function App(): JSX.Element {
  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}