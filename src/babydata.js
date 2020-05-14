const weeks = [
  {
    key: 1,
    title: "Week 1",
    height: 0.0,

    content:
      "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
  },
  {
    key: 2,
    title: "Week 2",
    height: 0.0,

    content:
      "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
  },
  {
    key: 3,
    title: "Week 3",
    height: 0.004,
    content:
      "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
  },
  {
    key: 4,
    title: "Week 4",
    height: 0.005,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 5,
    title: "Week 5",
    height: 0.13,
    content: "Eat more sushi"
  },
  {
    key: 6,
    title: "Week 6",
    height: 0.2,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 7,
    title: "Week 7",
    height: 0.4,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 8,
    title: "Week 8",
    height: 0.6,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 9,
    title: "Week 9",
    height: 0.9,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 10,
    title: "Week 10",
    height: 1.2,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },

  {
    key: 11,
    title: "Week 11",
    height: 1.6,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 12,
    title: "Week 12",
    height: 2.1,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 13,
    title: "Week 13",
    height: 2.5,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 14,
    title: "Week 14",
    height: 3.1,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 15,
    title: "Week 15",
    height: 6.4,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 16,
    title: "Week 16",
    height: 7.1,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 17,
    title: "Week 17",
    height: 7.5,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 18,
    title: "Week 18",
    height: 8.6,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 19,
    title: "Week 19",
    height: 9.3,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },

  {
    key: 20,
    title: "Week 20",
    height: 9.9,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 21,
    title: "Week 21",
    height: 10.6,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 22,
    title: "Week 22",
    height: 11.2,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 23,
    title: "Week 23",
    height: 11.9,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 24,
    title: "Week 24",
    height: 12.5,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 25,
    title: "Week 25",
    height: 13.1,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 26,
    title: "Week 26",
    height: 13.7,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 27,
    title: "Week 27",
    height: 14.2,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 28,
    title: "Week 28",
    height: 14.8,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 29,
    title: "Week 29",
    height: 15.3,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 30,
    title: "Week 30",
    height: 15.8,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 31,
    title: "Week 31",
    height: 16.4,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 32,
    title: "Week 32",
    height: 16.8,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 33,
    title: "Week 33",
    height: 17.3,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 34,
    title: "Week 34",
    height: 17.8,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 35,
    title: "Week 35",
    height: 18.2,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 36,
    title: "Week 36",
    height: 18.6,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 37,
    title: "Week 37",
    height: 19.1,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 38,
    title: "Week 38",
    height: 19.5,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 39,
    title: "Week 39",
    height: 19.8,
    content: "What's the difference between har"
  },
  {
    key: 40,
    title: "Week 40",
    height: 20.2,

    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 41,
    title: "Week 41",
    height: 20.55,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 42,
    title: "",
    height: 7.5,
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  }
];

export default weeks;
