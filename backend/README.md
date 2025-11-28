# Consult-Pro

## Introduction
Consult-Pro is a modern, professional business consulting and agency website designed to showcase services, display case studies, publish blogs, present team members, and capture client inquiries.

## Features
* Responsive design
* Service listing
* Case study listing
* Blog posting
* Team member profiles
* Client inquiry form
* Administrator dashboard
* Content management system

## Requirements
* Node.js 16.x or higher
* Express.js 4.x or higher
* Prisma 4.x or higher
* React 18.x or higher
* Vite 3.x or higher
* MySQL or PostgreSQL database
* JWT authentication
* Responsive design using CSS Grid or Flexbox

## Setup
1. Clone the repository
2. Install dependencies using `npm install`
3. Create a new PostgreSQL database
4. Update the `DATABASE_URL` environment variable in `.env.example`
5. Run the application using `npm start`

## API Endpoints
* `GET /api/services` - Retrieve a list of services offered by the agency
* `GET /api/case-studies` - Retrieve a list of case studies
* `GET /api/blogs` - Retrieve a list of blog posts
* `GET /api/team-members` - Retrieve a list of team members
* `POST /api/inquiries` - Submit a client inquiry
* `GET /api/inquiries` - Retrieve a list of client inquiries (for administrators only)
* `POST /api/inquiries/:id/response` - Respond to a client inquiry (for administrators only)