import React from 'react';
import PropTypes from 'prop-types';
import {
  colors,
  fontSizes,
  fontFamilies,
  lineHeights,
  fontWeights,
} from '../../lib/styling';

const Text = ({
  children,
  fontSize,
  fontSizeKey,
  color,
  colorKey,
  fontWeight,
  fontWeightKey,
  fontFamily,
  lineHeight,
  width,
  textAlign,
  textTransform,
  className,
}) => (
  <div
    css={{
      fontSize: fontSizeKey ? fontSizes[fontSizeKey] : fontSize,
      color: colorKey ? colors[colorKey] : color,
      fontWeight: fontWeightKey ? fontWeights[fontWeightKey] : fontWeight,
      fontFamily,
      lineHeight: `${lineHeight}em`,
      width,
      textAlign,
      textTransform,
    }}
    className={className}
  >
    {children}
  </div>
);

Text.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  colorKey: PropTypes.string,
  fontSize: PropTypes.number,
  fontSizeKey: PropTypes.string,
  fontWeight: PropTypes.string,
  fontWeightKey: PropTypes.string,
  fontFamily: PropTypes.string,
  lineHeight: PropTypes.number,
  width: PropTypes.any,
  textAlign: PropTypes.string,
  textTransform: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  children: null,
  color: colors.text,
  colorKey: '',
  fontSize: fontSizes.a3,
  fontSizeKey: '',
  fontWeight: fontWeights.normal,
  fontWeightKey: '',
  fontFamily: fontFamilies.system,
  lineHeight: lineHeights.normal,
  width: undefined,
  textAlign: undefined,
  textTransform: 'none',
  className: '',
};

export default Text;
