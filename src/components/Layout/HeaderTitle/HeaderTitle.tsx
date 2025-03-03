import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

import { Icon } from '@components/Common';
import * as HeaderTitleStyled from './HeaderTitleStyle';

interface HeaderTitleProps {
  hasBackButton: boolean;
}

function HeaderTitle({ hasBackButton, children }: PropsWithChildren<HeaderTitleProps>) {
  const router = useRouter();

  const handleLinkBack = () => {
    const queries = router.pathname.split('/');
    queries.pop();
    const newQuery = queries.join('/');
    router.push(newQuery || '/');
  };

  return (
    <HeaderTitleStyled.TitleContainer>
      {hasBackButton && (
        <HeaderTitleStyled.BackButtonWrapper>
          <HeaderTitleStyled.BackButton onClick={handleLinkBack}>
            <Icon type="circle-arrow-left" />
          </HeaderTitleStyled.BackButton>
        </HeaderTitleStyled.BackButtonWrapper>
      )}
      <HeaderTitleStyled.TitleWrapper>{children}</HeaderTitleStyled.TitleWrapper>
    </HeaderTitleStyled.TitleContainer>
  );
}

export default HeaderTitle;
