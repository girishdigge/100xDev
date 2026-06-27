import express from 'express';
import pg from 'pg';
import 'dotenv/config';

const app = express();
app.use(express.urlencoded({ extended: true }));

const pool = new pg.Pool({
  host: 'localhost',
  post: 5432,
  database: 'socialnetwork',
  user: 'girish',
  password: process.env.password,
});

pool.query('SELECT 1 + 1;').then((res) => {
  console.log(res.rows[0]);
});

app.get('/posts', async (req, res) => {
  const { rows } = await pool.query(`
        SELECT * FROM posts;
    `);
  res.send(`
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Lng</th>
                    <th>Lat</th>
                </tr>
            </thead>
            <tbody>
            ${rows
              .map((row, index) => {
                return `<tr>
                <td>${row.id}</td>
                <td>${row.lng}</td>
                <td>${row.lat}</td>
              </tr>`;
              })
              .join('')}
            </tbody>
        </table>           
        <form method="POST">
          <h3>Create Post </h3>
          <div>
            <label>Lng</label>
            <input name="lng"/>
          </div>
          <div>
            <label>Lat</label>
            <input name="lat"/>
          </div>
          <button type="submit">Create</button>
        </form> 
        `);
});

app.post('/posts', async (req, res) => {
  const { lat, lng } = req.body;
  console.log(lat, lng);

  const result = await pool.query(
    'INSERT into posts (lat,lng) VALUES($1,$2);',
    [lng, lat],
  );
  res.redirect('/posts');
});

app.listen(3000, () => {
  console.log('Listening on port 3000......');
});
