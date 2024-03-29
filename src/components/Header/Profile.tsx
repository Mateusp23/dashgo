import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean; 
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"          
    >
      {
        showProfileData && 
        <Box mr="4" textAlign="right">
          <Text>Mateus Paulart</Text>
          <Text 
            color="gray.300" 
            fontSize="small"
          >
            mateuspaulart@gmail.com
          </Text>
        </Box>
      }

      <Avatar 
        size="md" 
        name="Mateus Paulart"
        src="https://github.com/Mateusp23.png"
      />
    </Flex>
  );
}