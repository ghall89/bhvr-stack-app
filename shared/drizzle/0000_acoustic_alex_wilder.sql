CREATE TABLE "bgg_cache" (
	"endpoint" varchar PRIMARY KEY NOT NULL,
	"timestamp" integer NOT NULL,
	"data" jsonb NOT NULL,
	CONSTRAINT "bgg_cache_endpoint_unique" UNIQUE("endpoint")
);
