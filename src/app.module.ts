import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { AdminSeeder } from './database/seeds/admin.seed';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { OdooModule } from './odoo/odoo.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    MailModule,
    UsersModule,
    OdooModule,
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [AdminSeeder],
})
export class AppModule { }
