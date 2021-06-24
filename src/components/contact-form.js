import React, { useEffect, useRef }  from "react"
import styled from "styled-components";
import axios from "axios";
import { createWidget } from '@typeform/embed';

const Wrapper = styled.div`
  iframe {
		width: 100%;
		height: 500px;
		outline: none;
		border-radius: 5px;
		display: block;
    border: none;
	}
`;

const ContactForm = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
      if (wrapperRef) {
        createWidget('kriN72rV', { container: wrapperRef.current });
      }
    }, [wrapperRef]);

    return (
        <Wrapper ref={wrapperRef}></Wrapper>
    );
  };

  export default ContactForm;