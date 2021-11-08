import React from 'react'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <MDBCol>
            <Link to = {`/anime/${props.anime.mal_id}`}>
                <MDBCard className='h-100' alignment='center'>
                        <div className='bg-image hover-zoom'>
                            <MDBCardImage src={props.anime.image_url} position='top' alt='...' />
                        </div>
                        <MDBCardBody>
                                <MDBCardTitle>{props.anime.title}</MDBCardTitle>
                            <MDBCardText>
                                Rank: {props.anime.rank}
                            </MDBCardText>
                        </MDBCardBody>
                </MDBCard>
            </Link>
        </MDBCol>
      );
}

export default Card