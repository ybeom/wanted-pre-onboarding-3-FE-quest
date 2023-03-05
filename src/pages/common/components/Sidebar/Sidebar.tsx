import * as s from './styled';
import { Page } from '@/data/pages';

interface SidebarProps {
  pages: Page[];
}

const Sidebar: React.FC<SidebarProps> = ({ pages }) => {
  return (
    <s.Nav>
      <s.NavContainer>
        {pages.map((page) => (
          <s.NavItem key={page.id}>
            <s.Link to={`/pages/${page.id}`}>Page {page.name}</s.Link>
          </s.NavItem>
        ))}
      </s.NavContainer>
    </s.Nav>
  );
};

export default Sidebar;
