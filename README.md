# E2E Scheduler

This program allows you to send scheduling data to supabase.

# How to run this program after cloning

Make sure you have node installed so you can install the packages involved. Afterwards, run

```
npm install
```

Ensure you have your own NEXT_PUBLIC_SUPABASE_ANON_KEY and NEXT_PUBLIC_SUPABASE_URL in .env.local file. You will need to configure your RLS Policies to Public for INSERT and SELECT as this app doesn't support authentication.

To start the program, use

```
npm run dev
```

You can now see the app on your browser at the following link: http://localhost:3000/scheduler
