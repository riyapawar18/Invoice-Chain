# InvoiceChain

InvoiceChain is a React prototype for invoice financing: an MSME uploads an invoice, an investor reviews it, and the interface walks through verification, NFT minting, and escrow funding.

**Status: front-end prototype with a demo Express API.** The screens and flows are present, but wallet minting, funding, and escrow transitions are simulated. No smart contract or IPFS integration is included.

**Live UI:** <https://invoice-chain-rosy.vercel.app>

> The deployed build is the static React app. Its investor list calls `http://127.0.0.1:5000`, so that list is empty unless the backend is running on the viewer's machine. There is no deployed backend.

## What is implemented

- React routes for login, country selection, dashboard, invoice upload, investor view, and profile.
- MetaMask wallet connection through `window.ethereum` and `ethers.BrowserProvider`.
- Investor invoice list loaded from the Express backend (`GET /api/invoices/list`).
- Invoice cards, NFT mint modal, funding action, escrow status visualization, and toast feedback.
- Express demo API with JSON-file persistence for users, invoices, minting, escrow stage, and wallet address.

## What is still a mock

- **Login is navigation only.** The email/password fields are not submitted, and the button routes to `/country`.
- **Invoice upload is a UI shell.** The form has no submit handler, and no file is read or uploaded.
- **Minting and funding are UI actions.** They show toasts; no contract call or IPFS upload occurs.
- **Escrow stages are display data.** They are not enforced by a contract.
- **Two backend implementations exist.** `invoicechain-backend/server.js` is the file-based API that actually runs. `controllers/`, `routes/`, and `models/` contain a Mongoose version that `server.js` does not mount.
- **Some dashboard links point to routes that do not exist** (`/upload-invoice`, `/buyer`); the registered upload route is `/upload`.

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | React 18, Create React App, React Router 7, Tailwind CSS |
| Wallet | ethers 6, MetaMask (`window.ethereum`) |
| Backend | Node.js, Express 5, `data.json` file storage |
| Optional scaffolding | Mongoose models/routes (not wired into `server.js`) |

## Structure

```text
Invoice-Chain/
├── src/
│   ├── App.js                  # routes
│   ├── pages/                  # Login, CountrySelect, Dashboard, UploadInvoice, Investor, Profile
│   └── components/             # Navbar, InvoiceCard, NFTMintModal, EscrowStatus, WalletConnect, Toast
├── invoicechain-backend/
│   ├── server.js               # running demo API (port 5000, data.json)
│   ├── controllers/            # Mongoose-based API (not mounted)
│   ├── models/
│   ├── routes/
│   └── data.json
├── public/
└── package.json
```

## Run locally

### 1. Backend

```bash
cd invoicechain-backend
npm install
node server.js
```

The API starts on `http://127.0.0.1:5000`. `data.json` is created in the directory you run the command from.

### 2. Frontend

In a second terminal:

```bash
npm install
npm start
```

Open `http://localhost:3000`. Use the investor page to see invoices returned by the backend.

### Production build

```bash
npm run build
```

## API (the running `server.js`)

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/auth/register` | Add a user to `data.json` |
| POST | `/api/auth/login` | Check email/password |
| POST | `/api/invoices/upload` | Append an invoice |
| GET | `/api/invoices/list` | List invoices |
| POST | `/api/invoices/mint` | Mark an invoice minted (mock) |
| POST | `/api/invoices/escrow/update` | Set an escrow stage (mock) |
| GET | `/api/invoices/escrow/:title` | Read an escrow stage |
| POST | `/api/users/wallet` | Store a wallet address |

## Testing

There are no meaningful automated tests. The frontend has the default CRA test file, and the backend has no test suite. Treat this repository as a UI prototype and verify flows manually.

## Security notice

This is **not** safe for real invoices or personal data:

- Passwords are stored as plaintext in `data.json`; password hashing is listed as a dependency but is not used by the running server.
- The API has no authentication or authorization middleware.
- CORS is open to all origins.
- There is no HTTPS, rate limiting, file validation, or audit log.
- The frontend sends wallet addresses to the backend but never verifies ownership.

Before production use, replace the demo API with an authenticated service, hash passwords, add authorization, validate uploads, and perform real contract calls with audited code.

## Roadmap

1. Wire login and registration to the API and protect routes.
2. Connect the upload form to the backend with file validation.
3. Implement wallet-signature authentication and persist the session.
4. Replace mock minting/funding with an audited contract and IPFS storage.
5. Unify the duplicated backend implementations and add tests.
6. Add a deployed backend URL and remove hard-coded `127.0.0.1`.

## License

No license file is included. Ask before redistributing.
