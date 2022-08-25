import styled from "styled-components";
import ArticleItem from "./ArticleItem";

const DUMMY_DATA = [
  {
    id: "a1",
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    date: "22.08.12",
  },
  {
    id: "a2",
    title: "What is Lorem Ipsum?",
    content:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "22.08.12",
  },
  {
    id: "a3",
    title: "Where does it come from?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    date: "22.08.12",
  },
  {
    id: "a4",
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    date: "22.08.12",
  },
  {
    id: "a5",
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    date: "22.08.12",
  },
  {
    id: "a6",
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    date: "22.08.12",
  },
  {
    id: "a7",
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    date: "22.08.12",
  },
  {
    id: "a8",
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    date: "22.08.12",
  },
  {
    id: "a9",
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    date: "22.08.12",
  },
];

/* CSS */
const ArticleWrapper = styled.main`
  article {
    margin: 200px 0% 3% 2%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    line-height: 1.2;
  }
`;

export default function ArticleList() {
  const articles = DUMMY_DATA.map((article) => (
    <ArticleItem
      key={article.id}
      title={article.title}
      content={article.content}
      date={article.date}
    />
  ));
  return (
    <ArticleWrapper>
      <article>{articles}</article>
    </ArticleWrapper>
  );
}
