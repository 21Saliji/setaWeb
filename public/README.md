# Real-Time Chat Application

This is a simple real-time chat application built using Node.js, Express.js, and Socket.io.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. **Clone this repository** to your local machine:

git clone https://github.com/21Saliji/setaWeb


2. **Navigate into the project directory**:

cd setaWeb


3. **Install dependencies**:

npm install



## Running the Application

1. **Start the server**:

node server.js

You should see `Server running on http://localhost:7777` in the terminal if the server starts successfully.

2. **Open a web browser** and go to:

http://localhost:7777

3. **Interact with the chat application**:
- Enter a message in the input field and click "Send".
- The message should appear in the chat area and be broadcasted to all connected clients.

## Files and Directories

- **`server.js`**: Contains the server-side code using Express.js and Socket.io.
- **`public/`**: Directory containing static files served to clients (includes `index.html`, `client.js`, and `style.css`).

## Troubleshooting

- If the application doesn't load, ensure your server is running without errors.
- Check the browser console for any JavaScript errors.
- Verify that dependencies are installed (`npm install`).

