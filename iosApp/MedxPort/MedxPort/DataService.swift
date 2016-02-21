//
//  DataService.swift
//  MedxPort
//
//  Created by Malik Browne on 2/21/16.
//  Copyright © 2016 medxport. All rights reserved.
//

import Foundation
import Firebase

let BASE_URL = "https://medxport.firebaseio.com"

class DataService {
    static let dataService = DataService()
    
    private var _BASE_REF = Firebase(url: "\(BASE_URL)")
    private var _USER_REF = Firebase(url: "\(BASE_URL)/users")
    private var _CLINIC_REF = Firebase(url: "\(BASE_URL)/Clinics")
    
    var BASE_REF: Firebase {
        return _BASE_REF
    }
    
    var USER_REF: Firebase {
        return _USER_REF
    }
    
    var CURRENT_USER_REF: Firebase {
        let userID = NSUserDefaults.standardUserDefaults().valueForKey("uid") as! String
        
        let currentUser = Firebase(url: "\(BASE_REF)").childByAppendingPath("users").childByAppendingPath(userID)
        
        return currentUser!
    }
    
    var CLINIC_REF: Firebase {
        return _CLINIC_REF
    }
}