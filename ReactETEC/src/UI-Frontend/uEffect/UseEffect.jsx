const UseEffect = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("Component Render");
  });

  return (
    <div>
      <h1>What's up??</h1>

      <button onClick={() => setCount1(count1 + 1)}>Btn 1</button>

      <span>Result: {count1}</span>

      <button onClick={() => setCount2(count2 + 1)}>Btn 2</button>

      <span>Result: {count2}</span>
    </div>
  );
};

export default UseEffect;
