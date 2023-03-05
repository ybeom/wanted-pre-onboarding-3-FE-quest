import { Outlet } from 'react-router-dom';
import * as s from './AppStyle';
import { Header, Sidebar } from './pages/common/components';
import { pages } from './data/pages';

const App = () => {
  return (
    <s.Container>
      <Header />
      <s.Body>
        <s.Sidebar>
          <Sidebar pages={pages} />
        </s.Sidebar>
        <s.OutletWrapper>
          <Outlet />
        </s.OutletWrapper>
      </s.Body>
    </s.Container>
  );
};

export default App;
