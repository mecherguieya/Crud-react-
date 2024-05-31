import  { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function Movie(props,deleteDataa) {
    const [movie, setMovie] = useState(props.movie);
    const src = `images/${movie.img}`;
  return (
    <>
    
        <Card>
				<Card.Img variant="top" src={src} height={250} />
				<Card.Body>
					<Card.Title>
						<NavLink to={`${movie.title}`}> {movie.title}</NavLink>
					</Card.Title>
					{/* <NavLink to={`/movies/${movie.id}`}>{movie.id}</NavLink> */}
					<Card.Text>year: {movie.year}</Card.Text>
					<Card.Text>genre: {movie.genre}</Card.Text>
					<Card.Text>description: {movie.description}</Card.Text>
					<Button variant="danger" onClick={() => props.deleteDataa(movie.id)}>Supprimer</Button>
                </Card.Body>
        </Card>
{/* 
		<tr>
				<td>{movie.title}</td>
				<td>{movie.title}</td>
				<td>{movie.year}</td>
				<td>{movie.genre}</td>
				<td>{movie.description}</td>
				<td>
				<Button variant="danger" onClick={() => props.deleteDataa(movie.id)}>Supprimer</Button>
				</td>
		</tr> */}



		
                
		</>

   
    
  );
}

export default Movie
