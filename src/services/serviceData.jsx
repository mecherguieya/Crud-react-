import API from "../config/axiosConfig";

export const get = (id) => {
	id = id || "";
	return API.get(`Movies/${id}`);
};

export const add = (body) => {
	console.log("body", body.name);

	return API.post(`Movies`, body);
};
export const update = async (id, data) => {
	const result = await API.put(`Movies/${id}`, data);
	console.log(result.data);
};

export const deleteMoviesAPI = (id) => {
	return API.delete(`Movies/${id}`);
};

