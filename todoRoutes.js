const express = require('express');
const router = express.Router();

const swaggerOptions = {
definition: {
  openapi: '3.0.0',
  info: {
    title: 'API College',
    description: 'Listing API College',
    version: '1.0.0',
  },
  //SERVERS
  "servers": [
    {
      url: 'https:localhost:8000',
      description: 'localhost'
    },
    {
      url: 'https:localhost:8001',
      description: 'dev'
    }
  ],

  //TAGS
  "tags": [
    {
      name: 'Student',
      description: 'Student'
    },
    {
      name: 'Mayor',
      description: 'Mayor'
    }
  ],
}}

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/', (req, res) => {
  // Implementasi mendapatkan semua data todos
  res.send('Get all todos');
});

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.post('/', (req, res) => {
  // Implementasi membuat todo baru
  res.send('Create a new todo');
});

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.put('/:id', (req, res) => {
  // Implementasi memperbarui todo berdasarkan ID
  res.send(`Update todo with ID ${req.params.id}`);
});

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.delete('/:id', (req, res) => {
  // Implementasi menghapus todo berdasarkan ID
  res.send(`Delete todo with ID ${req.params.id}`);
});

module.exports = router;

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/', (req, res) => {
  // Implementasi mendapatkan semua data todos
  res.send('Get all todos');
});

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.post('/', (req, res) => {
  // Implementasi membuat todo baru
  res.send('Create a new todo');
});

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.put('/:id', (req, res) => {
  // Implementasi memperbarui todo berdasarkan ID
  res.send(`Update todo with ID ${req.params.id}`);
});

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.delete('/:id', (req, res) => {
  // Implementasi menghapus todo berdasarkan ID
  res.send(`Delete todo with ID ${req.params.id}`);
});

module.exports = router;
