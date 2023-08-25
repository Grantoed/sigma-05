import React from "react";
import { useTheme } from "styled-components";
import { BiSolidUser, BiRightArrowAlt } from "react-icons/bi";
import {
  NewsItem,
  NewsDateWrapper,
  NewsDate,
  NewsTextWrapper,
  NewsAuthorWrapper,
  NewsAuthor,
  NewsTitle,
  NewsText,
  NewsLink,
  LinkIcon,
} from "./NewsPiece.styled";

type NewsPieceProps = {
  date: string;
  author: string;
  title: string;
  text: string;
  url: string;
  imageURL: string;
};

export const NewsPiece = ({
  date,
  author,
  title,
  text,
  url,
  imageURL,
}: NewsPieceProps) => {
  const theme = useTheme();

  return (
    <NewsItem backgroundImage={`url(${imageURL})`}>
      <NewsDateWrapper>
        <NewsDate>{date}</NewsDate>
      </NewsDateWrapper>
      <NewsTextWrapper>
        <NewsAuthorWrapper>
          <BiSolidUser size={20} color={theme.colors.ac} />
          <NewsAuthor>By {author}</NewsAuthor>
        </NewsAuthorWrapper>
        <NewsTitle>{title}</NewsTitle>
        <NewsText>{text}</NewsText>
        <NewsLink href={url}>
          Read More
          <LinkIcon>
            <BiRightArrowAlt size={15} color="#fff" />
          </LinkIcon>
        </NewsLink>
      </NewsTextWrapper>
    </NewsItem>
  );
};
