import { useParams } from 'react-router-dom';
import { pages } from '../../data/pages';
import * as s from './styled';

const PageContent = () => {
  const { pageId } = useParams();
  const currentPage = pages.find((page) => page.id === Number(pageId));
  return (
    <s.Container>
      <s.Title>{currentPage?.content}</s.Title>
    </s.Container>
  );
};

export default PageContent;
