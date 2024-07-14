import { useState } from 'react';
import classnames from 'classnames';
import { bar, categories } from 'lib/bookmarks';
import domains from 'lib/domains';

const styles = {};

const Home = () => {
  const [site, setSite] = useState('');
  const searchQuery = new URLSearchParams({
    prefill: `Search ${site}`,
    focus: 'yes',
    site,
  }).toString();
  const searchUrl = `https://duckduckgo.com/search.html?${searchQuery}`;

  return (
    <main>
      <section className="bar">
        <ul>
          {bar.map(({ title, url }) => (
            <li key={title} css={styles.barListItem}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="search">
        <iframe src={searchUrl} frameBorder="0" />
        <ul>
          {domains.map((domain) => (
            <li
              key={domain}
              onClick={() => setSite(domain === 'all' ? '' : domain)}
              className={classnames({
                active: domain === 'all' ? site === '' : domain === site,
              })}
            >
              {domain}
            </li>
          ))}
        </ul>
      </section>
      <section className="all">
        <ul>
          {categories.map(({ title, items }) => (
            <li key={title}>
              <h2>{title}</h2>
              <ul>
                {items.map(({ title, url }) => (
                  <li key={title}>
                    <a href={url}>{title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
