import { Filmovi } from "./componenets/ListaNaFilmovi";

export function App() {
  const filmovi = [
    {
      id: "1",
      ime: "Soul",
      datum_na_premiera: "2020",
      zharn: "Animation",
      scenario: "A musician's journey through the afterlife.",
      imbdLink: "https://www.imdb.com/title/tt2948372/",
      imgUrl:
        "https://nysmusic.com/site/wp-content/uploads/2020/06/MV5BMzYyNTJhZjAtMjhlZC00NWFjLThhZTUtMzg3ZGE2OTUzZTAzXkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_SY1000_SX800_AL_-768x960.jpg",
    },
    {
      id: "2",
      ime: "Barbie",
      datum_na_premiera: "2023",
      zharn: "Adventure",
      scenario:
        "Barbie suffers a crisis that leads to questions her world and her existance.",
      imbdLink: "https://www.imdb.com/title/tt1517268/",
      imgUrl:
        "https://featuredanimation.com/wp-content/uploads/2022/05/Barbie-live-action-2023-first-look-427x640.jpg",
    },
    {
      id: "3",
      ime: "Oppenheimer",
      datum_na_premiera: "2023",
      zharn: "Biography",
      scenario:
        "The sotry of American scientist, J.Rober Oppenhheimer, and his role in the development ...",
      imbdLink: "https://www.imdb.com/title/tt15398776/",
      imgUrl:
        "https://movies.universalpictures.com/media/03-opp-dm-mobile-banner-1080x745-pl-f01-062122-62defaa505f81-1.jpg",
    },
    {
      id: "4",
      ime: "The Wheel of Time",
      datum_na_premiera: "2021",
      zharn: "Action",
      scenario:
        "Set in a high fantasy world where magic exists, but only some can access it...",
      imbdLink: "https://www.imdb.com/title/tt7462410/",
      imgUrl: "https://image.tmdb.org/t/p/w500/mpgDeLhl8HbhI03XLB7iKO6M6JE.jpg",
    },
    {
      id: "5",
      ime: "Talk to Me",
      datum_na_premiera: "2022",
      zharn: "Horror",
      scenario:
        "When a group of friends discover how to conjure spirits using an embalmed hand...",
      imbdLink: "https://www.imdb.com/title/tt10638522/",
      imgUrl:
        "https://people.com/thmb/PsTUy3XCyaLp5xscm6MyLgD22GQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(620x779:622x781)/Talk-To-Me-041023-01-2000-d6b477ad2ead43cb8e5a3a965f31e365.jpg",
    },
  ];

  return (
    <div id="app">
      <h2>Lista na filmovi</h2>
      <Filmovi filmovi={filmovi} />
    </div>
  );
}
