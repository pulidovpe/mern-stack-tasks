const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
   try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
   } catch (err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if (err.status == '503' || err.status == '504') return res.status(503).json({ error: err.message });
      return res.status(404).json({ error: err.message });
   }
});

router.get('/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const task = await Task.findOne({ _id });
      res.status(200).json(task);
   } catch (err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if (err.status == '503' || err.status == '504') return res.status(503).json({ error: err.message });
      return res.status(404).json({ error: err.message });
   }
});

router.post('/', async (req, res) => {
   try {
      const { title, description } = req.body;
      const newTask = new Task({ title, description});
      const saved = await newTask.save();
      res.status(201).json(saved);
   } catch (err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if (err.name == 'ValidationError') return res.status(400).json({ error: err.message });
      if (err.name == 'MongoError') return res.status(409).send({ error: 'Duplicate key error' });
      return res.status(404).json({ error: err.message });
   }
});

router.put('/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const { title, description } = req.body;
      const updTask = { title, description };
      const updated = await Task.findByIdAndUpdate(_id, updTask);
      res.status(200).json(updated);
   } catch (err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if (err.name == 'ValidationError') return res.status(400).json({ error: err.message });
      if (err.name == 'MongoError') return res.status(409).send({ error: 'Duplicate key error' });
      return res.status(404).json({ error: err.message });
   }
});

router.delete('/:id', async (req, res) => {
   try {
      const id = req.params.id;
      await Task.findByIdAndRemove(id);
      res.status(200).send({ status: 'Task deleted' });
   } catch (err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      return res.status(404).json({ error: err.message });
   }
});

module.exports = router;