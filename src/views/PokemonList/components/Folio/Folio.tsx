import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PokemonCard } from "blocks";

const mock = [
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		title: "Goby",
		color: "#04AB0F",
	},
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		title: "Nike",
		color: "#04AB0F",
	},
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		title: "Curology",
		color: "#04AB0F",
	},
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		title: "Trek",
		color: "#04AB0F",
	},
];

const Folio = (): JSX.Element => {
	const theme = useTheme();
	return (
		<Box>
			<Grid container spacing={2}>
				{mock.map((item, i) => (
					<Grid key={i} item xs={12} sm={4} md={3}>
						<PokemonCard image={item.image} title={item.title} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Folio;
