import { query } from "../../lib/db";

const handler = async (req, res) => {
  const { uuid, article_id, sentiment } = req.body;
  try {
    if (!uuid || !article_id) {
      return res.status(400).json({
        message: "`uuid` and `article_id` are required",
      });
    } else if (![0, 1, 2].includes(sentiment)) {
      return res.status(400).json({
        message: " `sentiment` should be in `[0, 1, 2]`",
      });
    }

    const results = await query(
      `
      INSERT INTO votes (uuid, article_id, sentiment)
      VALUES (?, ?, ?)
      `,
      [uuid, article_id, sentiment]
    );
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
