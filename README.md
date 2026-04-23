# Mind the Naira — Documentation

**Mind the Naira** is Nigeria's premier financial education platform. It empowers individuals and SMEs with practical, locally relevant financial knowledge to thrive in Nigeria's economy.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Getting Started](#4-getting-started)
5. [Environment Variables](#5-environment-variables)
6. [Pages](#6-pages)
7. [Components](#7-components)
8. [API Routes](#8-api-routes)
9. [Deployment](#9-deployment)

---

## 1. Project Overview

Mind the Naira addresses the financial literacy gap in Nigeria by providing:

- Free and affordable personal finance courses
- SME finance training
- One-on-one personal finance coaching
- Corporate finance training programs
- A free downloadable budget template
- A money mindset quiz

The platform is built as a single-page application (SPA) with a clean, accessible UI and serverless backend functions for contact and subscription management.

---

## 2. Tech Stack

| Layer      | Technology                                                                                      |
| ---------- | ----------------------------------------------------------------------------------------------- |
| Framework  | [React 19](https://react.dev/)                                                                  |
| Build tool | [Vite 7](https://vite.dev/)                                                                     |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com/)                                                     |
| Routing    | [React Router DOM v7](https://reactrouter.com/)                                                 |
| Icons      | [Lucide React](https://lucide.dev/) · [React Icons](https://react-icons.github.io/react-icons/) |
| Utilities  | [classnames](https://github.com/JedWatson/classnames)                                           |
| Backend    | Serverless functions (Vercel)                                                                   |
| Email/CRM  | [Brevo (Sendinblue) API](https://www.brevo.com/)                                                |
| Hosting    | [Vercel](https://vercel.com/)                                                                   |

---

## 3. Project Structure

```
mindthenaira/
├── api/                    # Serverless API route handlers (Vercel)
│   ├── contact.js          # Handles contact form submissions
│   └── subscribe.js        # Handles budget template email capture
├── money-mindset-quiz/     # Standalone static quiz page (plain HTML/CSS/JS)
│   ├── index.html
│   ├── script.js
│   └── style.css
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images, SVGs, and other static assets
│   ├── components/         # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── CookieBanner.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Button/
│   │   ├── Menu/
│   │   │   ├── Menu.jsx
│   │   │   ├── MenuButton.jsx
│   │   │   ├── MenuDropdown.jsx
│   │   │   └── MenuItem.jsx
│   ├── pages/              # One component per route
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Contact.jsx
│   │   ├── BudgetTemplate.jsx
│   │   ├── MoneyMindset.jsx
│   │   ├── Privacy.jsx
│   │   ├── CookiesPolicy.jsx
│   │   ├── Disclaimer.jsx
│   │   └── TermsOfService.jsx
│   ├── App.jsx             # Root component — defines all routes
│   ├── main.jsx            # React entry point
│   ├── App.css
│   └── index.css
├── index.html              # HTML shell
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment configuration
├── eslint.config.js        # ESLint configuration
└── package.json
```

---

## 4. Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mindthenaira

# Install dependencies
npm ci
```

### Running in Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Building for Production

```bash
npm run build
```

The compiled output is placed in the `dist/` folder.

### Preview the Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 5. Environment Variables

The API routes require the following environment variables. Create a `.env` file in the project root for local development, and add them as Vercel environment variables for production.

| Variable        | Required | Description                                                       |
| --------------- | -------- | ----------------------------------------------------------------- |
| `BREVO_API_KEY` | Yes      | API key from your [Brevo](https://www.brevo.com/) account         |
| `BREVO_LIST_ID` | No       | ID of the Brevo contact list to add subscribers to (default: `2`) |

> **Note:** Never commit your `.env` file to version control. It is already excluded by `.gitignore`.

---

## 6. Pages

All pages live in `src/pages/`. Each page is a React component that composes the `Navbar` and `Footer` components around its own content.

### `/` — Home

The landing page. It includes:

- A hero section with a headline, description, and two CTAs ("Start Digital Training" → `/how-it-works`, "Scale Your Business" → `/services`)
- Key stats (500+ Learners Empowered, 4 Training Programs, 100% Nigeria-Focused Content, Free Foundation Courses)
- A feature highlights grid (Locally Relevant, For Everyone, Expert-Led, Action-Oriented)

### `/about` — About

The about page. It includes:

- A hero section describing the platform's mission
- "Our Story" and "Our Solution" narrative cards
- Core values: **Accessibility**, **Relevance**, and **Practicality**
- A team or vision section

### `/services` — Services

Lists all four service offerings as cards:

| Service                        | Description                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| **Personal Finance Training**  | Budgeting, saving, debt control, investment basics                                  |
| **SME Finance Training**       | Cash flow, pricing strategy, record keeping, inventory control                      |
| **Personal Finance Coaching**  | One-on-one coaching with a custom money plan and monthly check-ins                  |
| **Corporate Finance Training** | Financial statements, strategy & forecasting, revenue optimization, risk management |

### `/how-it-works` — How It Works

A four-step visual journey for new users:

1. **Start With Free Courses** — Build a foundation at no cost
2. **Learn More With Low Cost Trainings** — Deeper knowledge at affordable prices
3. **Book a Personal Consultation** — One-on-one coaching session
4. **Custom Corporate Training** — Tailored programs for organisations

### `/contact` — Contact

A combined page with:

- **Contact form** — Collects first name, last name, email, phone (optional), and message. Submits to `POST /api/contact`.
- **Contact info** — WhatsApp, email, and phone links
- **FAQ accordion** — Answers common questions about getting started, available courses, and coaching

### `/budget-template` — Budget Template

A lead-capture page. The user enters their first name, last name, and email to unlock a free downloadable budget template. On valid submission, the email is saved to Brevo via `POST /api/subscribe`.

### `/money-mindset` — Money Mindset Quiz

An interactive 10-question quiz that categorizes users into one of three money mindset profiles:

- **The Free Spirit** — Emotionally driven spender
- **The Protector** — Anxiety-driven saver
- **The Intentional** — Balanced, goal-oriented mindset

After completing the quiz, users see their result with a tailored description and a CTA to book a coaching session.

### Legal Pages

| Route               | Page             |
| ------------------- | ---------------- |
| `/privacy-policy`   | Privacy Policy   |
| `/cookies-policy`   | Cookies Policy   |
| `/terms-of-service` | Terms of Service |
| `/disclaimer`       | Disclaimer       |

---

## 7. Components

All reusable components live in `src/components/`.

### `Navbar`

A sticky top navigation bar. Features:

- Logo linking to `/`
- Desktop navigation links: Home, About, Services, How It Works, Contact, Budget Template, Money Mindset
- Active link highlighting based on the current route (`useLocation`)
- A "Get Started" CTA button linking to `/services`
- A responsive hamburger menu for mobile viewports

### `Footer`

A dark (`bg-gray-950`) multi-column footer. Contains:

- Brand logo and tagline
- Company links (About, Services, How It Works)
- Resource links (Budget Template, Money Mindset Quiz)
- Legal links (Privacy Policy, Terms of Service, Cookies Policy, Disclaimer)
- Social media icons (Instagram, Twitter/X, LinkedIn)
- Email contact link

### `CookieBanner`

A fixed bottom banner shown on first visit. Persists acceptance state in `localStorage` under the key `cookiesAccepted`. Provides a "Learn More" link to `/cookies-policy` and an "Accept" button that dismisses the banner.

### `ScrollToTop`

A utility component rendered inside the router that scrolls the window to the top on every route change using a `useEffect` + `useLocation` listener.

### `Button` / `Button/Button.jsx`

A reusable button component. Accepts variant, size, and other standard button props.

### `Menu` (Menu/, MenuButton, MenuDropdown, MenuItem)

A composable dropdown menu component set used for navigation or action menus.

---

## 8. API Routes

The `api/` directory contains Vercel serverless functions. They are automatically deployed as `POST /api/<filename>` endpoints.

### `POST /api/contact`

Handles contact form submissions.

**Request body:**

```json
{
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "message": "string (required)"
}
```

**Behaviour:**

1. Validates that `firstName`, `lastName`, `email`, and `message` are present.
2. Creates or updates the contact in Brevo, adding them to the configured list.
3. Looks up the contact by email to retrieve the Brevo contact ID.
4. Attaches the message as a note on the contact record in Brevo.

**Responses:**

| Status | Meaning                                                                   |
| ------ | ------------------------------------------------------------------------- |
| `200`  | Contact saved and message noted successfully                              |
| `400`  | Missing required fields                                                   |
| `405`  | Method not allowed (non-POST request)                                     |
| `500`  | Server configuration error (missing `BREVO_API_KEY`) or Brevo API failure |

---

### `POST /api/subscribe`

Handles budget template email capture.

**Request body:**

```json
{
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required)"
}
```

**Behaviour:**

1. Validates that all three fields are present.
2. Creates or updates the contact in Brevo, adding them to the configured list (`BREVO_LIST_ID`).

**Responses:**

| Status | Meaning                                         |
| ------ | ----------------------------------------------- |
| `200`  | `{ "success": true }` — Contact saved           |
| `400`  | Missing required fields                         |
| `405`  | Method not allowed                              |
| `500`  | Server configuration error or Brevo API failure |

---

## 9. Deployment

The project is deployed on **Vercel**.

### Configuration (`vercel.json`)

```json
{
  "installCommand": "npm ci",
  "rewrites": [{ "source": "/((?!api/).*)", "destination": "/index.html" }]
}
```

The rewrite rule ensures that all non-API URLs are served by `index.html`, which is required for client-side routing with React Router.

### Deploy Steps

1. Connect the repository to a Vercel project.
2. Set the environment variables (`BREVO_API_KEY`, `BREVO_LIST_ID`) in the Vercel project settings under **Settings → Environment Variables**.
3. Push to the main branch — Vercel will automatically build and deploy.

Vercel automatically detects the `api/` directory and deploys the handler files as serverless functions.
