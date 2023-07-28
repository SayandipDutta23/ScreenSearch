# MovieLand React App

ScreenSearch is a simple React web application that allows users to search for movies using the Open Movie Database (OMDB) API. Users can enter a movie title in the search bar, and the app will display a list of movies that match the search term. Each movie is presented in a card format, showing its title, release year, and type. If the movie has a poster, it will be displayed; otherwise, a placeholder image will be shown.

## Features

- Search for movies by entering a movie title in the search bar.
- Displays a list of movies that match the search term, along with relevant details.
- Supports default movie display when the app loads or when the search bar is empty.
- Provides a user-friendly interface with responsive design for various screen sizes.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Material-UI: A popular React UI framework for creating stylish components.
- OMDB API: An external API that provides movie data.

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies using `npm install`.
3. Obtain an API key from the OMDB API website (https://www.omdbapi.com/) and replace `YOUR_API_KEY` in the `API_URL` constant with your actual API key in `App.js`.
4. Run the app using `npm start`.
5. Open your web browser and visit `http://localhost:3000` to view the MovieLand app.

## Usage

- Enter a movie title in the search bar and click the search icon to find movies related to the search term.
- The app will display a list of movies that match the search term.
- If no movies are found for the search term, an appropriate message will be shown.
- To view more details about a movie, click on the movie card to be redirected to its IMDB page.

## Known Issues

- The OMDB API may return "Movie not found!" for certain search terms. In such cases, the app will display an appropriate error message.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

