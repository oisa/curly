import IconButtonPointingHand from '../../assets/IconButtonPointingHand';

const ModuleSearch = () => {
  return (
    <div className="search-container module" >

      <h3 className="generic-title">
        Search
      </h3>

      <div className="search-element-container">
        <input type="field" placeholder="ADA"></input>
        <button><IconButtonPointingHand /></button>
      </div>

    </div>
  )
}

export default ModuleSearch;
