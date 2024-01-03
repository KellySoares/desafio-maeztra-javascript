import { Box } from "@mui/material";
import './index.scss';

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none"
        },
        ".expandIconWrapper": {
          display: "none"
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block"
        }
      }}
    >
      <div className="expandIconWrapper">-</div>
      <div className="collapsIconWrapper">+</div>
    </Box>
  );
};

export default CustomExpandIcon;