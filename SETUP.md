# ClickFlow Setup Instructions

## Supabase Configuration

1. **Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Add your Supabase URL and anon key:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

2. **Supabase Authentication Setup**
   - In your Supabase dashboard, go to Authentication > Settings
   - Configure your site URL (e.g., `http://localhost:5173` for development)
   - Enable email authentication
   - Optional: Configure OAuth providers if desired

3. **Database Tables** (Optional for future features)
   - Projects data is currently stored locally
   - To persist data, create tables in Supabase database:
     ```sql
     -- Projects table
     create table projects (
       id uuid default gen_random_uuid() primary key,
       user_id uuid references auth.users not null,
       name text not null,
       description text,
       progress integer default 0,
       status text default 'Planning',
       priority text default 'medium',
       due_date date,
       tags text[],
       tasks_count integer default 0,
       completed_tasks integer default 0,
       starred boolean default false,
       created_at timestamp with time zone default timezone('utc'::text, now()) not null,
       updated_at timestamp with time zone default timezone('utc'::text, now()) not null
     );

     -- Enable RLS
     alter table projects enable row level security;

     -- RLS policies
     create policy "Users can view own projects" on projects for select using (auth.uid() = user_id);
     create policy "Users can insert own projects" on projects for insert with check (auth.uid() = user_id);
     create policy "Users can update own projects" on projects for update using (auth.uid() = user_id);
     create policy "Users can delete own projects" on projects for delete using (auth.uid() = user_id);
     ```

## Features Implemented

✅ **Authentication**
- Login/Register with email and password
- Supabase authentication integration
- Protected routes
- User session management

✅ **Projects**
- Create new projects with dialog form
- Search and filter projects
- Star/unstar projects
- Archive projects
- Grid and list view modes

✅ **Quick Add**
- Quick add projects from header
- Full project creation form

✅ **UI/UX**
- Dark mode support
- Responsive design
- Beautiful animations
- Toast notifications

## Getting Started

1. Set up your environment variables
2. Configure Supabase authentication
3. Run the development server: `npm run dev`
4. Navigate to `/login` to create an account
5. Start creating and managing your projects!