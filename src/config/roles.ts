export const ROLES = {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  STUDENT: 'STUDENT',
} as const;

export type RoleEnum = (typeof ROLES)[keyof typeof ROLES];
