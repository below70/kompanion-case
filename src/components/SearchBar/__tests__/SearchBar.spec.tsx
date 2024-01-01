import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';
import SearchBar from '../SearchBar';

describe('Login Screen', () => {
  const onSearch = jest.fn();

  beforeEach(() => {
    render(<SearchBar onSearch={onSearch} />);
  });

  it('login screen should render', () => {
    const placeholderText = screen.findByPlaceholderText('type to search');
    expect(placeholderText).not.toBeNull();
  });

  it('button should handle login', async () => {
    const backButton = await screen.findByTestId('search-button');
    fireEvent.press(backButton);
    expect(onSearch).toHaveBeenCalled();
  });
});
