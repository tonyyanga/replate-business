/**
 * @prop business  - the current business that is signed in
 * @prop locations - collection (array) of locations attached to business
 */
class BusinessDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locations : this.props.locations };
  }

  _fullAddress = (loc) => {
    return `${loc.number} ${loc.street} ${loc.city}, ${loc.state} ${loc.zip}`;
  }

  _fetchBusiness = () => {
    const success = (data) => {
      this.setState({ locations: data });
    }
    Requester.get(APIConstants.businesses.update(
      this.props.business.id), success);
  }

  render() {
    let locs;
    if (this.state.locations) {
      locs = this.state.locations.map((location, i) => {
        return (
          <div className="location-item-col" key={i}>
            <a href={`/locations/` + location.id}>
              <div className="location">
                <div className="location-photo"></div>
                <h4 className="location-title">{location.addr_name}</h4>
                <p className="location-addr">{this._fullAddress(location)}</p>
              </div>
            </a>
          </div>
        )
      })
    } else {
      locs = "You don't have a location! Click here to add one."
    }

    return (
      <div className="marginTop-xl">
        <h1 className="dashboard-title">Replate Dashboard</h1>
        <h2 className="company-title marginBot-xl">Welcome {this.props.business.company_name}. Thank you for Replating with us!</h2>

        <div className="section-header header--buttons marginBot-sm">
          <h3 className="dashboard-section-title marginRight-sm">Office Locations</h3>
          <LocationCreationForm
                business_id  = {this.props.business.id}
                success = {this._fetchBusiness} />
        </div>
        <div className="dashboard-locations-container">
          {locs}
        </div>
      </div>
    )
  }
}
