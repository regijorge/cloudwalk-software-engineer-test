# About this Project
This repository contains my solution for the [CloudWalk Software Engineer Test](https://gist.github.com/cloudwalk-tests/704a555a0fe475ae0284ad9088e203f1). The project follows Clean Architecture and SOLID principles.

## Architecture
```plaintext
- application
  |-- services
  |   |-- LogParserService
  |   |-- LogService
  |   |-- ReportService
  |-- useCases
  |   |-- generateReport
  |   |-- parseLogs
- domain
  |-- entities
  |   |-- ParsedLogEntity
  |   |-- ReportEntity
- infrastructure
  |-- cli
  |-- fileStorage
  |-- repositories
  |-- server
- interfaces
  |-- api
  |-- cli
```

# Usage

## Install Dependencies
```
yarn install
# or 
npm install
```

## Run tests
```
yarn test
# or 
npm run test
```

## Interfaces

### CLI
You can run all tasks using the CLI:
#### Yarn
```
yarn cli download-logs
yarn cli parse-logs
yarn cli generate-report --matchId <matchId> --reportType <option> --sortBy <option>
```

#### NPM
```
npm run cli download-logs
npm run cli parse-logs
npm run cli generate-report --matchId <matchId> --reportType <option> --sortBy <option>
```

### API
Only the report endpoint is available:
```
yarn api
// or
npm run api
```

### Services
#### Doanload logs
This service downloads logs from [Github](https://gist.githubusercontent.com/cloudwalk-tests/be1b636e58abff14088c8b5309f575d8/raw/df6ef4a9c0b326ce3760233ef24ae8bfa8e33940/qgames.log) and saves then to local storage at <code>infrastructure/fileStorage/Logs</code>

#### Parse logs
This service retrieves the log file from fileStorage, parses it into a JSON-formatted file, and stores it in the same location with the name <code>parsedLogs.json</code>

Example of parsed data:
```
[
  {
    "matchId": "2",
    "time": "20:37",
    "event": "InitGame",
    "data": null
  },
  {
    "matchId": "2",
    "time": "20:38",
    "event": "ClientConnect",
    "data": null
  },
  {
    "matchId": "2",
    "time": "20:40",
    "event": "Item",
    "data": null
  },
  {
    "matchId": "2",
    "time": "20:54",
    "event": "Kill",
    "data": {
      "value1": "1022",
      "value2": "2",
      "value3": "22",
      "isKillerPlayer": false,
      "killer": "<world>",
      "victim": "Isgalamido",
      "cause": "MOD_TRIGGER_HURT"
    }
  }
]
```

#### Report Service
This service generates reports and can be requested via CLI or API.

You can request two types of reports:
* Kill data of players (kill)
* Death causes (death)

Kill report response example:
```
{
  "report": {
    "totalKills": 768,
    "totalDeaths": 1008,
    "worldDeaths": 240,
    "selfDeaths": 61,
    "totalPlayers": 10,
    "players": [
      "Isgalamido",
      "Mocinha",
      "Zeh",
      "Dono da Bola",
      "Assasinu Credi",
      "Oootsimo",
      "UnnamedPlayer",
      "Maluquinho",
      "Mal",
      "Chessus"
    ],
    "ranking": [
      {
        "player": "Isgalamido",
        "totalKills": 178,
        "totalDeaths": 144,
        "worldDeaths": 40,
        "selfDeaths": 9,
        "score": 138
      },
      {
        "player": "Zeh",
        "totalKills": 154,
        "totalDeaths": 169,
        "worldDeaths": 34,
        "selfDeaths": 4,
        "score": 120
      },
      {
        "player": "Oootsimo",
        "totalKills": 132,
        "totalDeaths": 121,
        "worldDeaths": 24,
        "selfDeaths": 6,
        "score": 108
      },
      {
        "player": "Assasinu Credi",
        "totalKills": 123,
        "totalDeaths": 170,
        "worldDeaths": 32,
        "selfDeaths": 20,
        "score": 91
      },
      {
        "player": "Dono da Bola",
        "totalKills": 88,
        "totalDeaths": 174,
        "worldDeaths": 40,
        "selfDeaths": 15,
        "score": 48
      },
      {
        "player": "Chessus",
        "totalKills": 41,
        "totalDeaths": 54,
        "worldDeaths": 9,
        "selfDeaths": 1,
        "score": 32
      },
      {
        "player": "Mocinha",
        "totalKills": 0,
        "totalDeaths": 2,
        "worldDeaths": 0,
        "selfDeaths": 0,
        "score": 0
      },
      {
        "player": "UnnamedPlayer",
        "totalKills": 0,
        "totalDeaths": 1,
        "worldDeaths": 0,
        "selfDeaths": 0,
        "score": 0
      },
      {
        "player": "Maluquinho",
        "totalKills": 1,
        "totalDeaths": 1,
        "worldDeaths": 1,
        "selfDeaths": 0,
        "score": 0
      },
      {
        "player": "Mal",
        "totalKills": 51,
        "totalDeaths": 172,
        "worldDeaths": 60,
        "selfDeaths": 6,
        "score": -9
      }
    ]
  }
}
```

Death report response example:
```
{
  "id": "2",
  "report": {
    "totalDeaths": 1,
    "worldDeaths": 8,
    "selfDeaths": 2,
    "totalCauses": 3,
    "causes": [
      "MOD_TRIGGER_HURT",
      "MOD_ROCKET_SPLASH",
      "MOD_FALLING"
    ],
    "ranking": [
      {
        "cause": "MOD_ROCKET_SPLASH",
        "totalDeaths": 1,
        "worldDeaths": 0,
        "selfDeaths": 2
      },
      {
        "cause": "MOD_TRIGGER_HURT",
        "totalDeaths": 0,
        "worldDeaths": 7,
        "selfDeaths": 0
      },
      {
        "cause": "MOD_FALLING",
        "totalDeaths": 0,
        "worldDeaths": 1,
        "selfDeaths": 0
      }
    ]
  }
}
```

Parameters:
| sortBy  | reportType      | Coluna 3   |
|---------|-----------------|------------|
| death   | kill and death  | Sort by totalDeaths field  |
| world   | kill and death  | Sort by worldDeaths fields  |
| self    | kill and death  | Sort by selfDeaths field  |
| kill    | kill            | SOrt by totalKills field  |
| score   | kill            | Sort by score field  |

Usage example on <CLI>
```
# Get kill report for all matches sorted by score
yarn cli generate-report -r kill -s score 

# or
npm run cli generate-report -r kill -s score 
```

```
# Get death report for specific match sorted by world
yarn cli generate-report -m 2 -r death -s world 

# or
npm run cli generate-report -m 2 -r death -s world 
```

API endpoint examples:
```
# Get kill report for all matches sorted by score
curl http://localhost:3000/api/reports?reportType=kill&sortBy=score

# Get death report for specific match sorted by world
curl http://localhost:3000/api/reports/2?reportType=death&sortBy=world
```