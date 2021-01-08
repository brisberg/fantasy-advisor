import csvParser from 'csv-parser';
import * as fs from 'fs';

import {PlayerProjection} from './models';

/**
 * Importer opens the given csv file and parsed it into a set of
 * PlayerProjection objects.
 */
export function importProjections(fileName: string):
    Promise<PlayerProjection[]> {
  return new Promise((resolve, reject) => {
    const projections: PlayerProjection[] = [];
    fs.createReadStream(fileName)
        .pipe(csvParser())
        .on('data',
            (row) => {
              if (row['Player'] === '') {
                return;
              }

              console.log(row);
              const positions = row['Positions'] || '';
              projections.push({
                name: row['Player'],
                team: row['Team'],
                positions: positions.trim().split(','),
                categories: {},
              });
            })
        .on('end',
            () => {
              console.log('CSV file successfully processed');
              resolve(projections);
            })
        .on('error', reject);
  });
}
