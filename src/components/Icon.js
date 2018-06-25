import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import Wrapper from "../styled/Wrapper";

import { ICONS } from "../svg";


class Icon extends Component {
  constructor(props) {
    super(props);
    this.displayName = "Icon";
  }

  render() {
    const {
      onClick,
      type,
      disabled,
      spacingLeft,
      spacingRight,
      size,
      ...otherProps
    } = this.props;

    if (!type || !type.length) return null;

    const Icon = ICONS[type];

    if (!Icon) return null;

    return (
      <Wrapper
        onClick={onClick}
        spacingLeft={spacingLeft}
        spacingRight={spacingRight}
        disabled={disabled}
      >
        <Icon
          width={size ? size + "px" : undefined}
          height={size ? size + "px" : undefined}
          {...otherProps}
        />
      </Wrapper>
    );
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
  spacingLeft: PropTypes.number,
  spacingRight: PropTypes.number
};

Icon.defaultProps = {
  type: ""
};

export default withTheme(Icon);
