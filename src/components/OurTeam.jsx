import React from 'react'

const OurTeam = () => {
  return (
    <>
        <div className="container">
            <section className="our-team">
                <h2 className="team-heading">Our Team</h2>

                <div className="team-wrap">
                    <article className="team-one">
                        <span className="team-backsqr"></span>
                        <img src="./img/team-two.png" alt="team members" className="team-img" />
                        <h6 className="team-name">Agnes Frances</h6>
                        <small className="team-post">Treasurer</small>
                    </article>
                    <article className="team-one">
                        <span className="team-backsqr team-backsqr_blue"></span>
                        <img src="./img/team-two.png" alt="team members" className="team-img" />
                        <h6 className="team-name">Jane Doe</h6>
                        <small className="team-post">P.R.O</small>
                    </article>
                    <article className="team-one">
                        <span className="team-backsqr"></span>
                        <img src="./img/team-two.png" alt="team members" className="team-img" />
                        <h6 className="team-name">Agnes Frances</h6>
                        <small className="team-post">Treasurer</small>
                    </article>
                    <article className="team-one">
                        <span className="team-backsqr team-backsqr_blue"></span>
                        <img src="./img/team-two.png" alt="team members" className="team-img" />
                        <h6 className="team-name">Mike Frances</h6>
                        <small className="team-post">Treasurer</small>
                    </article>
                </div>
            </section>
        </div>
    </>
  )
}

export default OurTeam