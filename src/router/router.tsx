import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { PageContent } from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/pages/:pageId" element={<PageContent />} />
      </Route>
    </Routes>
  );
};

export default Router;
