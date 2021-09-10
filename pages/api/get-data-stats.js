import { query } from "../../lib/db";

const handler = async (req, res) => {
	try {
		const { negative, neutral, positive, date} = req.query;

		if (!date) {
			return res.status(400).json({ message: "`date` required" });
		}

		let sqlQuery;
		sqlQuery = `
		SELECT
				COUNT(IF(sentiment = 0, sentiment, NULL)) AS negative,
				COUNT(IF(sentiment = 1, sentiment, NULL)) AS neutral,
				COUNT(IF(sentiment = 2, sentiment, NULL)) AS positive,
				date
		FROM news

		WHERE date > DATE_ADD(?, INTERVAL - 50 DAY)

		GROUP BY date
		ORDER BY date
		`;
	
	const results = await query(sqlQuery, [date]);

	return res.json(results);
	} catch (e) {
		res.status(500).json({ message: e.message});
	}
};

export default handler;