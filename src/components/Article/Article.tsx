import React from 'react';
import { MainHeader } from '../MainHeader/MainHeader';
import { Watch } from '../Watch/Watch';
import { ArticleStyled } from './Article.styled';

export const Article = () => (
  <ArticleStyled>
    <MainHeader />

    <Watch />
  </ArticleStyled>
);
