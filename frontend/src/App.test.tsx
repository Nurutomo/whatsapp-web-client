import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SocketProvider } from './context/socketContext';
import { UsersProvider } from './context/usersContext';
import Home from './pages/Home';

test('renders home page with end-to-end encrypted text', () => {
    render(
        <SocketProvider>
            <UsersProvider>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </UsersProvider>
        </SocketProvider>
    );
    const encryptedText = screen.getByText(/end-to-end encrypted/i);
    expect(encryptedText).toBeInTheDocument();
});
