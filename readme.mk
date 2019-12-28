csv 存成 -> db

db model

restaurants:
CREATE SEQUENCE public.restaurants_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 49
	CACHE 1
	NO CYCLE;
CREATE TABLE public.restaurants (
	id INTEGER DEFAULT NEXTVAL('restaurants_id_seq'),
	"name" varchar(2048) NULL
);

restaurants_schedules:
CREATE SEQUENCE public.restaurants_schedules_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 49
	CACHE 1
	NO CYCLE;
CREATE TABLE public.restaurants_schedules (
	id INTEGER DEFAULT NEXTVAL('restaurants_schedules_id_seq'),
	r_id INTEGER,
	week_of_day INTEGER,
	start_time timestamptz null,
	end_time timestamptz NULL,
	is_open boolean
);

api:
GET: /restaurants/opening
query: 
	datetime with ISO8601
return:
	[
		{
			"id": 1,
			"name" : "test",
		}
	]


api:
GET: /restaurants_schedules
query: 
	datetime with ISO8601
return:
	[
		{
			"id": 1,
			"name" : "test",
			"schedules" : [
				{
					"id":1,
					"week_of_day": "1",
					"start_time": "2019-12-12T09:00:00+08:00",
					"end_time": "2019-12-12T14:00:00+08:00",
					"is_open": true
				},
				{
					"id":2,
					"week_of_day": "1",
					"start_time": "2019-12-12T17:00:00+08:00",
					"end_time": "2019-12-12T20:00:00+08:00",
					"is_open": true
				},
			]
		}
	]
