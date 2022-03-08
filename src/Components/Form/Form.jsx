import React from "react";
import "./Form.css";
import Input from "../UI/Inputs/Input";
import Button from "../UI/Button/Button";
import CheckBox from "../UI/Inputs/CheckBox";

const Form = () => {
  return (
    <div className="container">
      <form className="form">
        <Input type="text" placeholder="کد" />
        <Input type="text" placeholder="نام" />
        <Input type="text" placeholder="قیمت" />
        <Input type="text" placeholder="جایگاه" />

        <section className="checkBox-section">
          <div className="checkbox-control">
            <label>37</label>
            <CheckBox />
          </div>

          <div className="checkbox-control">
            <label>38</label>
            <CheckBox />
          </div>

          <div className="checkbox-control">
            <label>39</label>
            <CheckBox />
          </div>

          <div className="checkbox-control">
            <label>40</label>
            <CheckBox />
          </div>

          <div className="checkbox-control">
            <label>41</label>
            <CheckBox />
          </div>

          <div className="checkbox-control">
            <label>42</label>
            <CheckBox />
          </div>

          <div className="checkbox-control">
            <label>43</label>
            <CheckBox />
          </div>

          <div className="checkbox-control">
            <label>44</label>
            <CheckBox />
          </div>

          <div className="checkbox-control">
            <label>45</label>
            <CheckBox />
          </div>
        </section>

        <div className="btn-container">
          <Button type="submit">اضافه کردن به انبار</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
