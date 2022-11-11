import {  List, ListItem, Paper } from "@mui/material";
import React,{useState} from "react";
import ItemList from "./ItemList";

function DocumentList(props) {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);
  return (
    <Paper
          className="scrollbarHidden"
          sx={{
            display: "flex",
            flexFlow: "column",
            height: "90vh",
            overflowY: "scroll",
          }}
        >
          <List
            sx={{ width: "100%", height: "calc(100vh-45px)", bgcolor: "white" }}
          >
            <ListItem>
              <ItemList open={open} setOpen={setOpen} data={props.hrDocs} />
            </ListItem>
            <ListItem>
              <ItemList
                open={open2}
                setOpen={setOpen2}
                data={props.mandateTrainingDocs}
              />
            </ListItem>
          </List>
        </Paper>
  )
}

export default DocumentList