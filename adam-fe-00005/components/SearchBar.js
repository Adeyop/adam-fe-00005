import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (query) => {
    // Call the onSearch callback with the search query
    onSearch(query);
  };

  return (
    <InputGroup>
      <Input placeholder="Search for movies" onChange={(e) => handleSearch(e.target.value)} />
      <InputRightElement>
        <Button onClick={() => handleSearch()} leftIcon={<SearchIcon />} colorScheme="teal">
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
