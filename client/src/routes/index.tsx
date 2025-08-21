import { Container, Text, Grid, Box, Tooltip } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import { type HotItem } from "bgg-client";

import { useQuery } from "@tanstack/react-query";

import { getRequest } from "../utils/api";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, isLoading } = useQuery({
    queryFn: () => getRequest<HotItem[]>("bgg/hot"),
    queryKey: ["bgg-hot"],
  });

  return (
    <Container>
      {isLoading || !data ? (
        <Text>Loading...</Text>
      ) : (
        <Grid columns="3" align="center">
          {data.map((item) => (
            <Tooltip key={item.id} content={item.name.value}>
              <img src={item.thumbnail.value} alt={item.name.value} />
            </Tooltip>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Index;
