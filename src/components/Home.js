import Hero from "./Hero";
import Features from "./Features";

const Home = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };
  return (
    <>
      <Hero list={list} item={item} />
      <Features list={list} item={item} />
    </>
  );
};

export default Home;
