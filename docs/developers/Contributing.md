## Code Contributions

### Prerequisites

- The latest version of [Node.js](https://nodejs.org/en) >= 22.0.0
- Either one of the following IDEs
  - [Visual Studio Code](https://code.visualstudio.com/) (*Recommended*)
  - [JetBrains Webstorm](https://www.jetbrains.com/webstorm/)
- The [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension

#### Optional Extensions
There are useful extensions in Visual Studio Code that are very useful for development and effectively make your coding efficiency faster.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Code formats a consistent style.
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): Revamps icons for different directories/files
- [JavaScript (ES6)](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets): Provides code snippets for JS
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): Visualize authors and annotations from GitHub

### Installations
1. Clone the repository. (Optional: Fork the repository)
2. In the project directory, install the packages.
    ```bash
    npm install
    ```

### Running the Project
1. Activate a local server for the website.
    ```bash
    npm run dev
    ```
2. Or, you can host specific ends like the frontend or the backend only depending on your choice.
    ```bash
    npm run dev:frontend
    # or..
    npm run dev:backend
    ```
3. To stop the server, enter `q` or `CTRL-C`.

### MaiPon Project Details
The following details are utilized/currently planned tech stack and deployment for this project:

#### Tech Stack
- TypeScript - Core Language
- React - Frontend
- Node.js/Express - Backend
- PostgreSQL - Database
- Prisma - Database Framework
- Git Actions - CI/CD Pipeline

#### Deployment
- Cloudflare Pages - Frontend
- Render - Backend
- Supabase - Database