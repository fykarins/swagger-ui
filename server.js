const express = require('express');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
const port = 8000;

app.use(bodyParser.json());

const swaggerOptions = {
  apis: ['./routes/*.js'], // Path to the API routes
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API College',
      description: 'Listing API College',
      version: '1.0.0',
    },
    // SERVERS
    servers: [
      {
        url: 'http://localhost:8000',
        description: 'localhost',
      },
      {
        url: 'http://localhost:8001',
        description: 'dev',
      },
    ],
    // TAGS
    tags: [
      {
        name: 'Student',
        description: 'Operations related to student',
      },
      {
        name: 'Mayor',
        description: 'Operations related to mayors',
      },
    ],
    // PATHS
    paths: {
        "/Student": {
          "get": {
            "tags": ['Student'],
            summary: 'Get All Student',
            description: '',
            responses: {
              '200': {
                description: 'a successful response',
              },
            },
          },
        },
        "/Student/{PST}": {
          "post": {
            "tags": ['Student'],
            summary: 'Post Student ID',
            description: '',
            responses: {
              '200': {
                description: 'a successful response',
              },
            },
          },
        },
        "/Student/{GET}": {
          "get": {
            "tags": ['Student'],
            summary: 'Get One Student',
            description: '',
            responses: {
              '200': {
                description: 'a successful response',
              },
            },
          },
        },
        "/Student/{PUT}": {
          "put": {
            "tags": ['Student'],
            summary: 'Update Detail Student',
            description: '',
            responses: {
              '200': {
                description: 'a successful response',
              },
            },
          },
        },
        "/Student/{DEL}": {
          "delete": {
            "tags": ['Student'],
            summary: 'Delete Student',
            description: '',
            responses: {
              '200': {
                description: 'a successful response',
              },
            },
          },
        },
        "/Student/{SRC}": {
          "get": {
            "tags": ['Student'],
            summary: 'Search Student',
            description: '',
            responses: {
              '200': {
                description: 'a successful response',
              },
            },
          },
        }, // Close the "paths" object 

      // Correct placement of closing curly brace for the "STUDENT" path
      "/Mayor": {
        "get": {
          "tags": ['Mayor'],
          summary: 'Get All Mayor',
          description: '',
          responses: {
            '200': {
              description: 'a successful response',
            },
          },
        },
      },
      "/Mayor/{PST}": {
        "post": {
          "tags": ['Mayor'],
          summary: 'Post Mayor',
          description: '',
          responses: {
            '200': {
              description: 'a successful response',
            },
          },
        },
      }, 
      "/Mayor/{GET}": {
        "get": {
          "tags": ['Mayor'],
          summary: 'Get One Mayor',
          description: '',
          responses: {
            '200': {
              description: 'a successful response',
            },
          },
        },
      },
      "/Mayor/{PUT}": {
        "put": {
          "tags": ['Mayor'],
          summary: 'Update Mayor',
          description: '',
          responses: {
            '200': {
              description: 'a successful response',
            },
          },
        },
      },
      "/Mayor/{DEL}": {
        "delete": {
          "tags": ['Mayor'],
          summary: 'Delete Mayor',
          description: '',
          responses: {
            '200': {
              description: 'a successful response',
            },
          },
        },
      },
      "/Mayor/{SRC}": {
        "get": {
          "tags": ['Mayor'],
          summary: 'Search Mayor',
          description: '',
          responses: {
            '200': {
              description: 'a successful response',
            },
          },
        },
      }, //Close the "mayor" object
    },  //Close the "paths" object
  }, // Close the "definition" object
}; // Close the "swaggerOptions" object

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes
//const todoRoutes = require('./routes/todoRoutes');
//app.use('/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
