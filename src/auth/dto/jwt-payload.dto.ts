import { CustomersRole } from 'src/customers/entity/customer.entity';

export interface JwtPayload {
  id: number;
  username: string;
  email: string;
  role: CustomersRole;
}
