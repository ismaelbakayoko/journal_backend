const express = require('express')
const supabase = require('../supabase/clients')

router = express.Router()

router.post('/ajouter', async(req,res)=>{
    const {titre,content,matricule_user}=req.body;
   console.log(req.body)

    if(!titre ||  !matricule_user){
        return res.status(400).json({message: "Veuillez remplir tous les champs"})
    }
     const { data, error } = await supabase
    .from('post')
    .insert([{ titre, content, matricule_user }])
    .select();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
})

router.get('/user/:matricule_user', async (req, res) => {
  const { matricule_user } = req.params;
  const { data, error } = await supabase
    .from('post')
    .select('*')
    .eq('matricule_user', matricule_user);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

module.exports = router