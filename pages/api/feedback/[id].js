import fs from 'fs';
import path from 'path';

const feedbackId = (req, res) => {
  const { id } = req.query;

  console.log(id)
  const filePath = path.join(process.cwd(), 'data', 'feedback.json');
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  const file = data.find((el) => el.id === id);
  res.status(200).json({ file });

};

export default feedbackId;