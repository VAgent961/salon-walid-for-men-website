create table if not exists bookings (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  service text not null,
  details text not null,
  status text not null default 'new'
);

create index if not exists bookings_created_at_idx on bookings (created_at);
