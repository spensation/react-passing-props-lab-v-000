import React, { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, onUpdateFilter }) => {
  return (
    <div className="fruit-basket">
      <Filter
        filters={filters}
        handleChange={onUpdateFilter} />
      <FilteredFruitList
        fruit={fruit}
        filter={currentFilter} />
    </div>
  );

  // handleFilterChange = event => {
  //   console.log('new filter: ', event.target.value);
  //   this.setState({ selectedFilter: event.target.value });
  // }
  //
  // render() {
  //   return (
  //     <div className="fruit-basket">
  //       <Filter handleChange={this.handleFilterChange} />
  //       <FilteredFruitList
  //         filter={this.state.selectedFilter} />
  //     </div>
  //   );
  // }
}

FruitBasket.defaultProps = {
  fruit: "",
  filters: [],
  currentFilter: "",
  updateFilterCallback: () => {}
}

export default FruitBasket;
