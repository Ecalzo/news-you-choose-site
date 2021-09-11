import { query } from "../../lib/db";

const handler = async (req, res) => {
  const { state_id } = req.query;
  try {
    if (!state_id) {
      return res.status(400).json({ message: "`state_id` is required" });
    }
    const results = await query(
      `
      DELETE FROM votes
      WHERE state_id = ?
  `,
      state_id
    );
    res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
