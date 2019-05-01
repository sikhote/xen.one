import {
  spacing,
  colors,
  fontSizes,
  lineHeights,
  fontFamilies,
  fontWeights,
} from '../../../lib/styling';

const listStyles = {
  listStyle: 'none',
  '& > li': {
    paddingLeft: 30,
    textIndent: -20,
  },
  '& > li:before': {
    content: "'•'",
    paddingRight: 12,
  },
};

export default {
  global: {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    body: {
      fontFamily: fontFamilies.system,
      fontWeight: fontWeights.normal,
      fontSize: fontSizes.a3,
      lineHeight: lineHeights.normal,
      color: colors.text,
      background: colors.background,
      padding: spacing.a6,
    },
    a: {
      color: colors.text,
    },
  },
  barList: {
    paddingBottom: spacing.a6,
  },
  barListItem: {
    display: 'inline-block',
    marginRight: spacing.a4,
  },
  search: {
    width: 408,
    height: 40,
  },
  weather: {
    width: 850,
    height: 355,
  },
  domainsList: {
    paddingBottom: spacing.a6,
  },
  domainsListItem: {
    display: 'inline-block',
    marginRight: spacing.a4,
    cursor: 'pointer',
  },
  categoriesList: {
    listStyle: 'none',
    columns: '400px',
  },
  categoriesListItem: {
    breakInside: 'avoid',
    paddingBottom: spacing.a6,
  },
  categoriesItemList: {
    ...listStyles,
  },
  categoriesItemListItemText: {
    display: 'inline',
  },
};
