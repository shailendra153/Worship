const { request, response } = require('express');
const Package = require('../model/package.model');

exports.savePackage = (request, response, next) => {

    const package = new Package();
    package.packageName = request.body.packageName;
    package.packageUses = request.body.packageUses;
    package.packageDescription = request.body.packageDescription;
    package.categoryId = request.body.categoryId;
    package.packageImageUrl = "http://localhost:3000/images/" + request.file.fileName;
};