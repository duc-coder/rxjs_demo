import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { defer, from, map, of, repeat, switchMap, toArray } from "rxjs";
import { ObservableInput } from "rxjs/internal/types";
import { httpService } from "../../../services/httpService";
import "./PeriodRecalculateAsyncDataRxJS.scss";

interface IBitcoinData {
  [key: string]: {
    "15m": number;
    buy: number;
    last: number;
    sell: number;
    symbol: string;
  };
}

const PeriodRecalculateAsyncDataRxJs = () => {
  const USD = "USD";
  const M15 = "15m";

  const [usdPrice, setUsdPrice] = useState<number>(0);
  const [changedUsdPrice, setChangedUsdPrice] = useState<string>("");
  const [timeStamp, setTimeStamp] = useState<string>();

  useEffect(() => {
    console.log("1");
    const fetch1000 = getBitcoinData(1000);

    fetch1000.subscribe({
      next: (value: any) => {
        const currPrice = value[USD][M15];

        if (!currPrice) return;

        setUsdPrice(currPrice);
        setTimeStamp(new Date().toLocaleString());
      },
      error: (error: any) => {
        console.log("==================");
        console.log("error", error);
        console.log("==================");
      },
    });
  }, []);

  useEffect(() => {
    usdPrice &&
      setChangedUsdPrice(Number(usdPrice - Number(changedUsdPrice)).toFixed(1));
  }, [usdPrice]);

  const getBitcoinData = (intervalTime: number) => {
    return defer(() =>
      from(httpService.get(`https://blockchain.info/ticker`))
    ).pipe(
      map((result: AxiosResponse) => of(result.data)),
      switchMap((data: ObservableInput<IBitcoinData>) => {
        return data;
      }),
      // toArray()
      repeat({ delay: intervalTime })
    );
  };
  return (
    <div className="PeriodRecalculateAsyncDataRxJs">
      <p className="currency-row">
        Time: {timeStamp} | {USD} price: {usdPrice} ({changedUsdPrice})
      </p>
    </div>
  );
};

export default PeriodRecalculateAsyncDataRxJs;
