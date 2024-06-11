import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Loading } from '@components/Loading';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';

describe('Loading Component', () => {
  it('should render ActivityIndicator', () => {
    render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );
  });
  it('should render ActivityIndicator with test Id', () => {
    render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );
    const activityIndicator = screen.queryByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  });
});