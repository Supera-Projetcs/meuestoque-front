import { NextApiRequest, NextApiResponse } from 'next';
import { DashboardReplacementService, ReplacementService } from '../../../services/Replacement';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const replacementService = new DashboardReplacementService();
    const replacements = await replacementService.getDasboard();

    return res.status(200).json(replacements);
  } catch (error) {
    console.error('Error fetching replacements:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
