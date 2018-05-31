import React from 'react';
import styled from 'styled-components';


const Elem = styled.div`
    padding-left: ${props =>
  props.spacingLeft ? props.spacingLeft + 'px' : 0};
    padding-right: ${props =>
  props.spacingRight ? props.spacingRight + 'px' : 0};
    text-align: center;
    js-display: inline-flex;
    display: inline-flex;
    cursor: ${props => (props.onClick ? 'pointer' : '')};
    align-items: center;
  `;

const Wrap = props => {

  return <Elem {...props} />;
};

export default Wrap;
