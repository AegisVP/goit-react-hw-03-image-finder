import { Component } from 'react';
import axios from 'axios';

import { Box } from 'components/Common/Box.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Message } from 'components/Message/Message';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

const BASE_URL = 'https://pixabay.com/api/';
const LS_LAST_QUERY = 'goit_hw_lastQuery';
const LS_LAST_PAGE = 'goit_hw_lastPage';
const DEFAULT_SEARCH = 'Red poppy flower';

const initialStateValues = {
  images: [],
  errorMessage: '',
  isLoading: false,
  showModalUrl: '',
  totalHits: 0,
  searchParams: {
    key: '28371758-065fc86b54820776754ee6bc7',
    image_type: 'photo',
    q: '',
    orientation: 'horizontal',
    per_page: 12,
    page: 1,
  },
};

export class App extends Component {
  state = { ...initialStateValues };

  componentDidMount() {
    const lsQuery = localStorage.getItem(LS_LAST_QUERY)?.toString();
    const lsPage = parseInt(localStorage.getItem(LS_LAST_PAGE)?.toString());

    if (lsQuery && lsPage)
      this.setState({
        searchParams: { ...this.state.searchParams, q: lsQuery, page: lsPage },
      });
  }

  componentDidUpdate(_, prevState) {
    const { searchParams } = this.state;

    if (prevState.searchParams.q !== searchParams.q || prevState.searchParams.page !== searchParams.page) {
      this.loadImages({ query: searchParams.q, page: searchParams.page });
    }
  }

  loadImages = () => {
    const newSearchParams = new URLSearchParams();
    const { searchParams } = this.state;
    const { q: query, page } = searchParams;

    for (const param in searchParams) newSearchParams.set(param, searchParams[param]);

    newSearchParams.set('q', query);
    newSearchParams.set('page', page);

    localStorage.setItem(LS_LAST_QUERY, query);
    localStorage.setItem(LS_LAST_PAGE, parseInt(page));

    this.setState({ images: [], errorMessage: '', isLoading: true, totalHits: 0 });

    axios
      .get(`${BASE_URL}`, { method: 'get', params: newSearchParams })
      .then(({ data }) => {
        if (parseInt(data?.totalHits) > 0) this.setState({ images: data.hits, totalHits: data.totalHits });
        else this.setState({ errorMessage: 'No images found' });
      })
      .catch(error => {
        this.setState({ errorMessage: error?.message ? error.message : 'No images loaded (Unknown error)' });
      })
      .finally(setTimeout(() => this.setState({ isLoading: false }), 200));
  };

  onLoadMore = () => {
    this.setState(({ searchParams }) => ({ searchParams: { ...searchParams, page: searchParams.page + 1 } }));
  };

  onSearch = (searchQuery = DEFAULT_SEARCH) => {
    if (searchQuery === '') searchQuery = DEFAULT_SEARCH;
    this.setState({ searchParams: { ...this.state.searchParams, q: searchQuery, page: 1 } });
  };

  onToggleModalImage = (url = '') => {
    this.setState({ showModalUrl: url });
  };

  onModalKeyDown = e => {
    if (e.code === 'Escape') this.onToggleModalImage('');
  };

  render() {
    const { images, errorMessage, totalHits, searchParams, isLoading, showModalUrl } = this.state;

    return (
      <Box padding="0">
        <Searchbar onSubmit={this.onSearch} />

        {/* Image gallery */}
        {images.length > 0 ? (
          <ImageGallery onToggleModalImage={this.onToggleModalImage} images={images} />
        ) : (
          <Message>{errorMessage}</Message>
        )}

        {/* Load more button */}
        {totalHits > searchParams.page * searchParams.per_page && (
          <Box display="flex" justifyContent="center" width="100%" mt="20px">
            <Button onClick={this.onLoadMore}>Load more...</Button>
          </Box>
        )}

        {/* Loader */}
        {isLoading && <Loader />}

        {/* Modal window */}
        {showModalUrl !== '' && (
          <Modal onKeyDown={this.onModalKeyDown} onCloseModal={() => this.onToggleModalImage('')}>
            <img src={showModalUrl} width="1280" alt="" />
          </Modal>
        )}
        <Box as="footer" height="60px">
          &nbsp;
        </Box>
      </Box>
    );
  }
}
