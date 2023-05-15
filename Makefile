commands:
	pnpm create next-app nextjs13-user-signin-signup
	pnpm prisma init --datasource-provider sqlite
	pnpm prisma migrate dev --name init
	pnpm prisma migrate reset

install-packages:
	pnpm add @prisma/client zod bcryptjs jose
	pnpm add -D prisma @types/bcryptjs