CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
