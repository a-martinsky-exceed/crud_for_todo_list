const Item = require('../models/item.model');

exports.create = function(req, res) {
  let item = new Item(
    {
      text: req.body.text
    }
  );

  item.save(function(err) {
    if(err) return next(err);
    res.send('Item succesfully added in list');
  });
};

exports.read = function(req, res) {
  Item.findById(req.params.id, function(err, item) {
    if(err) return next(err);
    res.send(item);
  });
};

exports.update = function(req, res) {
  Item.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, item) {
    if(err) return next(err);
    res.send('Item updated');
  });
}

exports.delete = function(req, res) {
  Item.findByIdAndRemove(req.params.id, function(err) {
    if(err) return next(err);
    res.send('Item deleted');
  });
};
