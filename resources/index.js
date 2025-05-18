const fs = require('fs');
const path = require('path');

const csvToJson = (req, res) => {
  const filePath = path.join(__dirname, '/csv'); // Adjust path to your CSV file

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return res.status(500).json({ error: 'Failed to read CSV file' });
    }

    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    const result = lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header.trim()] = values[index]?.trim() || '';
        return obj;
      }, {});
    });

    res.status(200).json(result);
  });
};

module.exports = csvToJson;
