import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validateWithoutCallback = (data) => {
        console.log(data);
    };

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render w/o callback: {withoutCallback.current}</p>
            <p>Render with callback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                id="email"
                type="email"
                className="form-control"
                onChange={handleChange}
                value={data.email || ""}
                name="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
