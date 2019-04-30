import React, { useState } from 'react';
import { Global } from '@emotion/core';
import queryString from 'query-string';
import { bar, categories } from '../../../lib/bookmarks';
import domains from '../../../lib/domains';
import Text from '../../Text';
import styles from './styles';

const Home = () => {
  const [site, setSite] = useState('');
  const query = queryString.stringify({
    prefill: `Search ${site}`,
    focus: 'yes',
    site,
  });
  const url = `https://duckduckgo.com/search.html?${query}`;

  return (
    <div>
      <Global styles={styles.global} />
      <ul css={styles.barList}>
        {bar.map(({ title, url }) => (
          <li key={title} css={styles.barListItem}>
            <a href={url}>
              <Text>{title}</Text>
            </a>
          </li>
        ))}
      </ul>
      <iframe css={styles.search} src={url} frameBorder="0" />
      <ul css={styles.domainsList}>
        {domains.map(domain => (
          <li
            key={domain}
            css={styles.domainsListItem}
            onClick={() => setSite(domain)}
          >
            <Text fontSizeKey="a1">{domain}</Text>
          </li>
        ))}
      </ul>
      <ul css={styles.categoriesList}>
        {categories.map(({ title, items }) => (
          <li key={title} css={styles.categoriesListItem}>
            <Text fontSizeKey="a5">{title}</Text>
            <ul css={styles.categoriesItemList}>
              {items.map(({ title, url }) => (
                <li key={title}>
                  <a href={url}>
                    <Text css={styles.categoriesItemListItemText}>{title}</Text>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
