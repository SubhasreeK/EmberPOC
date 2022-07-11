/* eslint-env node */
'use strict';

module.exports = function (app) {
  const express = require('express');
  let userdetailsRouter = express.Router();
  let idCounter = 1;

  userdetailsRouter.get('/', function (req, res) {
    res.send({
      data: [
        {
          id: '1',
          attributes: 
          {
            firstname: 'Subhasree',
            lastname: 'K',
            email: 't@t.com',
            phone: '09876244312',
            address: 'XYZ,ABC,09121',
          },
          type: 'userdetail',
        },
      ]
    });
    res.status(200).end();
  });

  userdetailsRouter.post('/', function (req, res) {
    idCounter += 1;
    res.send({
      data: {
        id: idCounter,
        attributes: 
        {
          firstname: req.body.data.attributes.firstname,
          lastname: req.body.data.attributes.lastname,
          email: req.body.data.attributes.email,
          phone: req.body.data.attributes.phone,
          address: req.body.data.attributes.address,
        },
        type: 'userdetail'
      }
    });
    res.status(201).end();
  });

  userdetailsRouter.get('/:id', function (req, res) {
    res.send({
      data: {
        id: req.params.id,
        attributes: 
        {
          firstname: req.body.data.attributes.firstname,
          lastname: req.body.data.attributes.lastname,
          email: req.body.data.attributes.email,
          phone: req.body.data.attributes.phone,
          address: req.body.data.attributes.address,
        },
        type: 'userdetail',
      }
    });
    res.status(200).end();
  });

  userdetailsRouter.patch('/:id', function (req, res) {
    console.log(req);
    res.send({
      data: {
        id: req.params.id,
        attributes: 
        {
          firstname: req.body.data.attributes.firstname,
          lastname: req.body.data.attributes.lastname,
          email: req.body.data.attributes.email,
          phone: req.body.data.attributes.phone,
          address: req.body.data.attributes.address,
        },
        type: 'userdetail'
      }
    });
  });

  userdetailsRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/userdetails', require('body-parser').json());
  app.use('/api/userdetails',require('body-parser').json({ type: 'application/*+json' }),userdetailsRouter);
};
