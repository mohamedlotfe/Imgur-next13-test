// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ users: [{ id: 1 }, { id: 2 }, { id: 3 }] })
}
