import { Flex, TextField, IconButton } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { useRef } from "react";

export default function SearchField() {
  const query = useRef(null);

  function handleSearch() {
    if (query.current) {
      const { value } = query.current;
      console.log(`Searching for: ${value}`);
    }
  }

  return (
    <Flex gap="1">
      <TextField.Root placeholder="Catan, 7 Wonders..." ref={query} />
      <IconButton onClick={handleSearch}>
        <MagnifyingGlassIcon width="18" height="18" />
      </IconButton>
    </Flex>
  );
}
