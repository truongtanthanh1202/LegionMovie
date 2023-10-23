import { Dimensions } from "react-native";

const SIZES: { width: number; height: number } = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const CategoriesArray: string[] = [
  "Action",
  "Drama",
  "Comedy",
  "Horror",
  "Adventure",
  "Thriller",
  "Romance",
  "Science",
  "Music",
  "Documentary",
  "Crime",
  "Fantasy",
  "Mystery",
  "Fiction",
  "Animation",
  "War",
  "History",
  "Televison",
  "Superheroes",
  "Anime",
  "Cartoon",
  "Sports",
  "Drama",
];

export { SIZES };
