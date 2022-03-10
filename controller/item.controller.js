const Item = require('../model/item.model');

exports.addItem = (request, response, next) => {
    const item = new Item();
    item.itemName = request.body.itemName;
    item.itemPrice = request.body.itemPrice;
    item.itemUses = request.body.itemUses;
    item.itemDescription = request.body.itemDescription;
    item.itemQty = request.body.itemQty;
    item.itemDiscount = request.body.itemDiscount;
    item.categoryId = request.body.categoryId;
    item.itemImageurl = request.file.filename;
    item.save()
        .then(result => {
            return response.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ message: "OOps!Something Went Wrong" });
        });

};
exports.deleteItem = (request, response, next) => {
    Item.deleteOne({ _id: request.params.itemId })
        .then(result => {
            if (result.deletedCount)
                return response.status(201).json({ message: "success" });
            else
                return response.status(204).json({ message: "item is not find" });
        })
        .catch(err => {
            console.log(err)
            return response.status(500).json({ message: "OOps!Something Went Wrong" });
        });
};
exports.updateItem = (request, response, next) => {
    let imageUrl = request.body.oldImageurl;
    if (request.file)
        imageUrl = request.file.filename;
    const itemName = request.body.itemName;
    const itemPrice = request.body.itemPrice;
    const itemUses = request.body.itemUses;
    const itemDescription = request.body.itemDescription;
    const itemQty = request.body.itemQty;
    const itemDiscount = request.body.itemDiscount;
    const categoryId = request.body.categoryId;
    Item.updateOne({ _id: request.body.itemId }, {
            $set: {
                itemName: itemName,
                itemPrice: itemPrice,
                itemUses: itemUses,
                itemDescription: itemDescription,
                itemQty: itemQty,
                itemDiscount: itemDiscount,
                categoryId: categoryId

            }
        })
        .then(result => {
            if (result.modifiedCount)
                return response.status(205).json({ message: "success" });
            else
                return response.status(204).json({ message: "Item not Found" });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ message: "Oops!Something Went Wrong" })
        })

};
exports.viewItem = (request, response, next) => {
    Item.find()
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ message: "Oops!Something Went Wrong" });
        })

};