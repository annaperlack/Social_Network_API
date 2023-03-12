const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    // addReaction,
    // removeReaction,

}= require('../../controllers/thoughtControllers');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// router.route('/:thoughtId/reaction').post(addReaction);

// router.route('/:studentId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
