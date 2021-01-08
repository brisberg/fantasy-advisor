/**
 * Models representing various types and interfaces from Yahoo FantasySports
 * and FantasyPros
 */

export interface PlayerProjection {
  name: string;
  team: string;
  positions: string[];
  categories: {[label: string]: number};
}

/** Labels for scoring categories */
export type CategoryLabels =
    'PTS'|'REB'|'AST'|'BLK'|'STL'|'FG%'|'FT%'|'3PM'|'GP'|'MIN'|'TO';
