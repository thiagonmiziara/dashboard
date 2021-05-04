import {Avatar,Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}
export function Profile({showProfileData = true}: ProfileProps){
  return (
    <Flex align="center">
   {showProfileData && (
      <Box mr="4" textAlign="right">
      <Text>Thiago Nunes Miziara</Text>
      <Text color="gray.300" fontSize="small">
        thiagonmiziara@gmail.com
      </Text>
    </Box>
   )}
    <Avatar
      size="md"
      name="Thiago Nunes Miziara"
      src="https://github.com/thiagonmiziara.png"
    />
  </Flex>
  );
}
