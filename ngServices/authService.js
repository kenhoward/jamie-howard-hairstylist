var app = angular.module('noServer');

app.service('authService', function(){
  //Just a reference to the firebase endpoint
  var firebaseUrl = 'https://noserver.firebaseio.com/'
  //Creates an object using the Firebase Constructor with our endpoint passed in
  var firebaseLogin = new Firebase(firebaseUrl);

  var user = false;

  this.getUser = function() {
    return user;
  }

  var loginCallback = function(cb, err, authData) {
    if (err) {
      switch (err.code) {
        case "INVALID_EMAIL":
          // handle an invalid email
          case "INVALID_PASSWORD":
          // handle an invalid password
          default:
        }
    } else if (authData) {
        // user authenticated with Firebase
        console.log("Logged In! User ID: " + authData.uid);
        user = authData
        cb(authData); //gives the authenticated user to our callback
    }
  };

  //login method to be called from our controller. The callback is then passed the authenticated user
  this.login = function(user, cb){ // this is run from the loginCtrl when you action that there
    firebaseLogin.authWithPassword({ // gives the credentials
      email : user.email,
      password : user.password
    }, loginCallback.bind(null, cb));
  };

  //Step 3 of Registration
  this.register = function(user, cb){
    firebaseLogin.createUser({  // can lookup on firebase what createUser does
      email: user.email, // email is included by the .createUser
      password: user.password // password as well.
    }, function(error) {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              console.log("The new user account cannot be created because the email is already in use.");
              break;
            case "INVALID_EMAIL":
              console.log("The specified email is not a valid email.");
              break;
            default:
              console.log("Error creating user:", error);
          }
        } else {
            console.log("User created successfully"); // look in login & auth on my Firebase dashboard (hasn't been saved in database yet)
            firebaseLogin.authWithPassword({  // .authWithPassword in Firebase says that it is created, but doesn't mean that it has been authenticated or save to the database
              email : user.email,
              password : user.password
            }, function(err, authData) { // Firebase will call this function once the email has been authenticated
                if (err) { // if truthy, follows the below:
                  switch (err.code) {
                    case "INVALID_EMAIL":
                      // handle an invalid email
                      case "INVALID_PASSWORD":
                      // handle an invalid password
                      default:
                    }
                } else if (authData){ // if falsey, follows the below:
                    authData.name = user.name; // firebase gives it a name (whatever was typed in the 'full name' portion)
                    authData.timestamp = new Date().toISOString();  // simple timestamp
                    firebaseLogin.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData); // call our reference, goes to child/place users then go to that simple login with that user ID (uid).
                    cb(authData); // look for callback in the loginCtrl.js
                    /*
                    Alternative is to give each person a user ID

                    That would look like:

                    formatEmailForFirebase : function (authData.ui) to replace ('simplelogin:', '')).set(authData);
                    */
                    
                }
              });
        }
    });
  };
});

// updated