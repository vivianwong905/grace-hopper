import Button from "./Button";

export default function CounterButton({ setCount, count }) {
  return (
    <Button
      onClick={() => setCount((count) => count + 1)}
      text={`count is ${count}`}
    />
  );
}
