import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

import Icon from '../components/Icon';
import {ICONS} from '../svg';

console.log(Icon)

const elements = storiesOf('Icon', module);

elements.addDecorator(withKnobs);


elements.add('Icon with size', () => {
  const size = number('size', 16);
  return <Icon spacingRight={16} type='add-blank' size={size} />
});


elements.add('Icon with spacing right/left', () => {
  const spacingLeft = number('spacingLeft', 12);
  const spacingRight = number('spacingRight', 12);
  return <Icon type='add-blank' spacingLeft={spacingLeft} spacingRight={spacingRight} />;
});


Object.keys(ICONS).forEach((key, i) => {
  
  return elements.add(`Icon '${key}'`, () => {
    return <Icon type={key}/>;
  });

});

