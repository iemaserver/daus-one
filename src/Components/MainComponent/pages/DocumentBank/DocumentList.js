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
            sx={{  height: "calc(100vh-45px)", bgcolor: "white" , }}
          >
            <ListItem>
              <ItemList open={open} setOpen={setOpen} data={props.hrDocs} header="HR Documents" list={"CV, Certificate of Completion of training (CCT),BLS, AED,Anaphylaxis,Infection Prevention Control,Fire safety,Mental Capacity Act,Deprivation of Liberty Standards,Safeguarding adults,Safeguarding children,Chaperone awareness,Conflict resolution,Data security awareness,Duty of candour,Equality, diversity and human rights,H&S,Moving & handling,Preventing radicalisation,Sepsis,Whistleblowing"}/>
            </ListItem>
            <ListItem>
              <ItemList
                open={open2}
                setOpen={setOpen2}
                data={props.mandateTrainingDocs}
                header={"Mandatory Training Documents"}
                list={"Disclosure Barring Service (DBS),Indemnity,Professional registration - GMC,Right to work (Passport/Driving Licence)"}
              />
            </ListItem>
          </List>
        </Paper>
  )
}

export default DocumentList