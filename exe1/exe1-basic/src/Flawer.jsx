export default function Flower(props) {
  console.log(props);
  const petalColor = props.color || "pink"; // אם לא נשלח צבע עלי כותרת → "pink"
  const centerColor = props.c || "green"; // אם לא נשלח צבע עלה מרכזי → "green"
  function handleClick() {
    alert(`אני פרח מסוג ${props.name}`);
  }

  return (
    <div
      onClick={handleClick} // ← מאזין ללחיצה
      style={{
        backgroundColor: props.color, // צבע עלי הכותרת
        color: props.c, // צבע העלה המרכזי
        padding: "15px",
        borderRadius: "10px",
        margin: "10px",
        textAlign: "center",
        fontFamily: "Arial",
        cursor: "pointer", // מראה שהאלמנט ניתן ללחיצה
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h1>שם הפרח:{props.name}</h1>
      <h2>צבע עלי כותרת של הפרח:{props.color}</h2>
      <h3>צבע העלה המרכזי:{props.c}</h3>
    </div>
  );
}
