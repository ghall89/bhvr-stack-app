import { Box, Heading, Flex } from "@radix-ui/themes";

import SearchField from "./search-field";

export default function TopBar() {
  return (
    <Box className="bg-slate-100">
      <Flex justify="between" maxWidth="1000px" p="3" mx="auto" align="center">
        <Heading as="h1" size="4">
          BG Buddy
        </Heading>
        <SearchField />
      </Flex>
    </Box>
  );
}
