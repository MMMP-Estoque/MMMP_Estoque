
create table if not exists public.usuarios (
  id            uuid primary key references auth.users (id) on delete cascade,
  email         text not null unique,
  administrador boolean not null default false,
  criado_em     timestamptz not null default now()
);

alter table public.usuarios
  add column if not exists administrador boolean not null default false;

alter table public.usuarios enable row level security;
 
drop policy if exists "usuario le o proprio registro" on public.usuarios;
create policy "usuario le o proprio registro"
  on public.usuarios
  for select
  to authenticated
  using ((select auth.uid()) = id);
 
create or replace function public.criar_usuario_ao_cadastrar()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.usuarios (id, email)
  values (new.id, new.email);
  return new;
end;
$$;
 
drop trigger if exists ao_cadastrar_usuario on auth.users;
create trigger ao_cadastrar_usuario
  after insert on auth.users
  for each row execute function public.criar_usuario_ao_cadastrar();
 

insert into public.usuarios (id, email)
select id, email
from auth.users
where email is not null
on conflict (id) do nothing;
 
update public.usuarios
set administrador = true
where email = 'matheus.felipe.m.faria@gmail.com';
 