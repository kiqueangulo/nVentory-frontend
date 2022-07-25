import React from "react";
import { useGeneralContext } from "../../context/GeneralContext";

import "../Search/Search.css";

function Add() {
  const {
    displayLocationForm,
    setDisplayLocationForm,
    displayProductForm,
    setDisplayProductForm,
  } = useGeneralContext();

  const showLocationForm = (e) => {
    e.preventDefault();
    setDisplayLocationForm(!displayLocationForm);
  };

  const showProductForm = (e) => {
    e.preventDefault();
    setDisplayProductForm(!displayProductForm);
  };

  return (
    <>
      <h2>Add</h2>
      <div
        className={`form-title ${displayProductForm && "hide-title"}`}
        onClick={showLocationForm}
      >
        <h3>Locations</h3>
      </div>
      <form className={`search-form ${displayLocationForm && "active-form"}`}>
        <section>
          <p>
            <label htmlFor="section">
              <span>Section:</span>
            </label>
            <input type="text" id="section" name="sections" required />
          </p>
          <p>
            <label htmlFor="shelf">
              <span>Shelf:</span>
            </label>
            <input type="text" id="shelf" name="shelf_letter" required />
          </p>
          <p>
            <label htmlFor="division">
              <span>Division:</span>
            </label>
            <input type="text" id="division" name="shelf_div" required />
          </p>
        </section>
        <section>
          <p>
            <button type="submit">Add Locations</button>
          </p>
          <p>
            <button onClick={(e) => showLocationForm(e)}>Go Back</button>
          </p>
        </section>
      </form>
      <div
        className={`form-title ${displayLocationForm && "hide-title"}`}
        onClick={showProductForm}
      >
        <h3>Products</h3>
      </div>
      <form className={`search-form ${displayProductForm && "active-form"}`}>
        <section>
          <p>
            <label htmlFor="name">
              <span>Name:</span>
            </label>
            <input type="text" id="name" name="name" defaultValue="" required />
          </p>
          <p>
            <label htmlFor="brand">
              <span>Brand:</span>
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              defaultValue=""
              required
            />
          </p>
          <p>
            <label htmlFor="quatity">
              <span>Quantity:</span>
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              defaultValue=""
              required
            />
          </p>
          <p>
            <label htmlFor="price">
              <span>Price:</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              defaultValue=""
              required
            />
          </p>
        </section>
        <section>
          <p>
            <button type="submit">Add Product</button>
          </p>
          <p>
            <button onClick={(e) => showProductForm(e)}>Go Back</button>
          </p>
        </section>
      </form>
    </>
  );
}

export default Add;
