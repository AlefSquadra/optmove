import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { LoginPage } from './LoginPage';

const mockHandleLogin = vi.fn();

vi.mock('@shared/hooks/useAuth', () => ({
  useAuth: () => ({
    handleDefaultLogin: mockHandleLogin,
  }),
}));

describe('LoginPage', () => {
  it('submits credentials', async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    const usernameInput = screen.getByLabelText(/usuário/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    await user.type(usernameInput, 'john');
    await user.type(passwordInput, 'doe');
    await user.click(loginButton);

    expect(mockHandleLogin).toHaveBeenCalledWith({ username: 'john', password: 'doe' });
  });
});
