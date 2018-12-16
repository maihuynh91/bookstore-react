import React, { Component } from 'react';
import {Slider} from '../Slider/Slider'
import {Footer} from '../Footer/Footer';

export class Home extends Component {
    render() {
        return (
            <div>
                <main className="container">

                    {/* <!-- Jumbotron Header --> */}
                    <Slider/>
                    {/* <!-- Page Features --> */}
                    <section className="row text-center">

                        <section className="col-lg-4">
                            <h4 className="card-title">Post</h4>
                            <p className="card-text">Share your thoughts about subjects that are important to you.</p>
                        </section>

                        <section className="col-lg-4">
                            <h4 className="card-title">Comment</h4>
                            <p className="card-text">Your opinion counts! But you have to make yourself heard first!</p>
                        </section>

                        <section className="col-lg-4">
                            <h4 className="card-title">Stay Informed</h4>
                            <p className="card-text">See the most active topics as well as trending subjects every day!</p>
                        </section>

                    </section>
                <hr/>
                <Footer />
                <hr />
                </main>
            </div>
        );
    }
}