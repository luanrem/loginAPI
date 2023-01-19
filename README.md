# Specifications 

## Summary

**FR** => Functional Requirements

**NFR** => Non-Functional Requirements

**BR** => Business Rules

### Basic functional requirements

- Register new users.
- Send confirmation emails.
- Provide secure options for recovering a forgotten password.
- Protect authentication data from unauthorized access.
- Support authentication via third-party services.
- Define roles and permission sets per role.

### User registration

**FR**
- It should be possible to register a new user

**NFR** 
- User [SHA-2](https://en.wikipedia.org/wiki/SHA-2) or [SHA-3](https://en.wikipedia.org/wiki/SHA-3) hashing functions

**BR** 
- It should not be possible to register a new user with the same email
- It should not be possible to register a new user with the same username
- It should have a valid email
- It should store the password hash instead of password itself 
- The tables should have different names in order to avoid sql injections attacks


### User authentication

**FR**
- It sould be possible to authenticate the user

**NFR** 
- N/A

**BR** 
- It should authenticate with the right parameters


### References

[User Authentication module](https://vertabelo.com/blog/user-authentication-module/)