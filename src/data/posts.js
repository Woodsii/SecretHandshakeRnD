
import { ObjectId } from "mongodb";

import validation from "../modules/utils/validations.js";
import {posts} from "../config/mongoCollections.js"

/* Posts Collection Structure:
_id: mongo ObjectId
title: string title
content: big blob of text, might want some way to format it.
PublicationDate: Date and time when published
Tags: list of tags, subdocument or whatever.
*/

let exportedMethods = {
    async getAllPosts() {
        const postsCollection = await posts();
        const snippetList = await postsCollection.find({}).toArray();
        return snippetList
    },

    async getPostById(id) {
        const postsCollection = await posts();
        const post = await postsCollection.find({_id: new ObjectId(id) }).toArray();
        
        if (!post) {
            throw "Error: post not found";
        }

        return snippet;
    },

    async addPost(postTitle, postContent, postTags) {
        postTitle = validation.validateString(postTitle);
        postContent = validation.validateString(postContent);
        postTags = validation.validateTags(postTags);

        newPost = {
            title: postTitle,
            content: postContent,
            dateCreation: new Date().toString(),
            dateUpdate: dateCreation,
            tags: postTags
        }

        const postsCollection = await posts();
        const insertInfo = await postsCollection.insertOne(newPost);

        if (!insertInfo) throw "Error: Insert Failed!";

        return await this.getPostById(insertInfo.insertedId.toString());
    }
}

export default exportedMethods;