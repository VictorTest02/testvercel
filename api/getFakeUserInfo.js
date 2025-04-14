import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    // Vérification du statut de la réponse de l'API externe
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Erreur dans la requête API externe' });
    }
    
    const data = await response.json();

    // Vérification si les données sont présentes
    if (!data) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}
