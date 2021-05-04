import {Avatar,Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Thiago Nunes Miziara</Text>

      <Text color="gray.300" fontSize="small">
        thiagonmiziara@gmail.com
      </Text>
    </Box>
    <Avatar
      size="md"
      name="Thiago Nunes Miziara"
      src="https://github.com/thiagonmiziara.png"
    />
  </Flex>
  )
}
