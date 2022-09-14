import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Eventpage.module.css";
import { Stack, Typography } from "@mui/material";
import Navigation from "./components/navigation";
import * as IoIcons from "react-icons/io";
import { data } from "./utils/filters.json";
import Card from "./components/card";
import FeaturedCard from "./components/featuredcard";

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState({
    "Sort By": "",
    "Location": "",
    "Day": "Monday",
    "Filter by date range": "",
  });

  const [currenSelectedFilter, setCurrentSelectedFilter] = useState(1);

  const filter1 = [
    "All",
    "Music",
    "Art",
    "Painting",
    "Photography",
    "Workshops",
    "Party",
  ];
  const filter2 = ["Basketball", "Gym", "Badminton", "Cricket"];
  const filterRef1 = useRef(null);
  const executeScrollRef1 = () =>
    filterRef1.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const filterRef2 = useRef(null);
  const executeScrollRef2 = () =>
    filterRef2.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const [currentSelectedEvent, setCurrentSelectedEvent] = useState("all");

  const renderCards = () => {
    return (
      <Card
        heading="New Year’s Eve by Breakfree"
        place="Chattarpur Enclave, New Delhi"
        date="Saturday, 20th Dec 2021"
        time="9:00 AM - 11:00 AM"
        price="Rs. 1000"
      />
    );
  };

  return (
    <Stack
      style={{
        height: "100%",
        position: "absolute",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Navigation />
      <Stack className={styles.eventBodyWrapper} direction="row">
        <Stack className={styles.filterWrapper}>
          <Stack className={styles.filterHeader} direction="row">
            <Stack
              direction="row"
              style={{
                marginLeft: "5px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Typography style={{ marginTop: "3px" }}>
                <IoIcons.IoIosOptions color="black" />
              </Typography>
              <Typography
                style={{
                  marginLeft: "10px",
                  textTransform: "uppercase",
                  fontWeight: 800,
                  fontSize: "14px",
                  marginTop: "3px",
                }}
              >
                Filters
              </Typography>
            </Stack>
            <Typography
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginRight: "5px",
                fontSize: "14px",
                color: "#0092E3",
                cursor: "pointer",
              }}
            >
              Clear All
            </Typography>
          </Stack>
          <Stack className={styles.filters} spacing={2}>
            {Object.entries(data[0]).map(([keys, values]) => (
              <Stack>
                <Stack>
                  <Stack
                    direction="row"
                    style={{
                      position: "relative",
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography style={{ color: "#686868", fontSize: "12px" }}>
                      {keys}
                    </Typography>
                    <Typography style={{ color: "#0092E3", fontSize: "12px" }}>
                      Clear
                    </Typography>
                  </Stack>
                  <Stack direction="row" className={styles.filterTabWrapper}>
                    {values.map((i, idx) =>
                      selectedFilters[keys] === i ? (
                        <Typography
                          className={styles.filterTabs}
                          style={{ backgroundColor: "yellow", border: "none" }}
                        >
                          {i}
                        </Typography>
                      ) : (
                        <Typography className={styles.filterTabs}>
                          {i}
                        </Typography>
                      )
                    )}
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Stack className={styles.featuredEvents}>
            <FeaturedCard
              heading="Art Extravaganza"
              date="Sat, Sept 20"
              time="9:00 AM - 11:00 AM"
            />
          </Stack>
        </Stack>
        <Stack className={styles.eventWrapper}>
          <Typography style={{ fontSize: "25px", fontWeight: 800 }}>
            Browse Events
          </Typography>
          <Stack className={styles.eventFilters}>
            <Stack direction="row">
              <Typography
                style={{
                  position: "relative",
                  display: "flex",
                  width: "5%",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <IoIcons.IoIosArrowDropleftCircle
                  size={20}
                  onClick={() => executeScrollRef1()}
                />
              </Typography>
              <Stack
                direction="row"
                style={{
                  position: "relative",
                  width: "90%",
                  overflow: "hidden",
                  overflowX: "scroll",
                  cursor: "pointer",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <Stack direction="row" ref={filterRef1} spacing={2}>
                  {filter1.map((item) =>
                    currentSelectedEvent.toLowerCase() ===
                    item.toLowerCase() ? (
                      <Typography
                        className={styles.eventFilterTabs}
                        style={{ border: "none", backgroundColor: "yellow" }}
                      >
                        {item}
                      </Typography>
                    ) : (
                      <Typography
                        className={styles.eventFilterTabs}
                        onClick={() =>
                          setCurrentSelectedEvent(item.toLowerCase())
                        }
                      >
                        {item}
                      </Typography>
                    )
                  )}
                </Stack>
                <Stack
                  direction="row"
                  ref={filterRef2}
                  spacing={2}
                  style={{ marginLeft: "15px" }}
                >
                  {filter2.map((item) =>
                    currentSelectedEvent.toLowerCase() ===
                    item.toLowerCase() ? (
                      <Typography
                        className={styles.eventFilterTabs}
                        style={{ border: "none", backgroundColor: "yellow" }}
                      >
                        {item}
                      </Typography>
                    ) : (
                      <Typography
                        className={styles.eventFilterTabs}
                        onClick={() =>
                          setCurrentSelectedEvent(item.toLowerCase())
                        }
                      >
                        {item}
                      </Typography>
                    )
                  )}
                </Stack>
              </Stack>
              <Typography
                style={{
                  position: "relative",
                  width: "5%",
                  display: "flex",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginRight: "10px",
                }}
              >
                <IoIcons.IoIosArrowDroprightCircle
                  size={20}
                  onClick={() => executeScrollRef2()}
                />
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack className={styles.allEventCardsWrapper} direction="row">
              <Stack className={styles.cards}>{renderCards()}</Stack>
              <Stack className={styles.cards}>{renderCards()}</Stack>
              <Stack className={styles.cards}>{renderCards()}</Stack>
              <Stack className={styles.cards}>{renderCards()}</Stack>
              <Stack className={styles.cards}>{renderCards()}</Stack>
              <Stack className={styles.cards}>{renderCards()}</Stack>
            </Stack>
            <Stack className={styles.loadMoreBtn}>
              <Typography className={styles.loadMore}>Load More...</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
