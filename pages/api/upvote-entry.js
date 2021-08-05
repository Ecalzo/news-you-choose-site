import { query } from "../../lib/db";

const handler = async (req, res) => {
  const { id } = req.body;
  try {
    if (!id) {
      return res.status(400).json({ message: "`id` is required" });
    }

    const results = await query(
      `
      UPDATE news
      SET user_approve = user_approve + 1
      WHERE id = ?
      `,
      [id]
    );
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
