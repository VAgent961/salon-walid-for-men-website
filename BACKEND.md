# Backend Documentation - Salon Walid for men

## Overview
This project uses a Next.js 14 backend with a Neon Postgres database. It handles appointment requests and provides a protected admin dashboard.

## Database Schema
The database consists of a `bookings` table:
- `id`: Unique identifier (bigserial)
- `created_at`: Timestamp of the request
- `name`: Customer's full name
- `phone`: Customer's contact number
- `service`: Requested service (Haircut, Fade, etc.)
- `details`: Preferred date, time, or additional notes
- `status`: 'new' (default), 'done', or 'cancelled'

## API Routes
- `POST /api/bookings`: Public endpoint to submit an appointment request. Validates input, saves to DB, and notifies the owner.
- `PATCH /api/admin/bookings`: Protected endpoint to update booking status.

## Environment Variables
Required for full functionality:
- `DATABASE_URL`: Neon Postgres connection string (set automatically).
- `ADMIN_PASSWORD`: Password for the `/admin` dashboard.
- `ADMIN_SECRET`: Secret for session signing (set automatically).

Optional for notifications:
- `TELEGRAM_BOT_TOKEN`: Token from @BotFather.
- `TELEGRAM_CHAT_ID`: Your chat ID to receive instant alerts.
- `RESEND_API_KEY`: For email notifications.
- `NOTIFY_EMAIL`: Destination email for notifications.
- `WHATSAPP_NUMBER`: `96170939042` (used for generating wa.me links).

## Admin Dashboard
Access the admin dashboard at `/admin` to view and manage appointment requests. It is password-protected using the `ADMIN_PASSWORD` variable.

## Later Features
- Customer accounts and login.
- Real-time calendar availability sync.
- Automated SMS reminders.
