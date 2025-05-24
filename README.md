
## Scripts

### `npm install`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3001) to view it in your browser.

### `nodemon server.mjs`

Launches the app runner

## Endpoints

### `/filter`
Initial filter to delete garbage files, leaving game screenshot pairs - Strategem screen/Weapons screen/Briefing screen

### `/generate`
Parsing of screenshot data, more filtering of invalid games, move game screenshots to storage folders of respective faction, upload to MongoDB

### `/generate`
Stich together Strategem screen/Weapons screen/Briefing screen into single image and upload to S3 for viewing in the 'Games' tab
