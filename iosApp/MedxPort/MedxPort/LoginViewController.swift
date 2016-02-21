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
    
    @IBOutlet weak var errorLabel: UILabel!
    
    let firebaseUrl = "https://medxport.firebaseio.com";
    
    @IBOutlet weak var footerView: UIView!
    
    @IBOutlet weak var signInButton: UIView!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        let emailImageView = UIImageView()
        let emailImage = UIImage(named: "email")
        
        emailImageView.frame = CGRect(x: 0, y: 0, width: (emailImage?.size.width)!+20.0, height: (emailImage?.size.height)!+10.0)
        emailImageView.image = emailImage
        emailImageView.contentMode = UIViewContentMode.Center
        
        usernameLabel.leftView = emailImageView
        usernameLabel.leftViewMode = UITextFieldViewMode.Always
        
        let passwordImageView = UIImageView()
        let passwordImage = UIImage(named: "password")
        
        passwordImageView.frame = CGRect(x: 0, y: 0, width: (passwordImage?.size.width)!+20.0, height: (passwordImage?.size.height)!+20.0)
        passwordImageView.image = passwordImage
        passwordImageView.contentMode = UIViewContentMode.Center
        
        passwordLabel.leftView = passwordImageView
        passwordLabel.leftViewMode = UITextFieldViewMode.Always
        
        self.view.backgroundColor = UIColor(patternImage: UIImage(named: "medxport-bg")!)
        
        signInButton.layer.borderColor = UIColor.grayColor().CGColor
        signInButton.layer.borderWidth = 0.0
        signInButton.layer.cornerRadius = 5
        signInButton.layer.masksToBounds = false
        signInButton.layer.shadowRadius = 2.0
        signInButton.layer.shadowColor = UIColor.blackColor().CGColor
        signInButton.layer.shadowOffset = CGSizeMake(1.0, 1.0)
        signInButton.layer.shadowOpacity = 1.0
        signInButton.layer.shadowRadius = 1.0
        
        footerView.backgroundColor=UIColor.lightGrayColor().colorWithAlphaComponent(0.30)
        
        let border = CALayer()
        let width = CGFloat(1.0)
        border.borderColor = UIColor.lightGrayColor().CGColor
        border.frame = CGRect(x: 0, y: usernameLabel.frame.size.height - width, width:  usernameLabel.frame.size.width, height: usernameLabel.frame.size.height)
        
        border.borderWidth = width
        usernameLabel.layer.addSublayer(border)
        usernameLabel.layer.masksToBounds = true
        
        let border2 = CALayer()
        let width2 = CGFloat(1.0)
        border2.borderColor = UIColor.lightGrayColor().CGColor
        border2.frame = CGRect(x: 0, y: passwordLabel.frame.size.height - width2, width:  passwordLabel.frame.size.width, height: passwordLabel.frame.size.height)
        
        border2.borderWidth = width2
        passwordLabel.layer.addSublayer(border2)
        passwordLabel.layer.masksToBounds = true
    }
    
    @IBAction func onLogin(sender: AnyObject) {
        let username = usernameLabel.text
        let password = passwordLabel.text
        
        let ref = Firebase(url: firebaseUrl)
        ref.authUser(username, password: password,
            withCompletionBlock: { error, authData in
                if error != nil {
                    // There was an error logging in to this account
                    UIView.animateWithDuration(0.3, animations: {
                        self.errorLabel.alpha = 1.0
                    })
                    print(error)
                    
                } else {
                    // We are now logged in
                    print("successful login")
                    self.performSegueWithIdentifier("loginSegue", sender: authData)
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
