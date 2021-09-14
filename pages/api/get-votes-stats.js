import { query } from "../../lib/db";

const handler = async (req, res) => {
  try {
    let sqlQuery;
    sqlQuery = `
		SELECT
				COUNT(IF(sentiment = 0, sentiment, NULL)) AS negative,
				COUNT(IF(sentiment = 1, sentiment, NULL)) AS neutral,
				COUNT(IF(sentiment = 2, sentiment, NULL)) AS positive
    FROM votes
		WHERE date(created_at) > DATE_ADD(current_date(), INTERVAL - 1 DAY)
		`;

    const results = await query(sqlQuery);

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
