import { query } from "../../lib/db";

const handler = async (req, res) => {
  const { state_id, article_id, sentiment } = req.body;
  try {
    if (!state_id || !article_id) {
      return res.status(400).json({
        message: " `state_id`, `article_id` and `sentiment` are required",
      });
    } else if (![0, 1, 2].includes(sentiment)) {
      return res.status(400).json({
        message: " `sentiment` should be in [0, 1, 2]",
      });
    }

    const results = await query(
      `
      INSERT INTO votes (state_id, article_id, sentiment)
      VALUES (?, ?, ?)
      `,
      [state_id, article_id, sentiment]
    );
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
