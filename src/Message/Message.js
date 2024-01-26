import logo from './logo.png';
export function Message({ message, type = "success" }) {
    if (type === "error") {
      return (
        <div className="error">
          <img src={logo} alt="cross" title="cross" />
          {message}
        </div>
      );
    }
    return (
      <div className="success">
        <img src={logo} alt="tick" title="tick" />
        {message}
      </div>
    );
  }