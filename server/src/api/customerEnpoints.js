const { Router } = require('express');

const CustomerEntry = require('../models/CustomerEntry');

 const router = Router();


 //CREATE A CUSTOMER
 router.post('/', async ( req, res, next ) => {
     try {
         const customerEntry = new CustomerEntry(req.body);
         const createdCustomerEntry = await customerEntry.save();
         res.json(createdCustomerEntry);

     } catch (error) {
         if(error.name === 'ValidationError'){
             res.status(422);
         }
         next(error);
         
     }
 });

 //READ ALL CUSTOMERS
 router.get( '/', async ( req, res, next ) => {
    try {
       const customerEntries = await CustomerEntry.find();
       res.json(customerEntries);
    } catch (error) {
        next(error);
    }
});


//READ ONE CUSTOMER
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const item = await CustomerEntry.findOne( {_id: id} );
    if(!item) return next();
    return res.json(item);
});

//UPDATE ONE CUSTOMER
router.put('/:id', async ( req, res, next) => {
    try {
        const { id } = req.params;
        const item = await CustomerEntry.findOne( {_id: id} );
        if(!item) return next();
        const updated = await CustomerEntry.updateOne( {_id: id} );
        res.json(updated);
        } catch (error) {
            next(error);
        }
});

//DELETE CUSTOMER
router.delete('/:id', async (req, res, next ) => {
    const { id } = req.params;
    await CustomerEntry.deleteOne( {_id:id} );
    res.status(200).send('Deleted Successfully');
});

 module.exports = router;