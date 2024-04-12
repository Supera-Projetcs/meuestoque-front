import { NextApiRequest, NextApiResponse } from 'next';
import {ReplacementService} from '../../../services/Replacement';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const replacementService = new ReplacementService();
    const data = req.body;

    const updatedReplacement = await replacementService.updateReplacement(data);
    return res.status(200).json(updatedReplacement);
  } catch (error) {
    console.error('Error updating replacement:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
