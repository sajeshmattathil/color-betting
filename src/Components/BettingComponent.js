import React, { useState, useEffect } from "react";
import "./BettingComponentStyle.css";

const BettingComponent = () => {
  const [bankBalance, setBankBalance] = useState(0);
  const [poolBalance, setPoolBalance] = useState(0);
  const [currentColor, setCurrentColor] = useState("");
  const [betOnRed, setBetRed] = useState(0);
  const [betOnGreen, setBetGreen] = useState(0);
  const [win, setWin] = useState('');

  const totalBets = betOnGreen + betOnRed;
  const desiredProfit = totalBets * 0.02;

  useEffect(() => {
    const interval = setInterval(() => {
      handleRound();
      handleColor();
      setBetGreen(0);
      setBetRed(0);
      setWin('');
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleColor = () => {
    const randomNumber = String(Math.random()).slice(2, 3);
    if (Number(randomNumber) % 2 === 0 && randomNumber > 0) {
      setCurrentColor("red");
    } else {
      setCurrentColor("green");
    }
  };

  const handleRound = () => {
    console.log(0);
    if (totalBets > 0) {
      if (poolBalance < totalBets + desiredProfit) {
        const profit = totalBets * 0.02;
        setPoolBalance((prev) => prev + profit);
        if (betOnGreen < betOnRed) setWin('Green');
        else setWin('Red');
      } else {
        const maxBetColor = Math.max(betOnGreen, betOnRed);
        if (poolBalance > maxBetColor) {
          const profit = poolBalance * 0.02;
          setBankBalance((prev) => prev + profit);
          setPoolBalance((prev) => prev - profit);
        }
      }
    }
  };

  return (
    <div className="container">
      <h1>Betting System</h1>
      <p>Bank Balance: ${bankBalance.toFixed(2)}</p>
      <p>Pool Balance: ${poolBalance.toFixed(2)}</p>
      <p>Total Bet: ${totalBets.toFixed(2)}</p>

      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: currentColor,
        }}
        className="color"
      ></div>
      <div className="buttons">
        <button
          onClick={() => setBetRed((prev) => prev + 60)}
          style={{ border: "2px solid red" }}
        >
          {betOnRed || "BET"}
        </button>
        <button
          onClick={() => setBetGreen((prev) => prev + 80)}
          style={{ border: "2px solid green" }}
        >
          {betOnGreen || "BET"}
        </button>
      </div>
      {win.trim() && <h2>{win} wins</h2>}
    </div>
  );
};

export default BettingComponent;
