import React, { Component } from 'react';
import { SearchBar, SearchForm, Button, ButtonLabel, Input } from './Searchbar.styled';
import searchIcon from 'images/search.png';

export class Searchbar extends Component {
  state = { searchField: '' };

  onChangeHandler = e => {
    this.setState({ searchField: e.currentTarget.value });
  };

  onSearch = e => {
    e.preventDefault();
    this.props.onSubmit(e.target.searchField.value);
    this.setState({ searchField: '' });
  }

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.onSearch}>
          <Button type="submit">
            <img src={searchIcon} width="30" height="30" alt="Search icon" />
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeHandler}
            name="searchField"
            value={this.state.searchField}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
