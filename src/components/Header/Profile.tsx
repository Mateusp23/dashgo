import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex
      align="center"          
    >
      <Box mr="4" textAlign="right">
        <Text>Mateus Paulart</Text>
        <Text 
          color="gray.300" 
          fontSize="small"
        >
          mateuspaulart@gmail.com
        </Text>
      </Box>

      <Avatar 
        size="md" 
        name="Mateus Paulart"
        src="https://github.com/Mateusp23.png"
      />
    </Flex>
  );
}