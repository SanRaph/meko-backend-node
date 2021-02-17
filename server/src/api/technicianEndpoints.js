const { Router, json } = require('express');

const TechnicianEntry = require('../models/TechnicianEntry');

const router = Router();

//CREATE TECHNICIAN
router.post('/', async ( req, res, next ) => {
    try {
        const technicianEntry = new TechnicianEntry(req.body);
        const createdTechnicianEntry = await technicianEntry.save();
        res.json(createdTechnicianEntry);

    } catch (error) {
        if(error.name === 'ValidationError'){
            res.status(422);
        }
        next(error);
    }
} );


//READ ALL TECHNICIANS
router.get('/', async (req, res, next) => {
    try {
        const technicianEntries = await TechnicianEntry.find();
        res.json(technicianEntries);
    } catch (error) {
        next(error);
    }
});

//READ ONE TECHNICIAN
router.get('/:id', async ( req, res, next ) => {
    try {
        const { id } = req.params;
        const item = await TechnicianEntry.findOne( {_id: id} );
        if(!item) return next();
        return res.json(item);

    } catch (error) {
        next(error);
    }
});

//UPDATE TECHNICIAN
router.put('/:id', async ( req, res, next ) => {
    try {
        const { id } = req.params;
        const item = await TechnicianEntry.findOne( {_id:id} );
        if(!item) return next();
        const updated = await TechnicianEntry.updateOne( {_id:id} );
        res.json(updated);

    } catch (error) {
        next(error)
    }
});


//DELETE TECHNICIAN 
router.delete('/:id', async ( req, res) => {
    try {
        const { id } = req.params;
        await TechnicianEntry.deleteOne( {_id:id} );
        res.status(200).send('Deleted Successfully');
    } catch (error) {
        next(error);
    }
} );

module.exports = router;