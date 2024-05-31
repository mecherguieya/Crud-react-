import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
	return (
		<>
			<nav className="navigation">
				<ul>
					<li>
						<a className="navbar-brand" href="#">
							ExamDB
						</a>
					</li>
					<li>
						<NavLink exact to="/" activeClassName="active" >
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/movies" activeClassName="active">
						Movies
						</NavLink>
						</li>
						<li>
						<NavLink to="/addmovie" activeClassName="active">
						+Movie
						</NavLink>
					</li>
					
				</ul>
			</nav>
		</>
	);
}
