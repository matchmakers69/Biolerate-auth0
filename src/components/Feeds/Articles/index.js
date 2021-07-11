import React, { useState, useEffect, useRef } from 'react';
import { fetchArticles } from 'api/article';
import { Styled as StyledGrid } from 'styles/grid.styled';
import _slice from 'lodash/slice';
import _concat from 'lodash/concat';
import { H2 } from 'styles/typography.styled';
import { LIMIT_QUANTITY } from 'utils/limit';
import { ArticleList, LoadMoreWrapper } from './Articles.styled';
import { H3 } from 'styles/typography.styled';

const Articles = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [fullArticlesList, setFullArticlesList] = useState([]);
  const componentIsMounted = useRef(true);
  const [articlesIndex, setArticlesIndex] = useState(LIMIT_QUANTITY);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        /**
         * @componentIsMounted flag will prevent from memory leaking when routes will change
         */
        if (componentIsMounted.current) {
          const response = await fetchArticles();

          const sortedArticles = [...response]
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .slice(0, LIMIT_QUANTITY);

          setArticles(sortedArticles);
          setFullArticlesList(response);

          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchFeeds();

    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  const loadMoreArticles = () => {
    const newIndex = articlesIndex + LIMIT_QUANTITY;
    const newShowMore = newIndex < fullArticlesList.length - 1;
    const newList = _concat(articles, _slice(fullArticlesList, articlesIndex, newIndex));
    setArticlesIndex(newIndex);
    setArticles(newList);
    setShowMore(newShowMore);
  };

  if (loading) return <span>Is loading...</span>;
  return (
    <StyledGrid.SubPageContent>
      <H2>Articles</H2>
      <ArticleList>
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <div>
                <H3>{article.title}</H3>
              </div>
            </li>
          );
        })}
      </ArticleList>
      {showMore && (
        <LoadMoreWrapper>
          <button className="load-more-button" type="button" onClick={loadMoreArticles}>
            {' '}
            Load More{' '}
          </button>
        </LoadMoreWrapper>
      )}
    </StyledGrid.SubPageContent>
  );
};

Articles.propTypes = {};

export default Articles;
