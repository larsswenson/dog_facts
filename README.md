# Dog Facts API

The Dog Facts API is a simple Node.js and Express.js app that provides access to a database of facts about dogs.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/dog-facts-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd dog-facts-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To start the server, run:

```bash
node app.js

The server will start running on http://localhost:3000 by default.

Endpoints:
GET /facts
Retrieve dog facts from the API.

Parameters:
number (optional): If not provided, all facts will be returned.
Example Requests
Get all dog facts:
GET http://localhost:3000/facts
Get a specific number of dog facts:
GET http://localhost:3000/facts?number=5

Example Response:
For a request to GET /facts?number=5, the response could be:
{
  "facts": [
    "A group of pugs is called a grumble.",
    "Dalmatians are born without spots.",
    "Dogs only sweat through the pads of their feet.",
    "The Basenji is known as the 'barkless dog'.",
    "A dog’s sense of smell is 10,000 times stronger than humans."
  ],
  "success": true
}

Error Handling:
If an invalid request is made or an error occurs on the server, an error response will be returned.
