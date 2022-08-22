import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { config } from '../../config';

type Client = { [key: string]: PrismaClient };

@Injectable()
export class PrismaClientManager implements OnModuleDestroy {
  private clients: Client = {};

  getTenantId(request: Request): string {
    // TODO: retrieve and return the tenant ID from the request object,
    // eventually throw an exception if the ID is not valid
    console.log('get tenant');
    return String(request.query.tenantId);
  }

  getClient(request: Request): PrismaClient {
    const tenantId = this.getTenantId(request);
    let client = this.clients[tenantId];

    if (!client) {
      const databaseUrl = config.database.url.replace('public', tenantId);

      client = new PrismaClient({
        datasources: {
          db: {
            url: databaseUrl,
          },
        },
      });

      // setup prisma middlewares if any

      this.clients[tenantId] = client;
    }

    return client;
  }

  async onModuleDestroy() {
    // wait for every cached instance to be disposed
    await Promise.all(
      Object.values(this.clients).map((client) => client.$disconnect()),
    );
  }
}
