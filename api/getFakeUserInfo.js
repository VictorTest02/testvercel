import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();

    if (!data) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}