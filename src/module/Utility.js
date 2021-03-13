
export const APIObjConverter = {
    GoogleUser : ( Obj )=> {
         return {
            id_token : Obj.idToken ,
            server_auth_code : Obj.serverAuthCode ,
            scopes : Obj.scopes ,
            user: {
              email: Obj.user.email ,
              id: Obj.user.id ,
              given_name: Obj.user.givenName ,
              family_name: Obj.user.familyName ,
              photo: Obj.user.photo ,
              name : Obj.user.name
            }
        };
    }
} 

