const autocannon = require("autocannon");

function runAutocannon({ url, connections = 100, duration = 10 }) {
  const instance = autocannon(
    {
      url,
      connections,
      duration,
    },
    (err, result) => {
      if (err) {
        console.error(`Error on ${url}`, err);
      } else {
        console.log(`\nResults for ${url}`);
        console.log("Total Requests:", result.requests.total);
        console.log("Total Duration:", result.duration);
        console.log("Latency (avg):", result.latency.average);
      }
    }
  );

  autocannon.track(instance, { renderProgressBar: true });
}


runAutocannon({
    url: "http://localhost:3000/",
    connections: 50,
    duration: 15,
  });
  
  runAutocannon({
    url: "http://localhost:3000/stress-test",
    connections: 100,
    duration: 20,
  });
  