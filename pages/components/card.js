import React from "react";
import { Stack, Typography, Divider, Button } from "@mui/material";
import styles from "../../styles/Card.module.css";
import * as AiIcons from "react-icons/ai";
import Image from "next/image";

export default function Card({ heading, place, date, time, price }) {
  return (
    <Stack className={styles.cardWrapper}>
      <Image
        src="/fitness.png"
        width="250px"
        height="185px"
        style={{ border: "none", borderRadius: "25px" }}
      />
      <Typography className={styles.cardHeading}>{heading}</Typography>
      <Typography className={styles.cardInfo}>{place}</Typography>
      <Typography className={styles.cardInfo}>{date}</Typography>
      <Typography className={styles.cardInfo} style={{ marginBottom: "10px" }}>
        {time}
      </Typography>
      <Divider />
      <Stack direction="row" className={styles.bookServiceBtn}>
        <Typography className={styles.bookingPrice}>{price}</Typography>
        <Stack direction="row">
          <Typography
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginRight: "10px",
            }}
          >
            <AiIcons.AiOutlineHeart size="15px" />
          </Typography>
          <button className={styles.bookNowBtn}>Book Now</button>
        </Stack>
      </Stack>
    </Stack>
  );
}
