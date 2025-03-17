# Fintech Frontend

This repository contains the frontend implementation for a Fintech application, a responsive React TypeScript application designed to help users manage their company cards, view transactions, and monitor spending.

## Features

- **Company Dashboard**: View company information and financial data
- **Card Management**: Display card details and status
- **Invoice Tracking**: Monitor pending invoices with due dates
- **Spending Overview**: Track remaining spending limits
- **Transaction History**: View detailed transaction history
- **Responsive Design**: Optimized for both mobile and desktop screens

## Tech Stack

- **React**: UI library for building component-based interfaces
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Ant Design**: UI component library for enterprise applications
- **Context API**: State management for global app state
- **Axios**: HTTP client for API communication
- **React Router**: Navigation and routing
- **React Testing Library**: Automated tests

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm start
   # or
   yarn start
   ```

4. The application will be available at `http://localhost:3000`

## Connecting to Backend

The application is configured to connect to a backend API running at `http://localhost:3001`. You can change this configuration in the `package.json` file:

```json
"proxy": "http://localhost:3001"
```

## Key Components

### Company Management

- **CompanySelector**: Dropdown to select different companies
- **CompanyDashboard**: Main dashboard showing company data

### Card Features

- **CardDetails**: Displays card information with masked sensitive data
- **CardActivation**: Button to activate new cards

### Financial Information

- **InvoiceDetails**: Shows information about pending invoices
- **SpendingStatus**: Visual representation of spending limits

### Transaction History

- **TransactionList**: List of recent transactions
- **TransactionItem**: Individual transaction details

## Best Practices

- Type safety with TypeScript interfaces
- Component-based architecture
- Centralized state management with Context API
- Responsive design for all device sizes
- Error handling and loading states
- Code formatting and linting standards
- Added automated tests using React testing library

## Future Enhancements

- Authentication system
- User profile management
- Transaction filtering and searching
- Export functionality for financial data
- Push notifications
