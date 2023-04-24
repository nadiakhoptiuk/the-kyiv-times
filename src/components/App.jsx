import { Route, Routes } from 'react-router-dom';
import HomeView from 'views/HomeView/HomeView';
import PostView from 'views/PostView/PostView';
import SharedLayout from './SharedLayout/SharedLayout';

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
