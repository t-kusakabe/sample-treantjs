const simple_chart_config = {
  chart: {
    container: "#tree",
    connectors: {
      type: "step"
    },
  },
  nodeStructure: {
    text: { name: "Parent node" },
    children: [
      {
        text: { name: "First child" },
        children: [
          {
            text: { name: "First grand child" }
          },
          {
            text: { name: "Second grand child" }
          },

        ]
      },
      {
        text: { name: "Second child" }
      }
    ]
  }
};

const my_chart = new Treant(simple_chart_config);
