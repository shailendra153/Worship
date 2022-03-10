const Category = require('../model/category.model');
exports.saveCategory = (request, response, next) => {
    const category = new Category();
    category.categoryName = request.categoryName;
    category, categoryImageUrl = request.file.filename;
    category.save()
        .then(result => {
            return response.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ message: "Oops!Something is Wrong" });
        });
};

exports.deleteCategory = (request, response, next) => {
    Category.deleteOne({ _id: request.params.categoryId })
        .then(result => {
            if (result.deletedCount)
                return response.status(202).json({ message: "success" });
            else
                return response.status(204).json({ message: "Item Not found" });

        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ message: "Oops!Something Went Wrong" });
        });
};
exports.updateCategory = (request, response, next) => {
    const categoryName = request.body.categoryName;
    let imageUrl = request.body.oldImageUrl;
    if (request.file)
        imageUrl = request.file.filename;
    id = request.body.categoryId;
    Category.updateOne({ _id: id }, {
            $set: {
                categoryName: categoryName,
                categoryImageUrl: imageUrl
            }

        })
        .then(result => {
            if (result.modifiedCount)
                return response.status(202).json({ messgae: "success" });
            else
                return response.status(204).json({ messgae: "item not Found" })
        })
        .catch(err => {
                console.log(err);
                return response.status(500).json({ message: "Oops!Something Went Wrong" })
            }

        )

};
exports.viewCategory = (request, response, next) => {

    Category.find()
        .then(result => {
            return response.status(200).json(result)
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ message: "Oops! Something Went Wrong" });
        });


}