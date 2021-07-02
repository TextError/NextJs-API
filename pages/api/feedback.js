import fs from 'fs';
import path from 'path';

const feedback = (req, res) => {
  if(req.method === 'POST') {
    const { email, text } = req.body;
    const file = { id: new Date().toISOString, email, text }

    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(file);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: 'Success!', file });
  } else {
    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json({ data });
  }
};

export default feedback;