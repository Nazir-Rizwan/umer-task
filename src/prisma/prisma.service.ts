import 'dotenv/config'
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaNeon } from '@prisma/adapter-neon'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    constructor() {
        // Node.js pg does not support TLS channel binding (SCRAM-SHA-256-PLUS).
        // Keeping channel_binding=require in the URL causes the SSL handshake to
        // hang until ETIMEDOUT. Strip it at runtime so the .env stays untouched.
        const rawUrl = process.env.DATABASE_URL ?? '';
        const url = new URL(rawUrl);
        url.searchParams.delete('channel_binding');
        const connectionString = url.toString();

        // const adapter = new PrismaPg({
        //     connectionString,
        //     connectionTimeoutMillis: 30_000,
        //     idleTimeoutMillis: 30_000,
        //     max: 5,
        // });
        const adapter = new PrismaNeon({
            connectionString: process.env.DATABASE_URL!,
        })
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}


// import { PrismaClient } from '../../prisma/generated/prisma/client'
// import { PrismaNeon } from '@prisma/adapter-neon'

// const adapter = new PrismaNeon({
//     connectionString: process.env.DATABASE_URL!,
// })

// export const prisma = new PrismaClient({ adapter })