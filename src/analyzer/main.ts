#!/usr/bin/env node

import {importProjections} from './importer';

/** Main runner for projections analyzer */
const projections = importProjections(
    'data/FantasyPros_Week_3_Fantasy_Basketball_Projections.csv');

projections.then((project) => {
  console.log(project);
});
