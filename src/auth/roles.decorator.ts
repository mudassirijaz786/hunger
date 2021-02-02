/* eslint-disable @typescript-eslint/ban-types */
import { SetMetadata } from '@nestjs/common';
import { CustomersRole } from '../customers/dto/customers.enum';

export const Roles = (
  role: CustomersRole[],
): ((target: object, key?: any, descriptor?: any) => any) =>
  SetMetadata('roles', [...role]);
