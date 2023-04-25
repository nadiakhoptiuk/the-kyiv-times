import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeView from 'views/HomeView';
import SharedLayout from './SharedLayout';

// const HomeView = lazy(() => import('views/HomeView'));
const PostView = lazy(() => import('views/PostView'));

export const App = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />

          <Route path={`/posts/:postId`} element={<PostView />} />
        </Route>
      </Routes>
    </div>
  );
};
