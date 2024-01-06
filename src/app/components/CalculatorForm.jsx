"use client";

const calculateFutureValue = require("future-value-calculator");
import { useEffect, useState } from "react";
import InputField from "./InputField";

const CalculatorForm = () => {
  const [totalMoney, setTotalMoney] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");

  const [futureValue, setFutureValue] = useState(null);

  const handleSubmit = () => {
    if (totalMoney && totalMoney && years) {
      setFutureValue(calculateFutureValue(totalMoney, interestRate, years));
    }
  };

  useEffect(() => {
    if (!totalMoney || !interestRate || !years) {
      setFutureValue(null);
    }
  }, [totalMoney, interestRate, years]);

  return (
    <div className="text-black py-[100px] w-full px-10 md:w-[768px] mx-auto">
      <h3 className="text-center text-4xl font-bold">
        Future Value Calculator
      </h3>
      <p className="text-center text-lg mt-3 font-medium">
        A simple npm package to calculate the future value of an investment
        based on the present value, interest rate, and compounding periods.
      </p>

      <div>
        <div className="flex flex-col sm:flex-row items-center justify-between sm:space-y-0 space-y-2 sm:space-x-2 mt-5">
          <InputField
            placeholder="Total money"
            value={totalMoney}
            onChange={(e) => setTotalMoney(e.target.value)}
          />
          <InputField
            placeholder="Interest rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <InputField
            placeholder="Years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>
        {futureValue && (
          <div className="mt-5 w-full border-2 border-gray-700 py-3 bg-white text-center text-lg font-medium">
            The future value of {totalMoney} is:{" "}
            <span className="text-xl font-bold">{futureValue}</span>
          </div>
        )}
        <button
          className="w-full border-2 border-gray-700 py-3 bg-white mt-5 text-lg font-medium"
          onClick={handleSubmit}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default CalculatorForm;
