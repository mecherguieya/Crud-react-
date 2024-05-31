import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from '../services/serviceData';
import { addData} from "../redux/actions";


function AddMovie() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            title: '',
            year: '',
            img: '',
            genre: '',
            description: ''
        },
        onSubmit: async (values)=>{
            try {
                const response = await add(values);
                dispatch(addData(response.data));/*action */
                navigate('/movies');
            } catch (error) {
                console.error("Error adding competition:", error);
            }

        }})
        return (
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label> title</Form.Label>
                    <Form.Control type="text" name="title" value={formik.values.title} onChange={formik.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>year</Form.Label>
                    <Form.Control type="text" name="year" value={formik.values.year} onChange={formik.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>img</Form.Label>
                    <Form.Control type="text" name="img" value={formik.values.img} onChange={formik.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>genre</Form.Label>
                    <Form.Control type="text" name="genre" value={formik.values.genre} onChange={formik.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" type="text" name="description" value={formik.values.description} onChange={formik.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
}

export default AddMovie
