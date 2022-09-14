import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Stack, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import * as BsIcons from "react-icons/bs";

export default function Navigation() {
  return (
    <Stack className={styles.navigationWrapper}>
      <Stack className={styles.container} direction="row">
        <Stack
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            position: "relative",
          }}
        >
          <Image
            src="/breakfree.png"
            className={styles.logo}
            width={85}
            height={75}
          />
        </Stack>

        <Stack className={styles.searchBar}>
          <FormControl
            sx={{
              m: 1,
              width: "25ch",
              borderRadius: "45px",
            }}
            variant="outlined"
            size="small"
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              value={""}
              onChange={(e) => console.log(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <BsIcons.BsSearch color="#C5C5C5" />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              placeholder="Search"
              sx={{ borderRadius: 25 }}
            />
          </FormControl>
        </Stack>
        <Stack direction={"row"}>
          <Stack spacing={1} className={styles.navigationBars}>
            Home
          </Stack>
          <Stack spacing={1} className={styles.navigationBars}>
            Event
          </Stack>
          <Stack spacing={1} className={styles.navigationBars}>
            Services
          </Stack>
          <Stack spacing={1} className={styles.navigationBars}>
            Products
          </Stack>
          <Stack spacing={1} className={styles.navigationBars}>
            Info
          </Stack>
        </Stack>
      </Stack>
      <Stack style={{ marginTop: "auto", marginBottom: "auto" }}>
        Here comes the profile info
      </Stack>
    </Stack>
  );
}
