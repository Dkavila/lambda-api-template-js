# Lambda API Template
Simple API template using Express and Serverless Framework

### Installation
#### Clone the repository
:

``git clone https://github.com/dkavila/lambda-api-template.git``
``cd lambda-api-template``

#### Install dependencies:
``npm install``

--------------

### How to use?
#### To run the API locally, run:
``serverless offline``

The API will be available at http://localhost:3000.

#### Environment Variables
Create a .env file in the project root and add the necessary environment variables:
``NODE_ENV=development``
``AWS_ACCESS_KEY_ID=your-access-key-id``
``AWS_SECRET_ACCESS_KEY=your-secret-access-key``

### Deploy to AWS Lambda
##### Deploy the API to AWS:
``serverless deploy``

The generated endpoint will be displayed in the terminal after deployment.
