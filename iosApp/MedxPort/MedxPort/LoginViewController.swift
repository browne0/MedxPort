//
//  LoginViewController.swift
//  MedxPort
//
//  Created by Malik Browne on 2/19/16.
//  Copyright © 2016 medxport. All rights reserved.
//

import UIKit
import Firebase
import JVFloatLabeledTextField

class LoginViewController: UIViewController {

    @IBOutlet weak var usernameLabel: JVFloatLabeledTextField!
    
    @IBOutlet weak var passwordLabel: JVFloatLabeledTextField!
    
    let firebaseUrl = "https://medxport.firebaseio.com";
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        
    }
    
    @IBAction func onLogin(sender: AnyObject) {
        let username = usernameLabel.text
        let password = passwordLabel.text
        
        let ref = Firebase(url: firebaseUrl)
        ref.authUser(username, password: password,
            withCompletionBlock: { error, authData in
                if error != nil {
                    // There was an error logging in to this account
                    print(error)
                } else {
                    // We are now logged in
                    print("successful login")
                }
        })
        
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
