import React from 'react';

const Info = () => {
    return(
        <div>
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4><i>Full Stack Developer</i></h4></li>
                <li className="collection-item"><i>I am an aspiring full-stack developer with 9 years of experience in software engineering and close to 7 years of experience in web / api development. I am passionate about learning and leveraging new technologies in my work and I am looking for roles which will help me learn and build up on my interests.</i></li>
            </ul>
        </div>
        
        <div>
            <ul className="collection with-header">
                <li className="collection-item">
                    <i>
                      This Application is developed on node and react with mongodb hosted on Heroku for demo purpose,
                      It has very few features such as Authentication using Google, submitting feedback etc.
                      I am still working on it implement some idea, Please feel free to submit some idea using the plus
                      icon below.
                    </i>
                </li>
            </ul>
        </div>
        
        <div>
          <ul className="collection with-header">
            <li className="collection-header"><h4><i>Work History</i></h4></li>
          </ul>
        </div>

        <div>
            <ul className="collection with-header">
                <li className="collection-item"><h4><i>HOOQ Digital Pvt Ltd </i></h4><i>Development of Backend microservices / API and web application.</i></li>
                <li className="collection-item">
                    <i>
                        Backend API for content delivery (like video feeds) / miscellaneous (user personalization / Authentication) / search engines (content search) in node js, golang.
                        Frontend for internal web application using react / redux / HTML5 / CSS
                    </i>
                </li>
                <li className="collection-item">
                    <i>
                        Frameworks - Koa, express, passportJS, react/redux, mocha for unit testing, artillery for loadtesting.
                    </i>
                </li>
                <li className="collection-item">
                     <i>
                        Platform / tools - AWS using terraform (infrastructure as code), Github Actions / Jenkins / Docker
                    </i>
                </li>
            </ul>
        </div>

         <div>
            <ul className="collection with-header">
                    <li className="collection-item"><h4><i>IBM Pvt Ltd </i></h4><i>Design and Development of Server side API for DBS Internet / Mobile Banking Application.</i></li>
                    <li className="collection-item">
                        <i>
                        Backend Financial Modules such as Fund Transfer / Account Summary / Cards Application etc using Java / J2ee / ejb.
                        Frontend is developed using JSP / javascript/ jQuery / HTML5 / CSS
                        </i>
                    </li>
                    <li className="collection-item">
                        <i>
                          Frameworks - Spring, Hibernate, Junit, eontec and Kony middleware
                        </i>
                    </li>
                    <li className="collection-item">
                        <i>
                          Platform / tools - IBM DB2, Websphere, JBoss etc.
                        </i>
                    </li>
            </ul>
         </div>
        </div>
    );  
}

export default Info;