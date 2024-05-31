import  { useEffect, useState } from 'react'
import Movie from './Movie'
import { Col, Container, Row } from 'react-bootstrap'
import { deleteMoviesAPI, get } from '../services/serviceData';
import { deleteData } from '../redux/actions';


import  movies from './movies.json'
import { useDispatch } from 'react-redux';


function Movies() {
    const [search, setSearch] = useState("");
	const [data, setData] = useState([]);
	const [noResult, setNoResult] = useState(false);
    const dispatch = useDispatch(); // Initialise dispatch

	useEffect(() => {
		fetchData();
	}, []);
	
	
	const fetchData =async () => {
	
		try {
			const result = await get();
			setData(result.data)
			console.log("gett", data)
		} catch (error) {
			console.log(error)
		}
	}

	const handleChangeSearch = (e) => {
		setSearch(e.target.value);
		setNoResult(false);
	};

	const submit = () => {
		const searchData = movies.filter((e) => e.title === search);
		if (searchData.length > 0) {
			setData(searchData);
		} else {
			setData([]);
			setNoResult(true);
		}
	};

// Fonction pour supprimer une compétition
const deleteDataa = async (id) => {
    console.log('ID avant la suppression :', id);
    await deleteMoviesAPI(id); // Supprimer les données via votre API
    console.log('ID après la suppression :', id);
    dispatch(deleteData(id)); // Dispatch de l'action pour supprimer les données
    window.location.reload(); // Recharge de la page
};

    return (
        <div>
            <Container className="py-5 mt-5 ">
            <input
					type="text"
						name="search"
						onChange={(e) => handleChangeSearch(e)}
					/>
                <button type="submit"  onClick={submit}>
						Submit
					</button>
                <Row className="py-5 mt-5 ">
                {data.map((element, index) => {
					return (
						<Col className="text-center" key={index} md={4}>
							<Movie movie={element} deleteDataa={deleteDataa} />
						</Col>
					);
				})}
                </Row>
                {noResult && <p>no data found</p>}
            </Container>


			{/* <Container className="py-5 mt-5 ">
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
						<th>Image</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Description</th>
                        <th>Action</th>
						</tr>
					</thead>
					<tbody>
						{data.map((element, index) => {
							return <Movie key={index}  movie={element}/>;
						})}
					</tbody>
				</table>
			</div>
		</Container> */}



        </div>
    )
}

export default Movies
