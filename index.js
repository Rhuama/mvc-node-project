const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore =  require('session-file-store')(session)
const flash = require('express-flash')
const db = require('./db/conn');

const app = express()


db.query('SELECT 1 + 1 AS resultado', (err, results) => {
  if (err) {
    console.error('Erro ao executar a consulta:', err.message);
  } else {
    console.log('Resultado da consulta:', results[0].resultado);
  }
});