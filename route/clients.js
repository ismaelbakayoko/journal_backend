const express = require('express')
const supabase = require('../supabase/clients')

router = express.Router()


router.get("/listClient",async (req, res) => {
    const {data , error}= await supabase.from('users').select('*')
    if(error){
      return  res.status(500).json({error:error.message});
    }
    res.json(data)
})


router.post("/ajouter", async (req, res) => {
     const { nom, email } = req.body;

  if (!nom || !email) {
    return res.status(400).json({ error: 'nom et email sont requis' });
  }

  const { data, error } = await supabase
    .from('users')
    .insert([{ nom, email }])
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json(data[0]);
})

router.put("/modifier/:id", async(req, res) => {
 const { id } = req.params;
  const { nom, email } = req.body;

  if (!nom && !email) {
    return res.status(400).json({ error: 'Au moins un champ (nom ou email) est requis' });
  }

  const updateData = {};
  if (nom) updateData.nom = nom;
  if (email) updateData.email = email;

  const { data, error } = await supabase
    .from('users')
    .update(updateData)
    .eq('id', id)
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data[0]);
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: `Utilisateur ${id} supprimé` });
});

module.exports = router;