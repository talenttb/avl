csv 存成 -> db

db model

restaurants:
CREATE TABLE public.restaurants (
	id INTEGER DEFAULT NEXTVAL('restaurants_id_seq')
	"name" varchar(2048) NULL
);


restaurants_schedules:
CREATE TABLE public.restaurants_schedules (
	id INTEGER DEFAULT NEXTVAL('restaurants_schedules_id_seq')
	r_id INTEGER,
	week_of_day INTEGER,
	start_time timestamptz NULL
	end_time timestamptz NULL,
	is_open boolean,
);


api:
GET: /restaurants
query: 
	datetime with ISO8601

