import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5fff5"
    >
      <Paper
        elevation={3}
        sx={{
          padding: "40px",
          textAlign: "center",
          borderRadius: "20px",
          maxWidth: "400px",
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 80, color: "green" }} />

        <Typography variant="h4" mt={2} fontWeight="bold">
          Order Placed!
        </Typography>

        <Typography mt={1} color="text.secondary">
          Your organic products will be delivered soon 🌿
        </Typography>

        <Typography mt={2}>
          <strong>Order ID:</strong> #LNG12345
        </Typography>

        <Typography>
          <strong>Delivery:</strong> 2-3 Days
        </Typography>

        <Box mt={4} display="flex" gap={2} justifyContent="center">
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/cat")}
          >
            Continue Shopping
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate("/cart")}
          >
            View Orders
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Order;