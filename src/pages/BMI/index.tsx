import { useEffect, useState } from "react";

function ExBMI() {
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [BMI, setBMI] = useState<number | null>(null);
  const [rank, setRank] = useState<string | null>(null);

  const caclulationBMI = () => {
    if (weight !== null && height !== null) {
      setBMI(Number((weight / height ** 2).toFixed(1)));
    }
  };

  useEffect(() => {
    if (BMI !== null) {
      setRank(getRank(BMI));
    }
  }, [BMI]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Nhập cân nặng (kg)"
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Nhập chiều cao (m)"
        onChange={(e) => setHeight(Number(e.target.value))}
      />

      <button onClick={caclulationBMI}>Tính toán</button>

      <h1>Hello React Hook</h1>

      <button>
        {BMI} và xếp loại : {rank}
      </button>
    </div>
  );
}

function getRank(bmi: number) {
  switch (true) {
    case bmi < 18.5:
      return "Gầy";
    case bmi < 25:
      return "Bình thường";

    default:
      return "Thừa cân";
  }
}

export default ExBMI;
