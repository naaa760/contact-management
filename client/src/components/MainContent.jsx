import React, { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  IconButton,
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";
import ContactsTable from "./ContactsTable";
import ContactForm from "./ContactForm";

const MainContent = () => {
  const [openForm, setOpenForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddContact = () => {
    setOpenForm(true);
  };

  const handleEditContact = (contact) => {
    console.log("Edit contact:", contact);
    // Implement edit logic
  };

  const handleDeleteContact = (contactId) => {
    console.log("Delete contact:", contactId);
    // Implement delete logic
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, maxWidth: "900px" }}>
      <Box sx={{ display: "flex", gap: 2, mb: 3, alignItems: "center" }}>
        <TextField
          fullWidth
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          size="small"
        />
        <IconButton>
          <FilterIcon />
        </IconButton>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddContact}
        >
          Add Contact
        </Button>
      </Box>

      <ContactsTable
        onEditContact={handleEditContact}
        onDeleteContact={handleDeleteContact}
      />

      <ContactForm open={openForm} handleClose={() => setOpenForm(false)} />
    </Box>
  );
};

export default MainContent;
