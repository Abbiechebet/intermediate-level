>MONGODB AND MONGOOSE
>MongoDB is a schema-less NoSQL document database. 
>It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. 
>This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.

>NOSQL AND SQL

>>NOSQL TERMINOLOGIES
Collections
Documents
Fields (properties or attributes)


>>SQL TERMINOLOGIES
Tables 
Records or Rows 
Columns


>>MONGOOSE
Provides a straight-forward, schema-based solution to model your application data.(ODM)

>Schema
 Mongoose schema is a document structure for a collection

>SchemaTypes
SchemaTypes define the expected data type for individual fields (String, Number, Boolean, and so on).

You can also pass in useful options like required to make a field non-optional, default to set a default value for the field, and many more.

>Models
a model is an object which is created from the schema and it contains methods for creating, finding, updating and deleting documents.
