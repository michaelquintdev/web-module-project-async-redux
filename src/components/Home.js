import React from 'react'
import List from './List'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import image1 from '../images/image1.jpg'
  import image2 from '../images/image2.jpg'
  import image3 from '../images/image3.jpg'

function Home() {
    return (
        <div>
            <MDBCarousel showIndicators showControls interval={45000}>
                <MDBCarouselInner>
                    <MDBCarouselItem className='active'>
                        <MDBCarouselElement src={image1} alt='...' />
                        <MDBCarouselCaption>
                            <h2>What is AniMenu?</h2>
                            <p>AniMenu is a work in progress project I've been developing intermittedly since I learned React and Redux at Lambda School. It combines two APIs, one that I made that holds user and list data, and an external api called Kitsu that stores all the anime data. It doesn't encompass everything I can do on a technical level, or even perfect form in terms of code, but it's a great showcase of how much I can do in a limited amount of time since I would work on this only once or twice a month. Currently on this site you can create an account, browse animes, add them to your list, and edit your list as you'd like. Over my job search I am going to be working on creating follower / friend functionality, as well as a restructuring of the code so the backend calls the Kitsu api as opposed to the frontend calling it. If you like to connect with me, or view the code for this project here are some links!</p>
                            <MDBBtn className='m-1' floating style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/michaelquintdev/' target='_blank'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn>
                            <MDBBtn className='m-1' floating style={{ backgroundColor: '#dd4b39' }} href='mailto:michaelquintdev@gmail.com' target='_blank'>
                                <MDBIcon fas icon="envelope" />
                            </MDBBtn>
                            <MDBBtn className='m-1' floating style={{ backgroundColor: '#4c75a3' }} href='https://github.com/AnimeProject' target='_blank'>
                                <MDBIcon fab icon='github' size='lg'/>
                            </MDBBtn>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src={image2} alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src={image3} alt='...' />
                        <MDBCarouselCaption>
                            <h5>That's a cat ^^</h5>
                            <p>(not really it's actually drawn, there could be a cat like it in real life though)</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
            <div className='m-3'>
                <List />
            </div>
        </div>
    )
}

export default Home
