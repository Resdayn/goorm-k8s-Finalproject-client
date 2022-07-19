const TestTable = () => {
  return (
    <section>
      <h1>Current Deals</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Current Price</th>
            <th>Cut</th>
            <th>Historical Low</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Game 1</td>
            <td>40,000₩</td>
            <td>30%</td>
            <td>10,000₩</td>
          </tr>
          <tr>
            <td>Game 2</td>
            <td>60,000₩</td>
            <td>10%</td>
            <td>60,000₩</td>
          </tr>
          <tr>
            <td>Game 3</td>
            <td>30,000₩</td>
            <td>10%</td>
            <td>30,000₩</td>
          </tr>
          <tr>
            <td>Game 4</td>
            <td>20,000₩</td>
            <td>60%</td>
            <td>10,000₩</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TestTable;
