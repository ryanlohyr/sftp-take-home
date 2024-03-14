"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

enum ArithmeticType {
  Add = "add",
  Subtract = "subtract",
}

const Page = () => {
  const [numOne, setNumOne] = useState<number>(0);
  const [numTwo, setNumTwo] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null); // null is used to show that the result is not calculated yet

  const calculateResult = (type: string) => {
    if (type === ArithmeticType.Add) {
      setResult(numOne + numTwo);
    } else if (type === ArithmeticType.Subtract) {
      setResult(numOne - numTwo);
    } else {
      // Throw error here
      console.log("Undefined Type When calculating error");
      return;
    }
    // Perform post request here
    
  };

  return (
    <div className="mt-12 mx-auto max-w-[80%] flex flex-col p-6">
      <h1 className="text-center">Calculator</h1>
      <div className="flex items-center m-4">
        <Input
          onChange={(event) => {
            setNumOne(Number(event.target.value));
          }}
          type="number"
          aria-label="First number"
        />{" "}
        -{" "}
        <Input
          onChange={(event) => {
            setNumTwo(Number(event.target.value));
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
      Result: {result ? result : "Not calculated yet"}
    </div>
  );
};

export default Page;
