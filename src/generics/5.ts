export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription: Record<string, string> = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
