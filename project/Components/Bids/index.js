import React from 'react';

export default function Bids(props) {
  const formRef = React.createRef();

  const handleFormSubmit = e => {
    e.preventDefault();

    const price = formRef.current.elements['price'].value;
    const description = formRef.current.elements['description'].value;

    props.addBid({ price, description });
    formRef.current.reset();
  };

  return (
    <div className="mt-5 pl-5 ml-5 Project-Bids">
      <form className="pl-3" ref={formRef} onSubmit={handleFormSubmit}>
        <div className="form-row form-group text-left">
          <div className="col-3">
            <label htmlFor="Bid-Price" className="Bid-Label">
              Your Bid
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="Bid-Price"
              name="price"
              placeholder="$  5000"
            />
          </div>
        </div>
        <div className="form-row form-group text-left">
          <div className="col-3">
            <label htmlFor="Bid-Desc" className="Bid-Label">
              Provide additional details.
            </label>
            <textarea
              className="form-control form-control-lg"
              name="description"
              id="Bid-Desc"
              placeholder="i.e. 24 days"
            />
          </div>
          <div className="col-8 offset-1 align-self-end">
            <button type="submit" className="btn btn-primary Place-Bid">
              Place Bid
            </button>
          </div>
        </div>
        <div className="form-row text-left">
          <div className="col-5">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="Accept-Bid"
              />
              <label
                className="form-check-label Accept-Bid-Label text-center"
                htmlFor="Accept-Bid"
              >
                <span>I understand that</span> All bids must include all
                estimated labor, material, permit fees, taxes, and all
                anticipated costs to consumer.
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
