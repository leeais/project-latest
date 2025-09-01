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
