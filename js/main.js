import angular from 'angular';
import modules from './modules';

const CodingAcademyApp = angular.module('CodingAcademy', modules);

/* ===============
 Config
 =============== */
import config from './config/config';
import runConfig from './config/run.phase.js';

CodingAcademyApp.config(config);
CodingAcademyApp.run(runConfig);

/* ===============
 Components
 =============== */
import codingAcademy from './components/coding-academy';

codingAcademy(CodingAcademyApp);