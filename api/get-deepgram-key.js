export default function handler(req, res) {
    res.status(200).json({ key: process.env.DEEPGRAM_API_KEY });
}
