import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

function Layout() {
  return (
    <Flex bg="#353131" h="100vh" maxW="100vw" alignItems="center">
      <Outlet />
    </Flex>
  );
}

export default Layout;
