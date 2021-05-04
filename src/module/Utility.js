
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
    }  , 

    ByeolReview : (Obj) =>{
      return {        
        address_name  : Obj.adress ,
        road_address : Obj.road ,
        x : Obj.cordX ,
        y : Obj.cordY , 
        review_main_content : Obj.main ,
        review_good_content : Obj.good ,
        review_bad_content : Obj.bad ,
        traffic_point : Obj.traffic ,
        convenience_point : Obj.convenience ,
        noise_point : Obj.noise ,
        safety_point : Obj.safety ,
        email : Obj.user_email ,
        placeid : Obj.place ,
      }
     
    }
} 

