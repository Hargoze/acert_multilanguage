import React from "react";
import { Stack, Text, List, ListItem, Link} from "@chakra-ui/core";

const Layout = ({title, items, index, links}) => (
    <Stack fontSize="md" maxWidth="16%" align="left">
      <Text textTransform="uppercase" fontWeight="bold">{title}</Text>
        {items.map((item, i) => (
          <List pl="2" key={index + i} >
            <ListItem key={index + i}>
              <Link href={links[i]}>{item}</Link>
            </ListItem>
          </List>
        ))}
    </Stack>
);

export default Layout