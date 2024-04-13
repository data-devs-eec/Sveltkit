import { pgTable, serial, text, varchar, timestamp, primaryKey } from 'drizzle-orm/pg-core';
export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }),
	phone: varchar('phone', { length: 10 }).unique().notNull(),
	email: varchar('email', { length: 255 }).unique().notNull(),
	passwordHash: text('password_hash'),
	role_id: varchar('role_id', { length: 255 }).references(() => roles.id),
	district_id: varchar('district_id', { length: 255 }).references(() => districts.id),
	designation: varchar('designation', { length: 255 }),
	createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow(),
	updatedAt: timestamp('updatedAt', { mode: 'date' }).defaultNow()
});

export const roles = pgTable(
	'roles',
	{
		id: serial('id'),
		name: varchar('name', { length: 255 }).unique().notNull(),
		permission_id: serial('permission_id').references(() => permissions.id),
		createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow()
	},
	(table) => {
		return {
			pk: primaryKey({ columns: [table.id, table.permission_id] })
		};
	}
);

export const permissions = pgTable('permissions', {
	id: serial('id').primaryKey(),
	description: text('description').notNull(),
	createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow()
});

export const districts = pgTable('districts', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }),
	createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow()
});
