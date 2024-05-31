export const getData = (events) => ({
	type: "getData",
	payload: events,
});

export const addData = (item) => ({
	type: "addData",
	payload: item,
});

export const updateData = (item) => ({
	type: "updateData",
	payload: item,
});

export const deleteData = (id) => ({
	type: "deleteData",
	payload: id,
});
