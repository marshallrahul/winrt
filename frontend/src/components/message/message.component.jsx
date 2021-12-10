import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const Message = ({ children }) => {
  return (
    <Box
      width="100%"
      border="1px"
      borderColor="gray.200"
      marginBottom={"2rem"}
      px={2}
      py={4}
    >
      <Flex align="center">
        <Text fontSize="xl" color="red">
          {children}
        </Text>
      </Flex>
    </Box>
  );
};

export default Message;
