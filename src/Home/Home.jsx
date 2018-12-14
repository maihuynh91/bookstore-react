import React, {Component} from 'react';

export class Home extends Component{
    render(){
        return(
            <div>
                <main class="container">
        
                    {/* <!-- Jumbotron Header --> */}                  
                    <header class="jumbotron my-4">
                        <h1 class="display-3">Welcome to Our Bookstore</h1>
                        <p class="lead">AA Bookstore where you can search and buy your favorite books.</p>
                        <a href="/users/sign_up" class="btn btn-primary btn-lg">Sign up</a>
                    </header>

                    {/* <!-- Page Features --> */}
                    <section class="row text-center">

                        <section class="col-lg-4">
                            <h4 class="card-title">Post</h4>   
                            <p class="card-text">Share your thoughts about subjects that are important to you.</p>
                        </section>

                        <section class="col-lg-4">
                            <h4 class="card-title">Comment</h4>
                            <p class="card-text">Your opinion counts! But you have to make yourself heard first!</p>
                        </section>

                        <section class="col-lg-4">
                            <h4 class="card-title">Stay Informed</h4>
                            <p class="card-text">See the most active topics as well as trending subjects every day!</p>
                        </section>

                    </section>
                    

                </main>
            </div>
        );
    }
}