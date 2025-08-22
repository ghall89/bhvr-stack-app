import { Text, Grid } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { type HotItem } from "bgg-client";

import HotItemCard from "./hot-item-card";
import { getRequest } from "../utils/api";

interface HotItemsGridProps {
  category: string;
}

export default function HotItemsGrid({ category }: HotItemsGridProps) {
  const { data, isLoading } = useQuery({
    queryFn: () => getRequest<HotItem[]>(`bgg/hot?c=${category}`),
    queryKey: ["bgg-hot", category],
  });

  return isLoading || !data ? (
    <Text>Loading...</Text>
  ) : (
    <Grid columns="5" align="center" gap="4">
      {data.map((item) => (
        <HotItemCard key={item.id} item={item} />
      ))}
    </Grid>
  );
}
