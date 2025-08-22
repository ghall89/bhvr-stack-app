import { Box, Select, Flex, Heading } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import HotItemsGrid from "../components/hot-items-grid";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [category, setCategory] = useState("boardgame");

  const options = [
    {
      label: "Board Game",
      value: "boardgame",
    },
    {
      label: "Designer",
      value: "boardgameperson",
    },
    {
      label: "Publisher",
      value: "boardgamecompany",
    },
  ];

  return (
    <Box>
      <Flex justify="between" align="center" my="3">
        <Heading as="h2">Hot on BGG</Heading>
        <Select.Root value={category} onValueChange={setCategory}>
          <Select.Trigger />
          <Select.Content>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                {option.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Flex>
      <HotItemsGrid category={category} />
    </Box>
  );
}

export default Index;
