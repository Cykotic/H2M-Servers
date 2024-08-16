# Server Data Fetcher

This script fetches server data from a specified URL, filters the data for servers running a specific game, and saves the IP and port of those servers to a JSON file.

## Prerequisites

Before running this script, ensure that you have the following installed:

- Node.js (version 12.x or later)
- npm (Node Package Manager)

## Installation

1. Clone this repository or download the script files.
2. Navigate to the project directory:

    ```bash
    cd your-project-directory
    ```

3. Install the required dependencies:

    ```bash
    npm install axios
    ```

## Usage

1. Open the `index.js` file and ensure that the `url` variable is set to the correct endpoint. By default, it is set to:

    ```javascript
    const url = 'http://api.raidmax.org:5000/instance';
    ```

2. Run the script using Node.js:

    ```bash
    node index.js
    ```

3. The script will perform the following actions:
   - Fetch data from the specified URL.
   - Filter the servers where the game is "H2M".
   - Extract the IP and port of these servers.
   - Save the extracted IP and port information to a `server.json` file in the project directory.

4. Once the script has run, you will see the number of servers that match the criteria printed in the console, along with a message indicating that the data has been saved.

## Output

The output will be saved in a file named `server.json`, which will contain the IP and port of all servers running the game "H2M" in the following format:

```json
[
  "192.168.1.100:8080",
  "192.168.1.101:8080"
]
