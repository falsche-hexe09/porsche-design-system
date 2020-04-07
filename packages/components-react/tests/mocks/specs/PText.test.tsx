import React from 'react';
import { render } from '@testing-library/react';
import { PText } from '../../../projects/components-wrapper/src/lib/components';

describe('PText', () => {
  it('should render PText children', () => {
    const {getByText} = render(<PText>Text</PText>);
    expect(getByText('Text')).toBeDefined();
  });
});
