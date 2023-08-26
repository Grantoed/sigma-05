import React from "react";
import { Box } from "../Box";
import { Avatar, Rating, Text, Name, Role } from "./ReviewCard.styled";
import starsImg from "src/images/stars.svg";

export type ReviewCardProps = {
  avatarURL: string;
  text: string;
  name: string;
  role: string;
};

export const ReviewCard = ({
  avatarURL,
  text,
  name,
  role,
}: ReviewCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      ml="auto"
      mr="auto"
      width={780}
    >
      <Avatar src={avatarURL} alt={name} />
      <Rating src={starsImg} />
      <Text>{text}</Text>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Box>
  );
};
