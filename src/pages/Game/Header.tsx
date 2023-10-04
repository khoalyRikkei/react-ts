function Header() {
  return (
    <header>
      <div className="total-board">
        <div className="board-player">
          <span>Player:</span>
          <span id="total-player">0</span>
        </div>
        <div className="board-total-points">
          <span>Total Points:</span>
          <span id="total-points">0</span>
        </div>
      </div>
      <div className="board-name">
        <h1>Bảng Điểm</h1>
      </div>
      <div className="none-board" />
    </header>
  );
}

export default Header;
