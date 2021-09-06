import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const PopupLink = styled.div`
    display: inline-block;
    padding-left: 10px;
    color: #0056b8;
    transition: all 0.2s;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`;

const PopupWrapper = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    vertical-align: middle;
`;

const PopupContent = styled.div`
    background-color: white;
    max-width: 700px;
    margin: 0 auto;
    text-align: left;
    padding: 30px;
    box-sizing: border-box;
    position: relative;
    max-height: calc(100% - 20px); 
    overflow-y: scroll;
    @media (max-width: 720px) {
       margin: 20px;
    }
`;

const Closepopup = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    svg{
        width: 20px;
        height: 20px;
    }
`;

function Popup({children, title}){
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return <>
        <PopupLink onClick={()=>setOpen(true)}>{title}</PopupLink>
        {open && <PopupWrapper>
            <PopupContent>
                <Closepopup ref={wrapperRef} onClick={()=>setOpen(false)}>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-3x"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" class=""></path></svg>
                </Closepopup>
                {children}
            </PopupContent>
        </PopupWrapper>}
    </>
}

export default Popup;