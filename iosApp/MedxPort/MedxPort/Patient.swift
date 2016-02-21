//
//  User.swift
//  MedxPort
//
//  Created by Malik Browne on 2/21/16.
//  Copyright © 2016 medxport. All rights reserved.
//

import UIKit
import Firebase

class Patient {
    
    private var _patientRef: Firebase!
    
    var _patientKey: String!
    var _first_name: String!
    var _last_name: String!
    var _address: String!
    var _city: String!
    var _state: String!
    var _zip: String!
    var _phoneNumber: String!
    var _age: String!
    var _dateOfBirth: String!
    
    var patientKey: String {
        return _patientKey
    }
    
    var first_name: String {
        return _first_name
    }
    
    var last_name: String {
        return _last_name
    }
    
    var address: String {
        return _address
    }
    
    var city: String {
        return _city
    }
    
    var state: String {
        return _state
    }
    
    var zip: String {
        return _zip
    }
    
    var phoneNumber: String {
        return _phoneNumber
    }
    
    var age: String {
        return _age
    }
    
    var dateOfBirth: String {
        return _dateOfBirth
    }
    
    // Initialize the new patient
    
    init(key: String, dictionary: Dictionary<String, AnyObject>) {
        self._patientKey = key
        
        // Within a patient, the following properties are children (attributes)
        
        if let first_name = dictionary["first_name"] as? String {
            self._first_name = first_name
        }
        
        if let last_name = dictionary["last_name"] as? String {
            self._last_name = last_name
        }
        
        if let address = dictionary["address"] as? String {
            self._address = address
        }
        
        if let city = dictionary["city"] as? String {
            self._city = city
        }
        
        if let state = dictionary["state"] as? String {
            self._state = state
        }
        
        if let zip = dictionary["zip"] as? String {
            self._zip = zip
        }
        
        if let phoneNumber = dictionary["phone"] as? String {
            self._phoneNumber = phoneNumber
        }
        
        if let age = dictionary["age"] as? String {
            self._age = age
        }
        
        if let dateOfBirth = dictionary["dob"] as? String {
            self._dateOfBirth = dateOfBirth
        }
        
        self._patientRef = DataService.dataService.USER_REF.childByAppendingPath(self._patientKey)
    }
}
