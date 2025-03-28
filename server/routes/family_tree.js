const router = require('express').Router();
const Tree = require('../models/treeModel');

router.get('/get_json/:id', async (req, res) => {
 
    const id = req.params.id;

    try {
        // Find document by ID but exclude _id in the result
        const tree = await Tree.findOne({ _id: parseInt(id) }, { _id: 0 });

        if (!tree) {
            return res.status(404).json({ error: 'No document found with this ID' });
        }

        res.json(tree);
    } catch (error) {
        console.error('❌ Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;