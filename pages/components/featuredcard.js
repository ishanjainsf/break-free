import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import Image from "next/image";
import styles from "../../styles/FeaturedCard.module.css";

export default function FeaturedCard({ heading, date, time }) {
  return (
    <Stack direction="row" className={styles.featuredCardWrapper}>
      <Stack className={styles.eventImg}>
          <Image src="/featured.png" width="86px" height="58px" />
      </Stack>
      <Stack>
        <Typography>{heading}</Typography>
        <Divider />
        <Typography>{date}</Typography>
        <Typography>{time}</Typography>
      </Stack>
    </Stack>
  );
}
