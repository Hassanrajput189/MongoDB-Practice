use("sigma");

// command to create a new collection
// db.createCollection("collection Name");

// command to insert data into the collection 
// db.collection_name.insertOne({key:value})
// example: db.webdev.insertOne({"name":"Hassan"})
// can be done with isertMany([takes an Array])

// command to read or search or find any data from the db
// db.collection_name.find({price:0});
// example:let b = db.webdev.find({"Student Name": "Muhammad Hassan Rajput"});
// console.log(b);
// The no of total occurance can be seen as 
// console.log(b.count());
// console.log(b.toArray()) will return an Array of all occurance

// You can also use findOne(data) which will give one the first element that matches the data or the first search result

// command to update the data into the database collection

// db.collection_name.(updateOne/updateMany)({filter,$set:{update}})

// example:db.webdev.updateOne({"Platform": "Youtube"},{$set:{"Platform": "YouTube"}})

// command to delete data from the database
// db.webdev.deleteOne({"Student Name": "Muhammad Hassan Rajput"})
// deleteMany can also be used to delete many document at the same time

