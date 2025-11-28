# consult-pro

A modern, professional business consulting and agency website designed to showcase services, display case studies, publish blogs, present team members, and capture client inquiries.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/dyF1kttLxX5lIepS4hs2bO/Business-Consulting-Website-UI-Template--Community-?node-id=0-1&t=qeSSKsS8obfvLt2g-1))

## Project Structure

```
consult-pro/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- Responsive design
- Service listing
- Case study listing
- Blog posting
- Team member profiles
- Client inquiry form
- Administrator dashboard
- Content management system

## API Endpoints

- `GET /api/services` - Retrieve a list of services offered by the agency
- `GET /api/case-studies` - Retrieve a list of case studies
- `GET /api/blogs` - Retrieve a list of blog posts
- `GET /api/team-members` - Retrieve a list of team members
- `POST /api/inquiries` - Submit a client inquiry
- `GET /api/inquiries` - Retrieve a list of client inquiries (for administrators only)
- `POST /api/inquiries/:id/response` - Respond to a client inquiry (for administrators only)

## License

MIT
