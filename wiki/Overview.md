# Overview

The system has a few primary goals:

- Evaluate the strength of a particular roster in a particular league
- Enumerate all possible reasonable pickup/drops
- Select from the best possible options
- Execute the roster movements on the Yahoo API


# Evaluation

To evaluate a particular roster, we need a couple of things:

- Fetch the scoring rules of the particular league being played.
- Fetch the current state of all players in the league
- Fetch "predictive" scores of all players for this week
- Calculate expected score for all teams in the league


# Enumeration

Enumerate all possible waiver pickups to see which would be beneficial.

# Execute changes

Actually perform the roster swaps on Yahoo through their API.
This will require an API client.
