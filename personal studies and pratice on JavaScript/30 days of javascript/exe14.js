/**
 * Error Handling
 * 
 JavaScript similar to python or Java provides an error-handling 
 mechanism to catch runtime errors using try-catch-finally block.

 .The try statement allows us to define a block of code to be 
 tested for errors while it is being executed.

 Catch block is used to log an error or display specific error  
 messages to the user.

 finally: finally block will always be executed regardless of the 
 occurrence of an error. 

 throw: the throw statement allows us to create a custom error

Error Types
ReferenceError:is thrown if we use a variable that has not been declared.
SyntaxError: are mistakes in the code that violate the rules of the programming language
TypeError: A type error has occurred


 */
 try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }

  