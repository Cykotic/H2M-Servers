const axios = require('axios');
const fs = require('fs');
const path = require('path');

const url = 'http://api.raidmax.org:5000/instance';

/**
 * Fetches and processes server data from the specified URL.
 */
async function main() {
    try {
        // Fetch data from the URL
        const {
            data
        } = await axios.get(url);

        // Filter and extract IP:port for servers with game "H2M"
        const extractedData = data.flatMap(item =>
            Array.isArray(item.servers) ? item.servers
            .filter(server => server.game === 'H2M')
            .map(server => `${server.ip}:${server.port}`) :
            []
        );

        const filePath = path.join(__dirname, 'server.json');

        fs.writeFileSync(filePath, JSON.stringify(extractedData, null, 2), 'utf8');

        console.log(`Number of servers with game "H2M": ${extractedData.length}`);
        console.log('Extracted IP and port have been saved to server.json');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();