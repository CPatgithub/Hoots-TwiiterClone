import React, { useEffect, useState } from "react";

import styled from "styled-components";

const SearchBoxContainer = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
`

const SearchBoxField = styled.div`
`

const Input = ({ input, type, placeholder }) => (
    <React.Fragment>
        <input {...input} type={type} placeholder={placeholder} autocapitalize="sentences" autocomplete="off" autocorrect="off" role="combobox" spellcheck="false" enterkeyhint="search" dir="auto" />
    </React.Fragment>
);

const SearchBox = () => {

    useEffect(() => {

    }, []);

    return (
        <SearchBoxContainer>
            <SearchBoxField
                type="text"
                name="search"
                component={Input}
                placeholder="Search"
            />
        </SearchBoxContainer>
    );
};

export default SearchBox;
