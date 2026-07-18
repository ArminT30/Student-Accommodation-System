function FilterBar({ filters, setFilters, applyFilter }) {


  const handleChange = (e) => {

    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });

  };


  return (

    <div className="filter-bar">


      <select
        name="gender"
        value={filters.gender}
        onChange={handleChange}
      >

        <option value="all">
          All Gender
        </option>


        <option value="male">
          Male
        </option>


        <option value="female">
          Female
        </option>


        <option value="unisex">
          Unisex
        </option>


      </select>




      <input

        type="number"

        name="min_rent"

        placeholder="Minimum Rent"

        value={filters.min_rent}

        onChange={handleChange}

      />




      <input

        type="number"

        name="max_rent"

        placeholder="Maximum Rent"

        value={filters.max_rent}

        onChange={handleChange}

      />




      <select

        name="sort"

        value={filters.sort}

        onChange={handleChange}

      >

        <option value="">

          Sort By Rent

        </option>


        <option value="low">

          Lowest Rent

        </option>


        <option value="high">

          Highest Rent

        </option>


      </select>




      <button onClick={applyFilter}>

        Apply Filter

      </button>



    </div>

  );

}


export default FilterBar;