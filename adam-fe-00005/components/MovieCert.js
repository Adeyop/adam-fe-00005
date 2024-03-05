import { Box, Text, Badge } from "@chakra-ui/react";

const MovieDetails = ({ movie }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text fontSize="xl">{movie.title}</Text>
      <Text>{movie.description}</Text>
      <Badge colorScheme="green">{movie.certification}</Badge>
    </Box>
  );
};

export default MovieDetails;
