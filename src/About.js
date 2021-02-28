import React from 'react'
import Archives from './Archives'


const About = () => {
    return (
        <div className="row">
            <div className="col-md-8">
                <div className="p-4 mb-3 rounded">
                    <h4 className="font-italic">About</h4>
                    <p className="mb-0">
                        Etiam porta 
                        <em>
                            sem malesuada magna
                        </em> 
                        mollis euismod. Cras mattis consectetur purus sit amet fermentum.
                        Aenean lacinia bibendum nulla sed consectetur.
                    </p>                  
                </div>    
            </div>
            <Archives />
        </div>
            
    )
}

export default About
