import { ReactNode } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { RiDashboardLine, RiContactsLine } from 'react-icons/ri';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}