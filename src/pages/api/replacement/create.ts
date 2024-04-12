import { NextApiRequest, NextApiResponse } from 'next';
import {ReplacementService} from '../../../services/Replacement';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const replacementService = new ReplacementService();
    const  data  = req.body; 
 
    const createdReplacement = await replacementService.CreateReplacement(data);
    return res.status(200).json(createdReplacement);
  } catch (error) {
    console.error('Error creating replacement:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
