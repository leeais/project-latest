import { ROLES } from '@/config/roles';
import z from 'zod';

export const loginSchema = z.object({
  username: z.string().min(6),
  password: z.string().min(4),
  remember: z.boolean().optional(),
});

export type LoginPayloadType = z.infer<typeof loginSchema>;

export const defaultLoginValue: LoginPayloadType = {
  username: '2100878',
  password: 'pass',
  remember: true,
};

export const MOCK_USER: User = {
  id: '1',
  username: 'longnd',
  email: 'longnd@gmail.com',
  firstName: 'Long',
  lastName: 'Nguyen Dang',
  avatarUrl: 'http://localhost:5137/images/default-avatar.png',
  updatedAt: new Date(),
  createdAt: new Date(),
  isActive: true,
  roles: [ROLES.ADMIN, ROLES.STAFF, ROLES.STUDENT],
};
