const discoverCoffeeData = [
  {
    id: 'discover-1',
    title: 'The fine taste of Arabica',
    location: 'Germany',
    image: require('../images/4.jpg'),
    imageBig: require('../images/4.jpg'),
    description:
      "Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste. Typically used for black coffee, Arabica beans have a sweeter, more complex flavor that you can drink straight. Funny thing is, even though it’s the most popular, it doesn’t have as much caffeine as Robusta.",
    liked: true,
    price: 50,
    rating: 5,
    duration: 2,
  },
  {
    id: 'discover-2',
    title: 'The full flavor of Robusta',
    location: 'Mexico',
    image: require('../images/1.jpg'),
    imageBig: require('../images/1.jpg'),
    description:
      'While Arabica is the most popular, Robusta is cheaper and stronger. Because of its bitter flavor, you’ll typically see Robusta used for espresso drinks and in instant coffee mixes. If your Monday morning is lagging, reach for a cup of coffee that uses Robusta beans. Their high caffeine content will wake you right up!',
    liked: true,
    price: 350,
    rating: 4.5,
    duration: 3,
  },
];

export default discoverCoffeeData;
