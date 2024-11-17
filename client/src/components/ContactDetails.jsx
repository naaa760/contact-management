import React from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  VideoCall as VideoIcon,
  Chat as ChatIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
} from "@mui/icons-material";

const ContactDetails = ({ contact }) => {
  // Sample contact data - replace with actual data
  const selectedContact = contact || {
    firstName: "Neha",
    lastName: "Prasad",
    company: "Google",
    jobTitle: "Software Engineer",
    phone: "+91 415-864-9735",
    workPhone: "+91 530-957-6934",
    email: "neha09@gmail.com",
    workEmail: "neha@google.com",
    birthday: "Feb 6, 2003",
  };

  return (
    <Box
      sx={{
        width: 350,
        flexShrink: 0,
        bgcolor: "background.paper",
        borderLeft: 1,
        borderColor: "divider",
        p: 3,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Avatar
          sx={{ width: 80, height: 80, margin: "0 auto", mb: 2 }}
          src={`https://ui-avatars.com/api/?name=${selectedContact.firstName}+${selectedContact.lastName}`}
        />
        <Typography variant="h6">
          {`${selectedContact.firstName} ${selectedContact.lastName}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {selectedContact.jobTitle} at {selectedContact.company}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 1, mb: 3, justifyContent: "center" }}>
        <IconButton color="primary">
          <PhoneIcon />
        </IconButton>
        <IconButton color="primary">
          <VideoIcon />
        </IconButton>
        <IconButton color="primary">
          <ChatIcon />
        </IconButton>
        <IconButton color="primary">
          <EmailIcon />
        </IconButton>
      </Box>

      <Button
        fullWidth
        variant="contained"
        startIcon={<ScheduleIcon />}
        sx={{ mb: 3 }}
      >
        Schedule a call
      </Button>

      <List>
        <ListItem>
          <ListItemText primary="Personal" secondary={selectedContact.phone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Work" secondary={selectedContact.workPhone} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Personal" secondary={selectedContact.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Work" secondary={selectedContact.workEmail} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Birthday"
            secondary={selectedContact.birthday}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default ContactDetails;
