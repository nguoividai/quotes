import React from "react";
import Image from "next/image";
import quoteImage from "../../../public/quotes.png";
import { TQuote } from "@/app/types/quote.types";

type QuoteProps = {
  quote: TQuote;
};

const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <>
      <div className="box">
        <i className="fas fa-quote-left fa2">
          <Image src={quoteImage} width={30} height={30} alt="quote-left" />
        </i>
        <div className="text">
          <i className="fas fa-quote-right fa1">
            <Image src={quoteImage} width={30} height={30} alt="quote-right" />
          </i>
          <div>
            <h3 style={{ textTransform: "capitalize" }}>{quote.author}</h3>
            <p>{quote.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Quote);
