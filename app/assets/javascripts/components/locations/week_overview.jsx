
class WeekOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date().getDay(),
      schedule: {
        1: [{
          name: 'Lunch Pickup',
          startTime: '1:00pm',
          endTime: '3:00pm',
          recurring: true,
        }, {
          name: 'Christmas Party',
          startTime: '4:00pm',
          endTime: '6:00pm',
          recurring: false,
        }],
        3: [{
          name: 'Dinner Pickup',
          startTime: '5:00pm',
          endTime: '7:00pm',
          recurring: true,
        }],
        4: [{
          name: 'Weekly Lunch @ Instagram',
          startTime: '12:00pm',
          endTime: '1:00pm',
          recurring: true,
        }, {
          name: 'Dinner Pickup',
          startTime: '5:00pm',
          endTime: '7:00pm',
          recurring: true,
        }]
      }
    };
  }

  _generatePickupItems = (pickupList, pickupListDay) => {
    return pickupList.map((pickup, index) => {
      const timeString = `${pickup.startTime}-${pickup.endTime}`;
      const isPastEvent = pickupListDay < this.state.today;
      let cancelButton;

      if (!isPastEvent) {
        cancelButton = <a href="" className="cancelButton">Cancel</a>
      }

      return (
        <div className={`pickup-item ` + (isPastEvent ? 'past' : '')} key={index}>
          <h4 className="name">{pickup.name}</h4>
          <p className="time">{timeString}</p>
          <p className="repeating">{pickup.recurring ? "Repeating pickup" : "One-time pickup"}</p>
          {cancelButton}
        </div>
      )
    })
  }

  _generateSchedule = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    return days.map((day, index) => {
      const dayNum = index + 1;
      const isCurrentDay = (dayNum == this.state.today);
      const columnClass = `day-column ` + (isCurrentDay ? 'currentDay' : '');
      let columnContents;

      if (this.state.schedule[dayNum]) {
        columnContents = this._generatePickupItems(this.state.schedule[dayNum], dayNum);
      } else {
        columnContents = (
          <div className="pickup-item">
            <p className="name no-pickup-label">No pickups today</p>
          </div>
        )
      }

      return (
        <div className={columnClass} key={index}>
          <div className="day-header">
            <h3>{day}</h3>
            <button className="new-pickup-button">new pickup</button>
          </div>
          {columnContents}
        </div>
      )
    })
  }

  render() {
    let week = this._generateSchedule();

    return (
      <div className="week-overview-container">
        <div className="week-overview-title">
          <h2 className="title">This Week's Schedule</h2>
          <h3 className="day-range">Nov 11-18</h3>
        </div>

        <div className="week-container">
          {week}
        </div>
      </div>
    );
  }
}
