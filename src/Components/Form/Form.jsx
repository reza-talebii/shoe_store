import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataShoes, sendRequest } from "../../store/shoes-action";
import { removeRequest } from "../../store/shoes-action";
import { shoesActions } from "../../store/shoes-slice";
import { useNavigate, useLocation } from "react-router";

//components
import "./Form.css";
import Input from "../UI/Inputs/Input";
import Button from "../UI/Button/Button";
import NumberInput from "../UI/Inputs/NumberInput";

function formatNumber(n) {
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Form = () => {
  const locationState = useLocation();
  const navigate = useNavigate();
  const shoesItem = useSelector((state) => state.shoes.items);

  const shoeEditStateNav = locationState.state || false;
  const shoeEditState = shoeEditStateNav.items || false;
  const shoeID = shoeEditStateNav.id || false;

  //state inputs

  const [nameEntered, setNameEntered] = useState(shoeEditState.name || "");
  const [codeEntered, setCodeEntered] = useState(shoeEditState.code || "");
  const [priceEntered, setPriceEntered] = useState(shoeEditState.price || "");
  const [placeEntered, setPlaceEntered] = useState(shoeEditState.place || "");
  //state size inputs
  const sizesLocation = shoeEditState.sizes ?? 0;
  const [inpSize37, setInpSize37] = useState(sizesLocation.size37 ?? 0);
  const [inpSize38, setInpSize38] = useState(sizesLocation.size38 ?? 0);
  const [inpSize39, setInpSize39] = useState(sizesLocation.size39 ?? 0);
  const [inpSize40, setInpSize40] = useState(sizesLocation.size40 ?? 0);
  const [inpSize41, setInpSize41] = useState(sizesLocation.size41 ?? 0);
  const [inpSize42, setInpSize42] = useState(sizesLocation.size42 ?? 0);
  const [inpSize43, setInpSize43] = useState(sizesLocation.size43 ?? 0);
  const [inpSize44, setInpSize44] = useState(sizesLocation.size44 ?? 0);
  const [inpSize45, setInpSize45] = useState(sizesLocation.size45 ?? 0);

  const dispatch = useDispatch();

  const addShoeHandler = (event) => {
    event.preventDefault();
    //get input value
    const inputsValue = {
      name: nameEntered,
      code: codeEntered,
      price: priceEntered,
      place: placeEntered,
      sizes: {
        size37: inpSize37,
        size38: inpSize38,
        size39: inpSize39,
        size40: inpSize40,
        size41: inpSize41,
        size42: inpSize42,
        size43: inpSize43,
        size44: inpSize44,
        size45: inpSize45,
      },
    };

    if (+inputsValue.code < 1 || !isFinite(inputsValue.code)) {
      alert("???? ???????? ?????? ????????");
      return;
    }

    //validate code
    const validateRepeatCode = shoesItem.some(
      (shoe) => shoe.items.code === inputsValue.code
    );

    if (!shoeEditStateNav) {
      if (validateRepeatCode) {
        alert("???? ???????????? ???????? ???????? !");
        return;
      }
    }

    if (shoeEditStateNav) {
      dispatch(removeRequest(shoeID));
      dispatch(shoesActions.removeShoes(shoeID));
    }

    // dispatch(shoesActions.addShoes(inputsValue));
    const sendDataRequest = async () => {
      await dispatch(sendRequest(inputsValue));
      dispatch(fetchDataShoes());
    };

    sendDataRequest();

    // clear inputs value
    const clearInputArr = [
      setNameEntered,
      setCodeEntered,
      setPriceEntered,
      setPlaceEntered,
      setInpSize37,
      setInpSize38,
      setInpSize39,
      setInpSize40,
      setInpSize41,
      setInpSize42,
      setInpSize43,
      setInpSize44,
      setInpSize45,
    ];

    clearInputArr.map((item) => item(""));

    navigate("/");
  };

  const addSizeHandler = (setValue) => setValue((prev) => prev + 1);

  const minesSizeHandler = (setValue) =>
    setValue((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="container">
      <form className="form" onSubmit={addShoeHandler}>
        <Input
          type="text"
          placeholder="????"
          value={codeEntered}
          onChange={(e) => setCodeEntered(e.target.value)}
        />
        <Input
          type="text"
          placeholder="??????"
          value={nameEntered}
          onChange={(e) => setNameEntered(e.target.value)}
        />
        <Input
          type="text"
          placeholder="????????"
          value={priceEntered}
          onChange={(e) => setPriceEntered(formatNumber(e.target.value))}
        />
        <Input
          type="text"
          placeholder="????????????"
          value={placeEntered}
          onChange={(e) => setPlaceEntered(e.target.value)}
        />

        <section className="checkBox-section">
          <div className="checkbox-control">
            <label>37 : </label>
            <NumberInput
              value={inpSize37}
              onChange={(e) => setInpSize37(e.target.value)}
            />
            <div className="addMinesSize">
              <button
                className="addSize"
                onClick={(e) => {
                  e.preventDefault();
                  addSizeHandler(setInpSize37);
                }}
              >
                +
              </button>
              <button
                className="minesSize"
                onClick={(e) => {
                  e.preventDefault();
                  minesSizeHandler(setInpSize37);
                }}
              >
                -
              </button>
            </div>
          </div>

          <div className="checkbox-control">
            <label>38 : </label>
            <NumberInput
              value={inpSize38}
              onChange={(e) => setInpSize38(e.target.value)}
            />
            <div className="addMinesSize">
              <button
                className="addSize"
                onClick={(e) => {
                  e.preventDefault();
                  addSizeHandler(setInpSize38);
                }}
              >
                +
              </button>
              <button
                className="minesSize"
                onClick={(e) => {
                  e.preventDefault();
                  minesSizeHandler(setInpSize38);
                }}
              >
                -
              </button>
            </div>
          </div>

          <div className="checkbox-control">
            <label>39 : </label>
            <NumberInput
              value={inpSize39}
              onChange={(e) => setInpSize39(e.target.value)}
            />
            <div className="addMinesSize">
              <button
                className="addSize"
                onClick={(e) => {
                  e.preventDefault();
                  addSizeHandler(setInpSize39);
                }}
              >
                +
              </button>
              <button
                className="minesSize"
                onClick={(e) => {
                  e.preventDefault();
                  minesSizeHandler(setInpSize39);
                }}
              >
                -
              </button>
            </div>
          </div>

          <div className="checkbox-control">
            <label>40 : </label>
            <NumberInput
              value={inpSize40}
              onChange={(e) => setInpSize40(e.target.value)}
            />
            <div className="addMinesSize">
              <button
                className="addSize"
                onClick={(e) => {
                  e.preventDefault();
                  addSizeHandler(setInpSize40);
                }}
              >
                +
              </button>
              <button
                className="minesSize"
                onClick={(e) => {
                  e.preventDefault();
                  minesSizeHandler(setInpSize40);
                }}
              >
                -
              </button>
            </div>
          </div>

          <div className="checkbox-control">
            <label>41 : </label>
            <NumberInput
              value={inpSize41}
              onChange={(e) => setInpSize41(e.target.value)}
            />
            <div className="addMinesSize">
              <button
                className="addSize"
                onClick={(e) => {
                  e.preventDefault();
                  addSizeHandler(setInpSize41);
                }}
              >
                +
              </button>
              <button
                className="minesSize"
                onClick={(e) => {
                  e.preventDefault();
                  minesSizeHandler(setInpSize41);
                }}
              >
                -
              </button>
            </div>
          </div>

          <div className="checkbox-control">
            <label>42 : </label>
            <NumberInput
              value={inpSize42}
              onChange={(e) => setInpSize42(e.target.value)}
            />
            <div className="addMinesSize">
              <button
                className="addSize"
                onClick={(e) => {
                  e.preventDefault();
                  addSizeHandler(setInpSize42);
                }}
              >
                +
              </button>
              <button
                className="minesSize"
                onClick={(e) => {
                  e.preventDefault();
                  minesSizeHandler(setInpSize42);
                }}
              >
                -
              </button>
            </div>
          </div>

          <div className="checkbox-control">
            <label>43 : </label>
            <NumberInput
              value={inpSize43}
              onChange={(e) => setInpSize43(e.target.value)}
            />
            <div className="addMinesSize">
              <button
                className="addSize"
                onClick={(e) => {
                  e.preventDefault();
                  addSizeHandler(setInpSize43);
                }}
              >
                +
              </button>
              <button
                className="minesSize"
                onClick={(e) => {
                  e.preventDefault();
                  minesSizeHandler(setInpSize43);
                }}
              >
                -
              </button>
            </div>
          </div>

          <div className="checkbox-control">
            <label>44 : </label>
            <NumberInput
              value={inpSize44}
              onChange={(e) => setInpSize44(e.target.value)}
            />
            <div className="addMinesSize">
              <button
                className="addSize"
                onClick={(e) => {
                  e.preventDefault();
                  addSizeHandler(setInpSize44);
                }}
              >
                +
              </button>
              <button
                className="minesSize"
                onClick={(e) => {
                  e.preventDefault();
                  minesSizeHandler(setInpSize44);
                }}
              >
                -
              </button>
            </div>
          </div>

          <div className="checkbox-control">
            <label>45 : </label>
            <NumberInput
              value={inpSize45}
              onChange={(e) => setInpSize45(e.target.value)}
            />
            <div className="addMinesSize">
              <button
                className="addSize"
                onClick={(e) => {
                  e.preventDefault();
                  addSizeHandler(setInpSize45);
                }}
              >
                +
              </button>
              <button
                className="minesSize"
                onClick={(e) => {
                  e.preventDefault();
                  minesSizeHandler(setInpSize45);
                }}
              >
                -
              </button>
            </div>
          </div>
        </section>

        <div className="btn-container">
          <Button type="submit">?????????? ???????? ???? ??????????</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
