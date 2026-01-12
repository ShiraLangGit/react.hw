import GreetingCard from "./GreetingCard";

export default function GreetingsList({ greetings }) {
  return (
    <div>
      {greetings.map((text, index) => (
        <GreetingCard key={index} originalText={text} />
      ))}
    </div>
  );
}
