import { createContext, useState } from "react";

export const FavouritesContext = createContext({
	ids: [],
	addFavourite: (id) => {},
	removeFavourite: (id) => {},
});

export default function FavouritesContextProvider(props) {
	const [ids, setIds] = useState([]);

	const addFavourite = (id) => {
		setIds((prevIds) => [...prevIds, id]);
	};

	const removeFavourite = (id) => {
		setIds((prevIds) => prevIds.filter((i) => i !== id));
	};

	const context = {
		ids,
		addFavourite,
		removeFavourite,
	};

	return (
		<FavouritesContext.Provider value={context}>
			{props.children}
		</FavouritesContext.Provider>
	);
}
