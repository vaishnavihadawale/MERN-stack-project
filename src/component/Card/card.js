export const Card = () => {
  return (
    <div>
      <div class="card mt-3" style={{ width: "18rem", maxHeight: "380px" }}>
        <img src="/assets/img-5.jpg" class="card-img-top" alt="paneer" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is some important text.</p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-danger-subtle rounded-2">
              {Array.from(Array(7), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-danger-subtle rounded-2">
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>
            <div className="fw-bolder fs-6 d-inline">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};
