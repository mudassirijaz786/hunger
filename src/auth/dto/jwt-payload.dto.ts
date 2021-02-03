import { CustomersRole } from 'src/customers/entity/customer.entity';

export interface JwtPayload {
  id: string;
  username: string;
  email: string;
  role: CustomersRole;
}
