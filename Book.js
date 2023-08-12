const mongoose = require('mongoose');
const { model } = require("mongoose");
const uuid = require('uuid');
const randomId = uuid.v4();
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Book = new Schema(
    {
        book_title: {
            type: String,
            require: true,
        },
        author_name: {
            type: String,
            require: true,
        },
        category_name: {
            type: String,
            require: true,
        },
        publisher: {
            type: String,
            require: true,
        },
        random: {
            type: String,
            default: () => randomId
        },
        slug: {
            type: String,
            slug:['name','random']
        },
        publication_year: {
            type:String,
            require: true,
        },
        quantity: {
            type:Number,
            require: true,
        },
        rate: {
            type:Number,
            default:5
        },
        purchase_price: {
            type:Number,
            require: true,
        },
        rental_price: {
            type:Number,
            require: true,
        },
        image: {
            type: String,
            require:true,
        },
        description:{
            type:String,
            require:true
        },
        tags:{
            type:[String]
        },
        rented:{
            type:Number,
            require:true,
            default:0
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('books', Book);
