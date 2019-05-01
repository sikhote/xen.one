import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/core';
import queryString from 'query-string';
import { get } from 'lodash';
import axios from 'axios';
import { bar, categories } from '../../../lib/bookmarks';
import domains from '../../../lib/domains';
import Text from '../../Text';
import { colors, fontFamilies } from '../../../lib/styling';
import styles from './styles';

const setWeatherUrl = (lat, lon) => {
  const weatherQuery = queryString.stringify({
    color: colors.text,
    fontFamily: fontFamilies.system,
    units: 'ca',
    textColor: colors.text,
    bgColor: colors.a6,
    transparency: false,
    currentDetailsOption: true,
  });

  window.weatherUrl = `https://darksky.net/widget/graph-bar/${lat},${lon}/ca12/en.js?${weatherQuery}`;
};

const Home = () => {
  const [hasLocation, setHasLocation] = useState(false);
  const [site, setSite] = useState('');
  const searchQuery = queryString.stringify({
    prefill: `Search ${site}`,
    focus: 'yes',
    site,
  });
  const searchUrl = `https://duckduckgo.com/search.html?${searchQuery}`;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      axios.get('https://ipapi.co/json/').then(res => {
        const lat = get(res, 'data.latitude');
        const lon = get(res, 'data.longitude');

        setWeatherUrl(lat, lon);
        setHasLocation(true);
      });
    }
  }, []);

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
      <iframe css={styles.search} src={searchUrl} frameBorder="0" />
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
      {hasLocation && (
        <iframe
          css={styles.weather}
          src="/static/weather.html"
          frameBorder="0"
        />
      )}
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
