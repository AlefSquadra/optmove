// src/auth/authService.ts
export type User = {
  id: number;
  name: string;
  role: 'admin' | 'user';
};

export const authService = {
  login: async (username: string, password: string) => {
    // Simulação de login (poderia ser um fetch para uma API real)
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Admin', role: 'admin' }));
      return { id: 1, name: 'Admin', role: 'admin' };
    }
    throw new Error('Credenciais inválidas');
  },
  
  logout: () => {
    localStorage.removeItem('user');
  },

  getUser: (): User | null => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};
