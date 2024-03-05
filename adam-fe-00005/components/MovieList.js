import { Box, Text, Badge } from "@chakra-ui/react";

const MovieList = ({ movies }) => {
  return (
    <Box>
      {movies.map((movie) => (
        <Box key={movie.id} p={4} borderWidth="1px" borderRadius="lg">
          <Text fontSize="xl">{movie.title}</Text>
          <Text>{movie.description}</Text>
          <Badge colorScheme="green">{movie.certification}</Badge>
        </Box>
      ))}
    </Box>
  );
};

export default MovieList;
