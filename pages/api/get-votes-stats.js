import { query } from "../../lib/db";

const handler = async (req, res) => {
  try {
    let sqlQuery;
    sqlQuery = `
		SELECT
				sentiment, COUNT(sentiment) as counts
		FROM votes
		WHERE date(created_at) > DATE_ADD(current_date(), INTERVAL - 1 DAY)
		GROUP BY sentiment
    ORDER BY sentiment
		`;

    const results = await query(sqlQuery);

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
