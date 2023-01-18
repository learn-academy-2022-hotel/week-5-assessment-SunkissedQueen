# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?
From Developer Moss
Your answer: When you call super in a class, you are telling your code to reference the parent of the class you are on. For example, say I have a 'Dog' class with 'breed' initialized. I also have the child class 'Pet' referencing back to 'Dog'. By calling super on 'breed', it indicates that the information for that initialized value is coming from 'Dog' rather than being defined in 'Pet'.

Researched answer: In ruby, calling super in a class is a way of calling your original class. Super is used in the concept of class inheritance, meaning that you are working on the child of a parent class. Take the class 'GoldenRetriever', a child of the class 'Dog'. Calling super within 'GoldenRetriever' will take data from 'Dog', rather than it needing to be redefined within 'GoldenRetriever'.

More content to add: talked about using it in the class setting, write out the example

2. What is a gem?
From Developer Bora
Your answer: A gem is a type of testing dependencies that are required to be installed when testing Ruby code with RSpec.

Researched answer: A Gem in Ruby refers to a package manager module that you can install and use on every project. Additionally, a gem is a self-contained format that contains a standard format
to distribute many different types of programs and libraries within the Ruby language. The “gem” command itself is called to build, download, upload, and install these Gem packages. This is useful because it allows us because by using gems, it allows us to extend the functionality of Ruby by implementing additional code, functionalities, and other frameworks that are not typically found in the standard Ruby library.

More content to add: give examples, share the journey of not understanding the tool to how you understand its benefit

3. What is a relational database? Are there other kinds of databases?
From Developer Dave
Your answer: a relational database is one that is linked to other databases. we did this today with the credit card info. we had one database for owners and another for credit cards. There are other kinds but I don't know what they are

Researched answer: A relational database is a type of database that organizes data into tables with rows and columns, and uses a system of relations to link the data in these tables to each other. Other types of databases include NoSQL databases, document databases, graph databases, time-series databases, and in-memory databases.

More content to add: more detail with examples, experience using tables

4. What are primary keys? Why are they important?
From Developer Oscar
Your answer: Primary keys are used when referencing databases on sql. They will allow models to be associated with one another. It allows for a table to be referenced

Researched answer: The primary key  is  a unique identifier that gets assigned to data as it gets collected within one of the models in the database. It can later be referenced in additional tables to create a relationship with any child tables and have access to the data.

More content to add: provide an example

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: From Developer Romeo

Researched answer: The HTTP verbs are post, get, put, patch, and delete. The post verb will create data, the get verb will display data, the patch, and post verbs will update, and the delete verb will delete data. The accomplishments of all the CRUD actions using HTTP verbs will create a full-stack application.

More content to add: how the crud actions are linked to the http verbs, examples of their use

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Representational State Transfer, set of standards to create usable routes using http verbs GET, POST, PUT/PATCH, and DELETE

2. Model validations: checking that data models met certain constraints before use

3. Params: parameters, object that behaves like a hash, Rails creates params from the HTTP request

4. ERB: Embedded ruby, embed data from the backend database into a html file

5. API: Application Programming Interface, allow different applications to connect
