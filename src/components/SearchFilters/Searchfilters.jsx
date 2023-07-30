import React, { useState, useEffect, useContext } from "react";
import "./Searchfilters.css";
import Searchfilter from "./Searchfilter";
import Pricefilter from "./Pricefilter";
import { SearchContext } from "../../context/SearchContextProvider";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Searchfilters({ big }) {
  const { renderContent, contextLanguage } = useContext(LanguageContext);
  const {
    contextCities,
    filterTrips,
    setClearFilters,
    clearFilters,
    contextMaxPrice,
    contextMaxPriceRange
  } = useContext(SearchContext);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [filteredMaxGroupSize, setFilteredMaxGroupSize] = useState(1);
  const [filteredDurations, setFilteredDurations] = useState([]); // ["1 Day", "2 - 5 Days", "5 - 10 Days", "10 - 15 Days"]
  const [accommodation, setAccommodation] = useState(0);
  const [priceRange, setPriceRange] = useState([0, contextMaxPriceRange]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [filters, setFilters] = useState([
    {
      name: renderContent("Destinations", "Destinos", "Destinos"),
      options: contextCities.map((city) => {
        return { name: city, checked: false };
      }),
    },
    {
      name: renderContent("Group Size", "Tamaño del grupo", "Tamanho do grupo"),
      options: [
        {
          name: `1 - 3 ${renderContent("Persons", "Personas", "Pessoas")}`,
          checked: false,
        },
        {
          name: `1 - 14 ${renderContent("Persons", "Personas", "Pessoas")}`,
          checked: false,
        },
        {
          name: `1 - 24 ${renderContent("Persons", "Personas", "Pessoas")}`,
          checked: false,
        },
        {
          name: `1 - 49 ${renderContent("Persons", "Personas", "Pessoas")}`,
          checked: false,
        },
        {
          name: `1 - 99 ${renderContent("Persons", "Personas", "Pessoas")}`,
          checked: false,
        },
      ],
    },
    {
      name: renderContent("Duration", "Duración", "Duração"),
      options: [
        { name: `1 ${renderContent("Day", "Día", "Dia")}`, checked: false },
        {
          name: `2 - 5 ${renderContent("Days", "Días", "Dias")}`,
          checked: false,
        },
        {
          name: `5 - 10 ${renderContent("Days", "Días", "Dias")}`,
          checked: false,
        },
        {
          name: `10 - 15 ${renderContent("Days", "Días", "Dias")}`,
          checked: false,
        },
      ],
    },
    {
      name: renderContent("Accommodation", "Alojamiento", "Acomodação"),
      options: [
        {
          name: renderContent(
            "1 Star Hotel",
            "1 Estrella Hotel",
            "1 Estrela Hotel"
          ),
          checked: false,
        },
        {
          name: renderContent(
            "2 Stars Hotel",
            "2 Estrellas Hotel",
            "2 Estrelas Hotel"
          ),
          checked: false,
        },
        {
          name: renderContent(
            "3 Stars Hotel",
            "3 Estrellas Hotel",
            "3 Estrelas Hotel"
          ),
          checked: false,
        },
        {
          name: renderContent(
            "4 Stars Hotel",
            "4 Estrellas Hotel",
            "4 Estrelas Hotel"
          ),
          checked: false,
        },
        {
          name: renderContent(
            "5 Stars Hotel",
            "5 Estrellas Hotel",
            "5 Estrelas Hotel"
          ),
          checked: false,
        },
      ],
    },
  ]);

  const addToDestinations = (destination) => {
    setFilteredDestinations((prevDestinations) => [
      ...prevDestinations,
      destination,
    ]);
  };

  const removeFromDestinations = (destination) => {
    setFilteredDestinations((prevDestinations) =>
      prevDestinations.filter(
        (prevDestination) => prevDestination !== destination
      )
    );
  };

  const addToDurations = (min, max) => {
    setFilteredDurations((prevDurations) => [...prevDurations, [min, max]]);
  };

  const removeFromDurations = (min, max) => {
    setFilteredDurations((prevDurations) =>
      prevDurations.filter(
        (prevDuration) => prevDuration[0] !== min && prevDuration[1] !== max
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filterTrips(
      filteredDestinations,
      filteredMaxGroupSize,
      filteredDurations,
      accommodation,
      priceRange
    );
  };

  useEffect(() => {
    if (contextCities.length > 0) {
      setFilters((prevFilters) => {
        return prevFilters.map((filter) => {
          if (
            filter.name ===
            renderContent("Destinations", "Destinos", "Destinos")
          ) {
            return {
              ...filter,
              options: contextCities.map((city) => {
                return { name: city, checked: false };
              }),
            };
          }
          return filter;
        });
      });
    }
  }, [contextCities]);

  useEffect(() => {
    if (!clearFilters) return;
    setFilteredDestinations([]);
    setFilteredMaxGroupSize(1);
    setFilteredDurations([]);
    setAccommodation(0);

    setFilters((prevFilters) => {
      let temp = prevFilters.map((filter) => {
        return {
          ...filter,
          options: filter.options.map((option) => {
            return { ...option, checked: false };
          }),
        };
      });

      return [...temp];
    });
    setClearFilters(false);
  }, [clearFilters]);

  useEffect(() => {
    setMinPrice(0);
    setMaxPrice(contextMaxPrice);
  }, [contextMaxPrice]);

  useEffect(() => {
    setPriceRange([0, contextMaxPriceRange]);
  }, [contextMaxPriceRange])


  useEffect(() => {
    // Load filters again when language changes
    setFilters([
      {
        name: renderContent("Destinations", "Destinos", "Destinos"),
        options: contextCities.map((city) => {
          return { name: city, checked: false };
        }),
      },
      {
        name: renderContent(
          "Group Size",
          "Tamaño del grupo",
          "Tamanho do grupo"
        ),
        options: [
          {
            name: `1 - 3 ${renderContent("Persons", "Personas", "Pessoas")}`,
            checked: false,
          },
          {
            name: `1 - 14 ${renderContent("Persons", "Personas", "Pessoas")}`,
            checked: false,
          },
          {
            name: `1 - 24 ${renderContent("Persons", "Personas", "Pessoas")}`,
            checked: false,
          },
          {
            name: `1 - 49 ${renderContent("Persons", "Personas", "Pessoas")}`,
            checked: false,
          },
          {
            name: `1 - 99 ${renderContent("Persons", "Personas", "Pessoas")}`,
            checked: false,
          },
        ],
      },
      {
        name: renderContent("Duration", "Duración", "Duração"),
        options: [
          { name: `1 ${renderContent("Day", "Día", "Dia")}`, checked: false },
          {
            name: `2 - 5 ${renderContent("Days", "Días", "Dias")}`,
            checked: false,
          },
          {
            name: `5 - 10 ${renderContent("Days", "Días", "Dias")}`,
            checked: false,
          },
          {
            name: `10 - 15 ${renderContent("Days", "Días", "Dias")}`,
            checked: false,
          },
        ],
      },
      {
        name: renderContent("Accommodation", "Alojamiento", "Acomodação"),
        options: [
          {
            name: renderContent(
              "1 Star Hotel",
              "1 Estrella Hotel",
              "1 Estrela Hotel"
            ),
            checked: false,
          },
          {
            name: renderContent(
              "2 Stars Hotel",
              "2 Estrellas Hotel",
              "2 Estrelas Hotel"
            ),
            checked: false,
          },
          {
            name: renderContent(
              "3 Stars Hotel",
              "3 Estrellas Hotel",
              "3 Estrelas Hotel"
            ),
            checked: false,
          },
          {
            name: renderContent(
              "4 Stars Hotel",
              "4 Estrellas Hotel",
              "4 Estrelas Hotel"
            ),
            checked: false,
          },
          {
            name: renderContent(
              "5 Stars Hotel",
              "5 Estrellas Hotel",
              "5 Estrelas Hotel"
            ),
            checked: false,
          },
        ],
      },
    ]);
  }, [contextLanguage]);

  if (!filters) return <div></div>;

  return (
    <form
      className={big ? "search-filters big" : "search-filters"}
      onSubmit={handleSubmit}
    >
      {filters.map(
        (filter, index) =>
          filter.options?.length > 0 && (
            <React.Fragment key={index}>
              <Searchfilter
                filter={filter}
                key={filter.name}
                setFilteredMaxGroupSize={setFilteredMaxGroupSize}
                addToDestinations={addToDestinations}
                removeFromDestinations={removeFromDestinations}
                setAccommodation={setAccommodation}
                addToDurations={addToDurations}
                removeFromDurations={removeFromDurations}
              />
              <hr />
            </React.Fragment>
          )
      )}
      <Pricefilter
        priceRange={priceRange}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setPriceRange={setPriceRange}
      />
      <input
        type="submit"
        value={renderContent("Apply", "Aplicar", "Aplicar")}
        className="btn"
      />
    </form>
  );
}
