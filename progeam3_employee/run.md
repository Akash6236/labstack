# Run

Prerequisites:
- [Node.js](https://nodejs.org/) (npm included)

1. Install dependencies:

```bash
npm install
```

2. Start the backend API (json-server on port 5000, backed by `db.json`):

```bash
npx json-server --watch db.json --port 5000
```

3. In a new terminal, start the React development server (port 3000):

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

4. Run tests:

```bash
npm test
```

5. Build for production:

```bash
npm run build
```

Output goes to the `build/` folder.
