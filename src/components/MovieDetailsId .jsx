// import { useEffect } from "react";
// import { useState } from "react";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";


// import movies from "./movies.json";

// function MovieDetailsId () {
//     const { id } = useParams();
// 	const [movie, setMovie] = useState({});
//     const src = `images/${movie.img}`;


//     useEffect(() => {
//         const movieSearch = movies.find((movie) => movie.id === id);
//         if (movieSearch) {
//             setMovie(movieSearch);
//         } else {
//             setMovie({});
//         }
//     }, [id]);
    

//   return (
//     <Container className="mt-5 py-5 m-5">
// 				<Card>
// 					<Row>
// 						<Col>
// 							<Card.Img variant="top" src={src} height={250} />{" "}
// 						</Col>
// 						<Col className="text-center">
// 							<Card.Body>
// 								<Card.Text>
// 									<b>Description :</b>
// 									<br /> <p className="mx-5"> {movie.description}</p>
// 								</Card.Text>
// 								<Card.Text>
// 									<b>Genre :</b>
// 									<br /> <p className="mx-5">{movie.genre} </p>
// 								</Card.Text>
// 								<Card.Text>
// 									<b>Year :</b>
// 									<br /> <p className="mx-5">{movie.year} </p>
// 								</Card.Text>
// 							</Card.Body>
// 						</Col>
// 					</Row>{" "}
// 				</Card>
// 		</Container>
//   )
// }

// export default MovieDetailsId 
