import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserRole } from '../models/user.model';

const STORAGE_KEY = 'dashboard_current_user';

const mockUsers: User[] = [
  { id: '1', name: '管理员', email: 'admin@example.com', roles: ['admin'] },
  { id: '2', name: '运营小王', email: 'operation@example.com', roles: ['operation'] },
  { id: '3', name: '客服小李', email: 'service@example.com', roles: ['service'] },
  { id: '4', name: '财务小张', email: 'finance@example.com', roles: ['finance'] },
  { id: '5', name: '访客', email: 'viewer@example.com', roles: ['viewer'] }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable();

  constructor() {
    this.loadUser();
  }

  private loadUser(): void {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        this.userSubject.next(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Failed to load user');
    }
  }

  private saveUser(user: User | null): void {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      console.warn('Failed to save user');
    }
  }

  login(userId: string): User | null {
    const user = mockUsers.find(u => u.id === userId) || null;
    this.userSubject.next(user);
    this.saveUser(user);
    return user;
  }

  logout(): void {
    this.userSubject.next(null);
    this.saveUser(null);
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

  getRoles(): UserRole[] {
    return this.userSubject.value?.roles || [];
  }

  hasRole(role: UserRole | UserRole[]): boolean {
    const userRoles = this.getRoles();
    if (Array.isArray(role)) {
      return role.some(r => userRoles.includes(r));
    }
    return userRoles.includes(role);
  }

  hasAnyRole(roles: string[]): boolean {
    if (!roles || roles.length === 0) {
      return true;
    }
    return roles.some(r => this.getRoles().includes(r as UserRole));
  }

  getMockUsers(): User[] {
    return mockUsers;
  }
}
