import React, { Component } from "react";
import './foot.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <section id="lab_social_icon_footer">
                    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
                    <div class="container">
                        <div class="text-center center-block">
                            <a href="https://www.facebook.com/TorryHarrisIntegrationSolutions/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                            <a href="https://twitter.com/torryharris"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                            <a href="https://www.linkedin.com/company/torry-harris-integration-solutions/"><i id="social-ln" class="fa fa-linkedin-square fa-3x social"></i></a>
                        </div>
                        &copy; Marshmallow 2019
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer;