import React, { useState, useEffect } from 'react';
import LoadingSpinner from './../../Shared/LoadingSpinner/LoadingSpinner'
import './Team.css'

const Team = () => {
    // getting team members
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('https://infinite-lowlands-70374.herokuapp.com/team')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (
        <section>
            <h1 className='text-center pt-5'>Our Team</h1>
            <div className='team'>
                {
                    members[0]?.name ?
                        members.map(member =>
                            <div className="profile-card" key={member._id}>
                                <div className="img">
                                    <img src={member.image} alt="" />
                                </div>
                                <div className="caption">
                                    <h3>{member.name}</h3>
                                    <p>{member.post}</p>

                                </div>
                                <div className="social-links">
                                    <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                    <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>) :
                        <LoadingSpinner />
                }
            </div>
        </section>
    );
};

export default Team;