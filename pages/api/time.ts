import { NextApiRequest, NextApiResponse } from 'next';
import { now } from 'dot-beat-time';

type TimeResponse = {
    time: string;
}

export default function time(
    req: NextApiRequest,
    res: NextApiResponse<TimeResponse>
  ) {
    const internetTime = now(true)
    res.status(200).json({ time: internetTime })
  }
  