import { Button, Card, Flex, Inset, Text } from "@radix-ui/themes";

import { HotItem } from "bgg-client";

interface HotItemCardProps {
  item: HotItem;
}

export default function HotItemCard({ item }: HotItemCardProps) {
  return (
    <Card size="2">
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src={item.thumbnail.value}
          alt="Bold typography"
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 140,
            backgroundColor: "var(--gray-5)",
          }}
        />
      </Inset>
      <Flex direction="column" gap="2">
        <Text
          as="p"
          size="3"
          align="center"
          weight="medium"
          wrap="nowrap"
          truncate
        >
          {item.name.value}
        </Text>
        <Button
          size="2"
          variant="surface"
          className="group-hover:scale-105 transition-transform"
        >
          View Details
        </Button>
      </Flex>
    </Card>
  );
}
