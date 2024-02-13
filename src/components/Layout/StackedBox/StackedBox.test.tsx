import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import StackedBox from '.';

describe('StackedBox', () => {
  it('Renders the outline variant box', () => {
    render(<StackedBox variant="outlined">foo</StackedBox>);

    expect(screen.getByText('foo')).toHaveClass(/outlined/);
  });

  it('Renders the elevated variant box', () => {
    render(<StackedBox variant="elevated">foo</StackedBox>);

    expect(screen.getByText('foo')).toHaveClass(/elevated/);
  });

  it('Renders the filled variant box', () => {
    render(<StackedBox variant="filled">foo</StackedBox>);

    expect(screen.getByText('foo')).toHaveClass(/filled/);
  });
});
