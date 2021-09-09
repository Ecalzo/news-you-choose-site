import { query } from "../../lib/db";

const handler = async (req, res) => {
  try {
    const { sentiment, date } = req.query;
    if (!sentiment) {
      return res.status(400).json({ message: "`sentiment` required" });
    }
    if (!date) {
      return res.status(400).json({ message: "`date` required" });
    }
    if (typeof parseInt(sentiment.toString()) !== "number") {
      return res.status(400).json({ message: "`id` must be a nubmer" });
    }
    let sqlQuery;
    if (sentiment == 1) {
      sqlQuery = `
    SELECT id, title, content, src, url, sentiment, score, user_approve, user_disapprove, date, image_url
    FROM news
    WHERE sentiment = ?
    AND date > DATE_ADD(?, INTERVAL -10 DAY)
    AND score > 60
    LIMIT 20
    `;
    } else {
      sqlQuery = `
      SELECT id, title, content, src, url, sentiment, score, user_approve, user_disapprove, date, image_url
      FROM news
      WHERE sentiment = ?
      AND date > DATE_ADD(?, INTERVAL -10 DAY)
      AND score > 85
      LIMIT 20
      `;
    }
    const results = await query(sqlQuery, [sentiment, date]);

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
