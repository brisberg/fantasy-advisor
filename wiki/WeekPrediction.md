# Week Predictions

To calculate the predicted standings for a partiuclar week and team configuration, these are the data required:

- Predicted per-game scoring of each player for each category.
- Game Schedule for each team for the week
- Current line up of players on a Fantasy Team

### Data Sources

Prediction scores are a `.csv` files downloaded from FantasyPros. It can be manually downloaded, but I should find the ability scrap it automatically.

Game Schedule is provided by FantasyPros, but there may be a API which provides this.
Project: `https://github.com/rlabausa/nba-schedule-data`
URL: `https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2020/league/00_full_schedule.json`

Current Line up of players for a Fantasy League will provided by the Yahoo API. See `yahoo-fantasy-api` npm package.

### Calculation

Using this, we can calculate the expected scores for each category by multipliying the per-game estimates by number of games per week for each player for all players in `type P` positions on your roster.
