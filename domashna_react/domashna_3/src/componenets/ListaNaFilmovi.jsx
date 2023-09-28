import PropTypes from "prop-types";

export const Filmovi = ({ filmovi }) => {
  console.log(filmovi);
  return (
    <div id="filmovi">
      <table border="1">
        <thead>
          <tr>
            <th>Naslov</th>
            <th>Premiera</th>
            <th>Zharn</th>
            <th>Scenario</th>
            <th>Link</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filmovi.map((film, i) => {
            return (
              <tr key={i}>
                <td>{film.ime}</td>
                <td>{film.datum_na_premiera}</td>
                <td>{film.zharn}</td>
                <td>{film.scenario}</td>
                <td>
                  <a
                    href={film.imbdLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IMDB
                  </a>
                </td>
                <td>
                  {film.imgUrl && (
                    <a
                      href={film.imgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Filmovi.propTypes = {
  filmovi: PropTypes.arrayOf(PropTypes.object),
};
