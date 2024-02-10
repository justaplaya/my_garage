import { z, ZodType } from 'zod';
import { Inputs } from './types';

export const reportIssueSchema: ZodType<Inputs> = z.object({
  issueName: z
    .string({
      required_error: 'This field is required',
    })
    .min(5, { message: 'Issue name must be at least 5 characters long' })
    .max(20, { message: 'Issue name must be at most 20 characters long' })
    .includes('zbs', { message: 'Issue name must contain zbs' }),
  issueDescription: z
    .string()
    .regex(/^(\w+\s+){4}\w+\r?\n(\w+\s+){6}\w+\r?\n(\w+\s+){4}\w+$/, 'Description must be 5-7-5 haiku'),
});
