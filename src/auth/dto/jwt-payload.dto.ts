import { CustomersRole } from 'src/customers/dto/customers.enum';

export interface JwtPayload {
  id: number;
  username: string;
  email: string;
  role: CustomersRole;
}
