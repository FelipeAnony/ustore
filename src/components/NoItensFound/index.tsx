import * as C from './styles';

function NoItensFound() {
  return ( 
    <C.Container>
      <div className='noItensFound__title'>No Itens Found!</div>
      <p className='noItensFound__p'>
        Try searching for a different word or change the search filters.
      </p>
      <button 
        className='noItensFound__button'
        onClick={() => window.location.reload()}
      >
        Reset Search Filters
      </button>
    </C.Container>
   );
}

export default NoItensFound;