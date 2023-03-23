"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosQuery } from "../services/axiosQuery";
import { ResponseStructure } from "../types/axios.types";
import { TQuote } from "../types/quote.types";
import Quote from "./Quote";

type RandomQuoteProps = {
  NEXT_PUBLIC_API_HOST: string;
  data: TQuote;
};

const RandomQuote: React.FC<RandomQuoteProps> = ({
  NEXT_PUBLIC_API_HOST,
  data,
}) => {
  const [historyQuote, setHistoryQuote] = useState<TQuote[]>([data]);
  const [quote, setQuote] = useState<TQuote>(data);
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    const getRandomQuote = async () => {
      try {
        const { data } = await axiosQuery.get<ResponseStructure<TQuote>>(
          NEXT_PUBLIC_API_HOST + "/api/quotes"
        );
        const newData = data.data;
        setQuote({ ...newData });
        setKey((prev) => prev + 1);
        setHistoryQuote((prev) => [newData, ...prev]);
      } catch (err) {
        console.error(err);
      }
    };

    const interval = setInterval(() => {
      getRandomQuote();
    }, 10000);
    return () => clearInterval(interval);
  }, [NEXT_PUBLIC_API_HOST]);

  return <Quote key={key} quote={quote} />;
};

export default React.memo(RandomQuote);
