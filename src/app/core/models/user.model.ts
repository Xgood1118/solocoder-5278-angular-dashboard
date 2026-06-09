export type UserRole = 'admin' | 'operation' | 'service' | 'finance' | 'viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  roles: UserRole[];
}
