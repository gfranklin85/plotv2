# Plot - AI-Powered Real Estate Platform

A multi-tenant real estate platform connecting agents, homeowners, and vendors through AI-powered interfaces. Built on Next.js 15, React 19, Supabase, with Claude Sonnet 4 and Vapi voice AI.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Anthropic API key (for Claude/Greg)
- Vapi API key (for Riley voice AI)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual credentials.

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
plot/
├── app/                    # Next.js 15 app directory
│   ├── (auth)/            # Authentication pages
│   ├── (public)/          # Public marketing pages
│   ├── dashboard/         # Agent dashboard
│   ├── portal/            # Client portal
│   ├── vendor/            # Vendor dashboard
│   ├── member/            # Public member dashboard
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── dashboard/        # Agent dashboard components
│   ├── portal/           # Portal components
│   └── shared/           # Shared components
├── lib/                  # Utilities and helpers
│   ├── supabase/        # Supabase client setup
│   ├── utils.ts         # Helper functions
│   └── constants.ts     # App constants
├── types/               # TypeScript type definitions
└── styles/             # Global styles
```

## Three Integrated Experiences

### 1. Agent Dashboard
- Contact management with master-detail layout
- Greg AI assistant (Claude Sonnet 4)
- Riley voice receptionist (Vapi)
- Vendor earnings tracking
- QR code lead generation
- Deal pipeline management

### 2. Client Portal
- Transaction progress tracking
- Interactive milestone questionnaires
- Service booking system
- Rewards dashboard (Plot Credits - not cash)
- FSBO tools and guidance
- Greg AI assistant

### 3. Vendor Marketplace
- Service request management
- Competitive bid system
- Review and rating system
- Analytics dashboard
- Automated commission payouts

## Key Features

- **AI-Powered**: Claude Sonnet 4 for intelligent assistance
- **Voice AI**: Vapi for 24/7 call handling
- **Multi-Tenant**: Support for agents and brokerages
- **Real-Time**: WebSocket updates for live data
- **Theme System**: 3 visual themes (Professional, Tech, Classic)
- **Responsive**: Mobile-first design
- **Type-Safe**: Full TypeScript implementation
- **Compliant Rewards**: Plot Credits system (not cash referrals)

## Tech Stack

- **Framework**: Next.js 15 with React 19
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **AI**: Anthropic Claude Sonnet 4
- **Voice AI**: Vapi
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Payments**: Stripe Connect
- **Communication**: Twilio SMS, Gmail API

## Development Roadmap

Phase 1: Foundation (Current)
- [x] Project setup and configuration
- [x] Base UI components
- [x] Type definitions
- [ ] Authentication flow
- [ ] Database schema

Phase 2: Agent Dashboard
- [ ] Contact management
- [ ] Greg AI integration
- [ ] Riley voice AI integration
- [ ] Pipeline management

Phase 3: Client Portal
- [ ] Portal access and authentication
- [ ] Transaction progress tracker
- [ ] Milestone questionnaires
- [ ] Service booking system

Phase 4: Vendor Marketplace
- [ ] Vendor profiles
- [ ] Service request management
- [ ] Bid system
- [ ] Review system

Phase 5: Integrations
- [ ] Gmail API
- [ ] Google Calendar
- [ ] Stripe Connect
- [ ] Twilio SMS

## Environment Variables

See `.env.example` for all required environment variables.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## License

Proprietary - All rights reserved

---

Built with ❤️ by the Plot team
