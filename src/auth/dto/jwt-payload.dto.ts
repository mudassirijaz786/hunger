import { CustomersRole } from 'src/customers/customers.enum';

export interface JwtPayload {
  id: number;
  username: string;
  email: string;
  role: CustomersRole;
}
