import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';
import {Login} from '../..';
import {LoginInput} from '../../../components';

describe('Login Screen', () => {
  let props: any;
  beforeAll(() => {
    props = {navigation: {navigate: jest.fn()}};
  });
  beforeEach(() => {
    render(<Login {...props} />);
  });

  it('login screen should render', () => {
    const loginText = screen.findByText('Login');
    expect(loginText).not.toBeNull();
  });

  it('LoginInput should render', () => {
    const loginInputs = screen.root.findAllByType(LoginInput);
    expect(loginInputs).toHaveLength(2);
  });

  it('button should handle login', async () => {
    const loginButton = await screen.findByTestId('login-button');
    fireEvent.press(loginButton);
    expect(fetch).toHaveBeenCalled();
  });
});
