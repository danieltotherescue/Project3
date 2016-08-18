var Search = require('../models/Search');

 module.exports = {
  index: index,
  destroy: destroy
 }

 function index(req, res, next){
   Search.find({}, function(err, searches){
     if(err) next(err);
     res.json(searches)
   });
   console.log('You got this far!');
 }

function destroy(req, res, next) {
  var id = req.params.id;
  console.log("Say goodbye to your little saved search", id);

  Search.remove({ _id: id}, function(err) {
    // Only triggers if there is a major problem; will not fail if trying to remove something that isn't there
    if (err) next(err);

    // If it's a successful delete
    res.json({msg: "Your search has been deleted, good sir or madam."});
  });
};
