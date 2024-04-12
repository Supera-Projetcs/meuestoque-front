import { NextApiRequest, NextApiResponse } from 'next';
import {ReplacementService} from '../../../../services/Replacement';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  if(!req.query.id){
    return res.status(400).json({ message: 'Falta o id' });
  }

  try {
    const replacementService = new ReplacementService();
    const data = Number(req.query.id);
    
    const updatedReplacement = await replacementService.deleteReplacement({id: data});
    return res.status(200).json(updatedReplacement);
  } catch (error) {
    console.error('Error updating replacement:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
