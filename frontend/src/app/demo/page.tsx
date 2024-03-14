"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";

enum ArithmeticType {
  Add = "add",
  Subtract = "subtract",
}

const Page = () => {
  const [numOne, setNumOne] = useState<number>(0);
  const [numTwo, setNumTwo] = useState<number>(0);
  const [errror, setError] = useState<string | null>(""); 
  const [result, setResult] = useState<number | null>(null); // null is used to show that the result is not calculated yet

  const sendCalculationRequest = async (
    type: string,
    num1: number,
    num2: number
  ) => {
    const formData = new FormData();
    formData.append("num1", String(num1));
    formData.append("num2", String(num2));

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/${type}`,
        formData,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (isNaN((response.data.result))) {
        throw Error("result is not a number");
      } 

      return {
        data: Number(response.data.result),
        error: null,
      };
    } catch (error) {
      return { data: null, error: "There was an error processing your request: " + error};
    }
  };

  const calculateResult = async (type: string) => {
    const result = await sendCalculationRequest(type, numOne, numTwo);
    if (result.error) {
      setError(result.error);
      setResult(null);
      return;
    }

    setError(null);
    setResult(result.data);
  };

  return (
    <div className="mt-12 mx-auto max-w-[80%] flex flex-col p-6">
      <h1 className="text-center">Calculator</h1>
      <div className="flex items-center m-4">
        <Input
          onChange={(event) => {
            const number = event.target.value ? Number(event.target.value) : 0;
            setNumOne(number);
          }}
          type="number"
          aria-label="First number"
        />{" "}
        -{" "}
        <Input
          onChange={(event) => {
            const number = event.target.value ? Number(event.target.value) : 0;
            setNumTwo(number);
          }}
          type="number"
          aria-label="Second number"
        />
      </div>
      <div className="flex justify-center space-x-4">
        <Button
          onClick={() => calculateResult(ArithmeticType.Add)}
          size="lg"
          aria-label="Add numbers"
        >
          Add
        </Button>
        <Button
          onClick={() => calculateResult(ArithmeticType.Subtract)}
          size="lg"
          aria-label="Subtract numbers"
        >
          Substract
        </Button>
      </div>
      Result: {result != null ? result : "Not calculated yet"}
      {errror && <p className="text-red-500">Error occured: <br></br> {errror}</p>}
    </div>
  );
};

export default Page;
