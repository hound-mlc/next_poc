import { Stack } from "@mui/material";
import { FC } from "react";
import Navbar from "./Navbar";

const Layout: FC = ({ children }) => {
  return (
    <Stack direction="column" minHeight="100vh">
      <Navbar />
      <Stack
        flex={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 5 }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default Layout;
