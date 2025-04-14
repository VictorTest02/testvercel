export default async function handler(req, res) {
  const { login } = req.query;

  if (!login || !/^[a-zA-Z0-9_-]{2,20}$/.test(login)) {
    return res.status(400).json({ error: 'Login invalide' });
  }

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${login}`);
    const data = await response.json();

    if (data.length === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    res.status(200).json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}