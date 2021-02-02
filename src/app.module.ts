import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppGateway } from './app.gateway';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      autoLoadEntities: true,
      ssl: { rejectUnauthorized: false },
      port: 5432,
      synchronize: true,
      host: process.env.POSTGRES_HOST || 'localhost',
      database: process.env.POSTGRES_DATABASE || 'food',
      username: process.env.POSTGRES_USERNAME || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'kwanso123',
    }),
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: true,
    }),
    AuthModule,
  ],
  providers: [AppGateway],
})
export class AppModule {}
