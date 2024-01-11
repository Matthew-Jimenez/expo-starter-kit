// src/services/AuthenticationService.ts
import { makeAutoObservable } from "mobx";

interface User {
  username: string;
  email: string;
}

class AuthenticationService {
  public loading: boolean = false;
  public user: User | null = null; // You can define the User type according to your needs.
  public error: string | null = null;
  public hasInitialized: boolean = false;

  // Constructor or any other methods you need
  constructor() {
    makeAutoObservable(this);

    this.initialize();
  }

  async login(username: string, password: string): Promise<void> {
    // Implement your login logic here
  }

  async logout(): Promise<void> {
    // Implement your logout logic here
  }

  async initialize(): Promise<void> {
    // Implement initialization logic (e.g., check if the user is already authenticated)

    this.hasInitialized = true;
  }

  public get isAuthenticated(): boolean {
    return !!this.user;
  }

  // Other utility methods and getters/setters if needed
}

export default new AuthenticationService();
