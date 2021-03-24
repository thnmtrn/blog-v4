export default function badges(req, res) {
  res.status(200).json({
    schemaVersion: 1,
    label: 'hello',
    message: 'sweet world',
    color: 'orange',
  })
}
