import React, { useState } from "react";
import { blogData } from "../components/Data.tsx"; // Ensure this path is correct
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  useMediaQuery,
} from "@mui/material";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const isMobile = useMediaQuery("(max-width: 600px)"); // Detect mobile screens

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const closePopup = () => {
    setSelectedBlog(null);
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "50px 20px",
          textAlign: "center",
          backgroundColor: "#121212",
          color: "white",
          marginBottom: "40px",
        }}
      >
        <Typography
          variant="h3"
          style={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          Blogs
        </Typography>
      </div>

      {/* Blog Cards */}
      <Grid
        container
        spacing={4}
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {blogData.map((blog) => (
          <Grid
            item
            xs={12}
            key={blog.id}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row", // Mobile: column, Desktop/Tablet: row
                alignItems: isMobile ? "center" : "flex-start",
                padding: "20px",
                width: "100%",
                maxWidth: "800px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(15px)",
                borderRadius: "15px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease", // Smooth animation for hover effect
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05) translateZ(15px)"; // Scale up and add 3D effect
                e.currentTarget.style.boxShadow =
                  "0 30px 50px rgba(0, 0, 0, 0.8)"; // Add a deeper shadow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateZ(0px)"; // Reset to original scale
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0, 0, 0, 0.5)"; // Reset shadow
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                image={blog.image}
                alt={blog.title}
                style={{
                  width: isMobile ? "100%" : "40%", // Full width on mobile, 40% on desktop
                  height: isMobile ? "auto" : "200px", // Adjust height for desktop
                  borderRadius: "10px",
                  marginBottom: isMobile ? "20px" : "0", // Margin for mobile
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: isMobile ? "100%" : "60%", // Full width on mobile, 60% on desktop
                  paddingLeft: isMobile ? "0" : "20px", // Padding for desktop
                  textAlign: isMobile ? "center" : "left", // Center-align on mobile
                  color: "white",
                }}
              >
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: "#d1d1d1",
                    marginBottom: "20px",
                  }}
                >
                  {blog.excerpt}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-end", // Center for mobile, right-align for desktop
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      background: "#358de5",
                      color: "white",
                      boxShadow: "0px 4px 10px rgba(107, 228, 255, 0.3)",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReadMore(blog)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#4a9cf1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#358de5";
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Popup Dialog */}
      {selectedBlog && (
        <Dialog
          open={Boolean(selectedBlog)}
          onClose={closePopup}
          maxWidth="lg"
          fullWidth
        >
          <DialogTitle
            style={{
              fontWeight: "bold",
              fontSize: "28px",
              color: "#333",
            }}
          >
            {selectedBlog.title}
          </DialogTitle>
          <DialogContent style={{ padding: "20px" }}>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              style={{
                width: "100%",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            />
            <Typography
              variant="body1"
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#555",
              }}
            >
              {selectedBlog.content}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={closePopup}
              style={{
                background: "#3596e5",
                color: "white",
                padding: "10px 20px",
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Blogs;
