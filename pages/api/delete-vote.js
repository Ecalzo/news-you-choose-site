import { query } from "../../lib/db";

const handler = async (req, res) => {
  const { uuid, article_id } = req.query;
  try {
    if (!uuid || !article_id) {
      return res
        .status(400)
        .json({ message: "`uuid` and `article_id` are required" });
    }
    const results = await query(
      `
      DELETE FROM votes
      WHERE uuid = ?
      AND article_id = ?
  `,
      [uuid, article_id]
    );
    res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
