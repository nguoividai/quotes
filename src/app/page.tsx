import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/app/page.module.css";
import Quote from "@/app/components/Quote";
import { axiosQuery } from "@/app/services/axiosQuery";
import { InferGetStaticPropsType } from "next";
import { TQuote } from "@/app/types/quote.types";
import { ResponseStructure } from "@/app/types/axios.types";
// import { useEffect } from "react";
import axios from "axios";
import RandomQuote from "./components/RandomQuote";

const inter = Inter({ subsets: ["latin"] });

const { NEXT_PUBLIC_API_HOST } = process.env;

export default async function Home() {
  const { data } = await axios.get<ResponseStructure<TQuote>>(
    NEXT_PUBLIC_API_HOST + "/api/quotes"
  );

  return (
    <main className={styles.main}>
      <div className={inter.className}>
        {NEXT_PUBLIC_API_HOST && data ? (
          <RandomQuote
            NEXT_PUBLIC_API_HOST={NEXT_PUBLIC_API_HOST}
            data={data.data}
          />
        ) : null}
      </div>
    </main>
  );
}
