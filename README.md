# The Wonderful World of Widgets

This exercise reverses the roles from yesterday: today the API has been (partially) built for us. Our job is to build the React front end that consumes the API (using the node module `superagent`), and store the resulting data into component state.

## Setup

### 0. Installation and migrations

- [ ] Clone this repo and `cd` into the new directory
- [ ] Install packages, run migrations and seeds, and start the dev server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

  Commands might look like this:

  ```sh
  npm install
  npm run knex migrate:latest
  npm run knex seed:run
  npm run dev
  ```

  </details>

- [ ] Navigate to [http://localhost:5173](http://localhost:5173)

---
