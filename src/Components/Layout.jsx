import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => (
  <Box minH="100vh" display="flex" flexDirection="column">
    {children}
  </Box>
);

export default Layout;