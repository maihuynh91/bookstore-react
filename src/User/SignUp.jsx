import React, {Component} from 'react';

export class SignUp extends Component{
    render(){
        return(
            <div>
                <main>
                    <br />
                 <h1>Sign up</h1>

                <form action="/users" method="post">

                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small className="text-muted" id="emailHelp">email address must be a valid address</small>
                </div>

                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" name="password" aria-describedby="passwordHelp" placeholder="Enter password" />
                    <small className="text-muted" id="passwordHelp">password must match confirmation below</small>
                </div>

                <div className="form-group">
                    <label for="passwordConfirmation">Password confirmation</label>
                    <input type="password" className="form-control" name="passwordConfirmation" aria-describedby="passwordHelp" placeholder="Enter password confirmation" />
                </div>

                <button type="submit" className="btn btn-primary">Sign up</button>
                </form>
            </main>
            </div>
        );
    }
}